import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return (
        <div className="flex h-20 items-center justify-between bg-sky-700">
            <div className="">
                <Link href="/">
                <Image
                src="/prep30.svg"
                alt="Prep30"
                width={200}
                height={200}
                />
                </Link>

            </div>

        </div>
    )
}