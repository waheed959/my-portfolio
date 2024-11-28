import Image from "next/image";
import Hero from "@/components/layout/hero";

import Project from "@/components/layout/project";
import About from "@/components/layout/about";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <About />
      <Footer />
    </>
  );
}
