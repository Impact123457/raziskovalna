export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { writeClient } from "@/sanity/lib/write-client";
import { CHECK_FOR_EXISTING_USER } from "@/sanity/lib/queries";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, surname } = await req.json();

    if (!name || !surname || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await writeClient.fetch(
      CHECK_FOR_EXISTING_USER,
      { email }
    );

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const filePath = path.join(process.cwd(), "public", "defaultPFP.jpg");
    const buffer = fs.readFileSync(filePath);

    const imageAsset = await writeClient.assets.upload("image", buffer, {
      filename: "defaultPFP.jpg",
      contentType: "image/jpeg",
    });

    const newUser = await writeClient.create({
      _type: "user",
      name,
      surname,
      email,
      password: hashedPassword,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      },
    });

    return NextResponse.json(
      { message: "User created successfully", userId: newUser._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
