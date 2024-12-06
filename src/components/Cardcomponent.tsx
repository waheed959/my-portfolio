// import Image from "next/image";
//   import { FaCode } from "react-icons/fa6";
//   import Link from "next/link";

//   interface Iprops {
//     ImgSrc: string;    imgTitlle: string;
//     imgDescription: string;
//     projectLink: string
//   }

//   export default function Card(props: Iprops) {
//     return (
//       <div className="relative group bg-slate-950 text-white hover:scale-105 duration-500 delay-75 rounded-2xl overflow-hidden flex flex-col justify-center items-center">
//         <div className="relative w-full h-[180px] md:w-[430px] md:h-[280px] rounded">
//           <Image
//             src={props.ImgSrc}
//             alt="pic1"
//             layout="fill"
            
//             className="rounded-2xl"
//           />

//           <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl"></div>
      
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <Link href={props.projectLink} >
            
//                 <FaCode className="text-white text-6xl" />
//                 <h3>Code</h3>
            
//             </Link>
//           </div>
//         </div>
      
//         <div className="relative text-center w-full md:w-[430px]  ">
//         <h1 className="text-2xl mt-3 mb-1 font-serif">{props.imgTitlle}</h1>
//         <h3 className=" font-bolder mt-1 mb-9 font-mono ">
//           {props.imgDescription}
//         </h3>
//         </div>
//       </div>
//     );
//   }


// made by me



//goal achieved 

import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";

interface Iprops {
  ImgSrc: string;
  imgTitlle: string;
  imgDescription: string;
  projectLink: string;
}

export default function Card(props: Iprops) {
  return (
    <div className="group flex flex-col bg-slate-950 text-white rounded-2xl overflow-hidden p-4 hover:scale-105 transition-transform duration-500 w-full sm:w-[90%] md:w-[30%] mx-auto">
      {/* Image Container */}
     
      <div className="relative w-full h-40 sm:h-48 md:h-60 flex justify-center ">
        <Image
          src={props.ImgSrc}
          alt={props.imgTitlle}
          layout="fill" // adjust height to maintain aspect ratio
          className="object-contain" // 'object-contain' to prevent cropping
        />
      
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={props.projectLink}>
            <div className="text-center r">
              <FaCode className="text-white text-3xl md:text-4xl" />
              <h3 className="text-sm md:text-base"></h3>
            </div>
          </Link>
        </div>
      </div>
      {/* Text Container */}
      <div className="mt-4 text-center px-2">
        <h1 className="text-xl font-serif">{props.imgTitlle}</h1>
        <h3 className="font-normal text-sm mt-1 mb-4 font-mono">
          {props.imgDescription}
        </h3>
      </div>
    </div>
  );
};
