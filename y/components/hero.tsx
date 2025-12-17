import Image from "next/image";
export default function Hero(){
    return(
        <section className="">
            <div className=" flex items-center justify-center">
                <Image 
                src="/hero.png"
                alt="Prep30"
                width={1000}
                height={1000}
                />
                
            </div>
        </section>
    )
}