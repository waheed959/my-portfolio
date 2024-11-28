import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {

  
  return (
    <header className="flex justify-between bg-gray-900 text-white px-5 py-5 text-2xl mx-auto max-w-screen-2xl">
      <h2 className="font-bolder text-4xl">Waheed</h2>

      <ul className="hidden md:block ">
        <li className="space-x-32 ">
          <Link href="#home" >Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-gray-800 p-6 max-w-sm h-[60vh] overflow-y-auto border-none">
          <ul className="text-center space-y-9 font-bold text-xl text-white">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
        
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
