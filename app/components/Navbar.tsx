import Link from "next/link"
import Image from "next/image"
import { auth, signOut } from "@/auth"
import { UserCircle } from "lucide-react";

const Navbar = async() => {
  const session = await auth();

  return (
    <header className="bg-white">
      <nav className="mx-2 flex items-center justify-between font-work-sans">
        <Link href="/" className="flex items-center">
          <Image
            src="/logoBlack.png"
            alt="WebInspector logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="flex items-center gap-3">
          {session && session?.user ?(
          <>
            <form action={async() => {
              "use server"
              await signOut({redirectTo:"/"})
            }}>
              <button 
                type="submit" 
                className="navButton">
                  Log out
              </button>
            </form>

            <Link href={`/user/${session?.user.id}`}>
              <UserCircle className="text-black w-10 h-10"></UserCircle>
            </Link>
          </>
          ):(
            <>
              <Link href="/login">
                <button 
                  type="submit" 
                  className="navButton">
                    Log in
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
export default Navbar
