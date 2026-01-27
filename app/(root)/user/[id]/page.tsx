import { USER_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut } from "@/auth";
const Profile = async ({ params }: { params: { id: string } }) => {
    
    const id = (await params).id;
    const session = await auth();
    const user = await client.fetch(USER_BY_ID_QUERY, { id });
     
    if (!user) { 
        notFound();
    }

    if (!session) redirect("/");
    return(
        <section className="mainDIV">
            <div className="md:w-[600px] w-[200px] shadow-lg border border-gray-50 my-35 h-[300px] rounded-2xl bg-white">
                <div>
                    <div className="flex m-5 gap-2">
                        <Image
                            src={user.image || "/defaultPFP.jpg"}
                            alt="pfp"
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px] rounded-full  border-4 border-neutral-200 object-cover shadow-md"
                        />
                        <p className="mt-8 font-bold text-2xl text-neutral-900">
                            {user.name || "first name"}
                        </p> 
                        <p className="mt-8 font-bold text-2xl text-neutral-900">
                            {user.surname || "last name"}
                        </p> 
                    </div>
                    <div className="flex m-3 gap-2">
                        <Link href={`./editProfile/${user?._id}`} className="border cursor-pointer p-2 rounded-xl border-blue-500 bg-blue-500 hover:bg-blue-700 text-white">
                            Edit profile
                        </Link>
                        {session && session?.user ?(
                        <>
                            <form action={async() => {
                                "use server"
                                await signOut({redirectTo:"/"})
                                }}>
                                <button type="submit" className="border cursor-pointer p-2 rounded-xl border-blue-500 bg-blue-500 hover:bg-blue-700 text-white">
                                    Log out
                                </button>
                            </form>
                        </>
                        ):(
                            <></>
                        )}
                    </div>      
                </div>  
            </div>
        </section>
    );
}
export default Profile;
