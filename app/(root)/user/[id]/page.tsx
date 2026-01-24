import { USER_BY_ID_QUERY } from "@/sanity/lib/queries";
import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Profile = async ({ params }: { params: { id: string } }) => {
    
    const id = (await params).id;
    const session = await auth();
    const user = await client.fetch(USER_BY_ID_QUERY, { id });

    if (!session) redirect("/");
    return(
        <section>
        <div className="md:w-[900px] w-[200px] my-35 mx-auto h-[230px]  
                        rounded-2xl shadow-xl bg-white border border-neutral-200">
            <div>
                <h1 className="m-6 font-extrabold text-3xl text-neutral-900 tracking-tight">
                    {user.username}
                </h1> 

                <div className="flex p-4 gap-6 items-start">
                    <Image
                        src={user.image || "/defaultPFP.jpg"}
                        alt="pfp"
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] rounded-full 
                                   border-4 border-neutral-200 
                                   object-cover shadow-md"
                    />

                    <div className="flex flex-col justify-between">
                        {session?.user.provider == "credentials" ? 
                        <Link
                            href={`./editProfile/${user?._id}`}
                            className="w-fit rounded-lg bg-black text-white 
                                       px-4 py-2 mt-4 ml-2
                                       hover:bg-neutral-800 transition-all"
                        >
                            Edit profile
                        </Link>
                        :
                        <p className="text-sm text-neutral-500 italic mt-4 ml-2">
                            If you are logged in with GitHub you cannot edit your profile!!
                        </p>
                        }
                    </div>
                </div>       
            </div>  
         </div>
        </section>
    );
}
export default Profile;
