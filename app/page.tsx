import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();//a je user prijavlen
  return (
    <section>
      <div className="mainDIV">
        <div className="opis" />
          <h1 className="h1">
            Dobrodošli v <span className="text-blue-300">WebInspector</span>
          </h1>
          
          Dostopen splet ni izbira — je standard.

          <p className="text">
            <span className="font-semibold text-white">WebInspector</span> analizira vsako spletno
             mesto, ki ga pošljete, in zagotovi jasno poročilo o dostopnosti in uporabnosti. 
             Prepozna težave, ki vplivajo na uporabniško izkušnjo, in izpostavi področja, 
             ki ne ustrezajo sodobnim standardom dostopnosti.
          </p>

          <div className="flex gap-2">
            {session && session?.user ?(
              <></>
            ):(
              <Link href="/login" className="btn1">
                Prijava
              </Link>
            )}
              <Link href="/explore" className="btn2">
                Začni analizirati
              </Link>
        </div>
      </div>
    </section>
  );
}
