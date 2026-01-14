import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="shadow-lg">
      <nav className="p-2 mx-2 flex items-center justify-between font-work-sans">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="WebInspector logo"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3">
            <Link
                href="/profile"
                className="text-sm font-medium text-blue-900/80 hover:text-blue-900 transition">
                Profile
            </Link>
            <Link
                href="/profile"
                className="text-sm font-medium text-blue-900/80 hover:text-blue-900 transition">
                Pfp
            </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
