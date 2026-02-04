import { ApifyClient } from "apify-client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { url } = body;

  if (!url) {
    return NextResponse.json(
      { error: "URL is required" },
      { status: 400 }
    );
  }

  const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
  });

  const input = {
    startUrls: [{ url }],
    scanAllPages: false,
    loginPage: false,
  };

  try {
    // Run the scanner
    const run = await client
      .actor("accessibility_team/a11y-scanner-public")
      .call(input);

    // Fetch results
    const { items } = await client
      .dataset(run.defaultDatasetId)
      .listItems();

    return NextResponse.json({
      status: "completed",
      results: items,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Scan failed" },
      { status: 500 }
    );
  }
}
