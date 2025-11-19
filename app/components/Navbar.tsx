import Link from "next/link"
import Image from "next/image"
const Navbar = async() =>{   
    return(
        <header className="bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={80} height={80}></Image>
                </Link>
                
            </nav>
        </header>
    )
}
export default Navbar