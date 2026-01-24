import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();//a je user prijavlen
  return (
    <section>
      <div className="mainDIV">
        <div className="opis" />
          <h1 className="h1">
            Welcome to <span className="text-blue-300">WebInspector</span>
          </h1>

          <p className="text">
            <span className="font-semibold text-white">WebInspector</span> analyzes any website you submit and provides
            a clear report on accessibility and usability. It identifies issues that
            impact user experience and highlights areas that don’t meet modern
            accessibility standards.
          </p>

          <div className="flex gap-2">
            {session && session?.user ?(
              <></>
            ):(
              <Link href="/login" className="btn1">
                Log in
              </Link>
            )}
              <Link href="/explore" className="btn2">
                Start exploring
              </Link>
        </div>
      </div>
    </section>
  );
}
