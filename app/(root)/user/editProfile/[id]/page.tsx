import { auth } from "@/auth"
import { writeClient } from "@/sanity/lib/write-client"
import { USER_BY_ID_QUERY } from "@/sanity/lib/queries"
import { User } from "@/sanity/sanity.types"
import { redirect } from "next/navigation"
import Update from "@/app/components/Update"

export type UserType = Omit<User, "name" | "surname" | "email" | "image" | "imageUrl"> & {
    name?: string | undefined;
    surname?: string | undefined;
    email?: string | undefined;
    image?: string | undefined;
    imageUrl?: string | undefined;
}
export default async function edit({ params }: { params: { id: string } }){

    const session = await auth();
    const { id } = await params;
    //const user = await writeClient.fetch(USER_BY_ID_QUERY, {id});

    //if(session?.user.provider != "credentials") redirect("/");
    const user = await writeClient.fetch<UserType | null>(
      USER_BY_ID_QUERY,
      { id }
    );

  if (!user) {
    redirect("/");
  }

  return (
    <section>
      <Update user={user} />
    </section>
    )
}