import { TextHoverEffect } from "@/components/text-hover-effect";
import FlareCursor from "@/components/cursor";
import { EncryptedText } from "@/components/encrypted-text";

export default function Hero() {
    return(
        <section className="fixed bg-neutral-950 top-0 left-0 w-full h-screen flex flex-col items-start justify-center text-white text-center">
            <div className="z-0 w-full bg-neutral-950">
                <TextHoverEffect text="<kauê />" />
                <div className="transform">
                    <EncryptedText
                        text="venho do futuro, trazendo o futuro até você."
                        encryptedClassName="text-neutral-500 text-md md:text-xl w-full"
                        revealedClassName="text-white text-md md:text-xl w-full"
                        revealDelayMs={80}
                    />
                </div>
            </div>
        </section>
    );
}