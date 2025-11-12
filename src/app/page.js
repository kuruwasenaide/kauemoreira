import Image from "next/image";
import { TracingBeam } from "@/components/tracing-beam";
import { TextHoverEffect } from "@/components/text-hover-effect";
import Hero from "@/sections/hero";
import { SparklesCore } from "@/components/sparkles";
import { FloatingDock } from "@/components/floating-dock";
import {
  IconBrandGithub,
  IconFileSad,
  IconBrandInstagram,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandThreads,
} from "@tabler/icons-react";
import Social from "@/sections/social";
import Footer from "@/components/footer";

export default function Home() {
  const links = [
    {
      title: "home",
      icon: (
        <IconHome className="h-full w-full" />
      ),
      href: "#",
    },
 
    {
      title: "social",
      icon: (
        <IconBrandThreads className="h-full w-full" />
      ),
      href: "#1",
    },
    {
      title: "em breve (1)",
      icon: (
        <IconFileSad className="h-full w-full" />
      ),
      href: "#2",
    },
    {
      title: "github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-100" />
      ),
      href: "https://github.com/kuruwasenaide",
      newtab: true,
    },
    {
      title: "instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full" />
      ),
      href: "https://www.instagram.com/suspeito/",
      newtab: true,
    },
  ];

  return (
      <main className="relative w-screen">  
        <Hero />
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.5}
          particleDensity={12}
          className="z-5 absolute"
          particleColor="#fff"
        />
        <div className="fixed bottom-5 left-full -translate-x-[calc(100%_+_10px)] md:left-[50%] md:-translate-x-[50%] z-50 cursor-none">
          <FloatingDock
            items={links}
          />
        </div>
        <div className="mt-[100vh]"><Social /></div>

        <section id="2" className="relative bg-gray-100 text-black min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">site incompleto<br />espero te ver em breve :)</h2>
        </section>
        <Footer />
      </main> 
  );
}
