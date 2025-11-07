import { TextHoverEffect } from "@/components/text-hover-effect";
import FlareCursor from "@/components/cursor";
import { EncryptedText } from "@/components/encrypted-text";

export default function Footer() {
    return(
        <section className="relative w-screen bg-neutral-100 flex flex-col md:flex-row items-center justify-between p-2">
            <h2 className="text-lg text-neutral-950 text-left">todos os direitos reservados *</h2>
            <h2 className="text-lg text-neutral-950">por <span className="font-semibold">kauê moreira</span></h2>
        </section>
    );
}