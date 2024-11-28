import { RainbowButton } from "../ui/rainbow-button";
import Link from "next/link";
export default function About() {
  return (
    <div className="bg-gray-900 mx-auto max-w-screen-2xl text-white ">
      <div>
        <h1 id="about" className="text-4xl md:text-6xl font-bolder text-center font-serif">
          About me
        </h1>
        <div className="flex justify-center ">
          <div className="border-t-4 border-yellow-500 w-32 pb-6 md:pb-7 rounded "></div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center px-24 space-y-4 ">
       <p> I am a frontend developer and develop visually appealing websites for
        the best user experience with braod expertise in HTML5,CSS5,
        Javascript,Typescript,
        Tailwind,React and Nextjs. I have done various UI
        based projects that showcase my expertise in frontend development as I
        am also enrolled in Generative AI course and alongside with UI I am also
        expanding my expertise in backend technology and have done 5+ CLI based
        projects using Typescript.</p>
        <p>Get in touch to boost your business </p>
      </div>
      <div className="text-center mt-5 pb-6  ">
         <a href="mailto:thevlogger76@gmail.com">
          <RainbowButton className="bg-slate-950">Email Me</RainbowButton>
        </a>
      </div>
    </div>
  );
}
