import Image from "next/image";
export default function Hero(){
    return(
        <section className="">
            <div className=" flex items-center justify-center">
                <Image 
                src="/preptocrack-hero.svg"
                alt="Preptocrack"
                width={1000}
                height={1000}
                />
                
            </div>
        </section>
    )
}