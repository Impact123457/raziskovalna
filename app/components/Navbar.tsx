import Link from "next/link"
import Image from "next/image"
import { auth, signOut } from "@/auth";

const Navbar = async() => {
  const session = await auth();//a je user prijavlen
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20">
      <nav className="mx-2 flex items-center justify-between font-work-sans">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="WebInspector logo"
            width={70}
            height={70}
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
                className="uppercase font-bold text-blue-500 cursor-pointer">
                  Log out
              </button>
            </form>

            <Link href={`/user/${session?.user.id}`}>
              <Image src="/profile.png" alt="profile icon" width={40} height={40} className="rounded-full"/>
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
