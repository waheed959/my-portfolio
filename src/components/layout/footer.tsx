import Link from "next/link"
export default function Footer(){
    return(
        <>
        <div id="contact"  className="bg-gray-950 max-w-screen-2xl mx-auto text-white flex md:justify-between flex-col items-center gap-y-5 p-10 text-2xl "
        >
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>

        </div>


        </>
    )
}