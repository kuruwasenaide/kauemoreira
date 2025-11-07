import Image from "next/image";
import { TracingBeam } from "@/components/tracing-beam";
import { TextHoverEffect } from "@/components/text-hover-effect";
import Hero from "@/sections/hero";
import { SparklesCore } from "@/components/sparkles";

export default function Home() {
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

        <section className="relative bg-neutral-950 min-h-screen flex items-center justify-center mt-[100vh]">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-semibold">ainda não está pronto :/</h2>
          </div>
        </section>

        <section className="relative bg-gray-100 text-black min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">mas espero te ver.<br />em breve :)</h2>
        </section>
      </main> 
  );
}
