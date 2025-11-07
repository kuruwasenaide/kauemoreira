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
} from "@tabler/icons-react";

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
      title: "em breve",
      icon: (
        <IconFileSad className="h-full w-full" />
      ),
      href: "#2",
    },
    {
      title: "em breve",
      icon: (
        <IconFileSad className="h-full w-full" />
      ),
      href: "#3",
    },
    {
      title: "instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full" />
      ),
      href: "https://www.instagram.com/suspeito/",
      newtab: true,
    },
    {
      title: "github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-100" />
      ),
      href: "https://github.com/kuruwasenaide",
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

        <section id="2" className="relative bg-neutral-950 min-h-screen flex items-center justify-center mt-[100vh]">
          <div className="max-w-2xl flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold mb-2">ainda não está pronto</h2>
            <img src="https://media.tenor.com/ufPsZFFomo4AAAAM/crying-cat-sad-cat.gif" className="w-50 md:w-full"></img>
          </div>
        </section>

        <section id="3" className="relative bg-gray-100 text-black min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">mas espero te ver.<br />em breve :)</h2>
        </section>
      </main> 
  );
}
