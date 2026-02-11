import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="py-5 bg-white shadow-sm font-sans">
            <div className="flex justify-between items-center">
                <div className="p-3">
                    <Link href="/">
                        <Image src="/logoBlack.png" alt="logo" width={130} height={130} />
                    </Link>
                </div>
                <div className="flex items-center text-black md:text-[15px] md:w-[600px] w-[200px] text-[10px] text-center">
                    <p>
                      Analizira vsako spletno mesto, ki ga pošljete, in zagotovi jasno poročilo o dostopnosti in uporabnosti. Prepozna težave, ki vplivajo na uporabniško izkušnjo, in izpostavi področja, ki ne izpolnjujejo sodobnih standardov dostopnosti.
                    </p>
                </div>
                <div className="flex items-right text-black md:w-[200px] md:text-[15px] text-[10px] w-[10s0px]">
                    <p>Contact informacije: 
                    <br></br>  
                    AccesCheck@gmail.com
                    <br></br> 
                    +070 622 294
                    </p>
                </div>
                
            </div>
        </section>
  );
};

export default Footer;
 