import Image from "next/image";
import Link from "next/link";
const Footer = () =>{
    return(
        <section className="py-2 bg-white shadow-sm font-sans">
            <div className="flex justify-between items-center">
                <div className="p-3">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={90} height={90} />
                    </Link>
                </div>
                <div className="flex items-center text-black md:text-[15px] md:w-[600px] w-[200px] text-[10px] text-center">
                    <p>
                        Analyzes any website you submit and provides
                        a clear report on accessibility and usability. It identifies issues that
                        impact user experience and highlights areas that don’t meet modern
                        accessibility standards.
                    </p>
                </div>
                <div className="flex items-right text-black md:w-[200px] md:text-[15px] text-[10px] w-[10s0px]">
                    <p>Contact information: 
                    <br></br>  
                        accesCheck@gmail.com
                    <br></br> 
                        +368 098 123 333
                    </p>
                </div>
                
            </div>
        </section>
    )
}
export default Footer