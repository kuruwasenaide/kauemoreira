
import Social from "@/sections/social";
import { SparklesCore } from "@/components/sparkles";

export default function x() {
    return (
        <>
            <SparklesCore
                background="transparent"
                minSize={0.5}
                maxSize={1.5}
                particleDensity={12}
                className="z-5 absolute"
                particleColor="#fff"
            />
            <Social />
        </>
  );
}
