"use client"
import { Typewriter } from "react-simple-typewriter"
import Image from "next/image"

export default function Hero(){
    return(
        <main id="home" className="bg-slate-950  border-yellow-400 border-t-4 mx-auto max-w-screen-2xl">
        <div className="flex flex-col-reverse md:flex-row px-5 md:gap-72 ">
           <div className=" mt-5 md:mt-36 font-serif">
           <h1 className="text-4xl md:text-6xl font-bolder text-center pt-10 text-white">Hi, I am Muhammad Waheed</h1>
            <h2 className="text-2xl md:text-4xl text-center font-bolder mt-10 text-white">
            <Typewriter
            words={['I am a frontend Developer','A UI , UX designer',`I convert ideas into digital reality`,]}
            loop={0}
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={1000}
            />
        </h2>
           </div>
           <div>
            <Image 
            className="mt-8"
            src="/portfolio.png"
            alt="pic"
            width={700}
            height={300}
            
            />
           </div>
        </div>
        </main>
    )
}