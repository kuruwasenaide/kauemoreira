import { TextHoverEffect } from "@/components/text-hover-effect";
import FlareCursor from "@/components/cursor";
import { EncryptedText } from "@/components/encrypted-text";
import { IconBrandGithub, IconBrandInstagram, IconBrandSteam, IconBrandDiscordFilled } from "@tabler/icons-react";

export default function Social() {
    return(
        <section id="1" className="relative bg-neutral-950 min-h-screen flex items-center justify-center px-5">
          <div className="w-md md:w-lg flex flex-col gap-5 items-center text-left bg-neutral-800/50 p-5 rounded-lg">
            <div className="flex items-center justify-start mr-auto text-left gap-5">
                <div className="relative w-30 h-30">
                    <img src="/pfp.jpg" className="rounded-full w-full border-4 border-red-500/60"></img>
                </div>
                <div className="flex flex-col">
                    <EncryptedText
                            text="kauê moreira"
                            encryptedClassName="text-neutral-500 font-semibold text-md md:text-2xl w-full"
                            revealedClassName="text-neutral-200 font-semibold text-md md:text-2xl w-full"
                            revealDelayMs={120}
                    />
                    <p className="text-red-500/60 mb-auto font-semibold">indisponível*</p>
                    <div className="flex flex-row gap-2 mt-4">
                        <a href="https://github.com/kuruwasenaide" target="_blank" className="group p-1 bg-neutral-800 rounded-full"><IconBrandGithub className="transition-transform transform group-hover:-translate-y-2" /></a>
                        <a href="https://www.instagram.com/suspeito/" target="_blank" className="group p-1 bg-neutral-800 rounded-full"><IconBrandInstagram className="transition-transform transform group-hover:-translate-y-2" /></a>
                        <a href="https://steamcommunity.com/profiles/76561198258099835" target="_blank" className="group p-1 bg-neutral-800 rounded-full"><IconBrandSteam className="transition-transform transform group-hover:-translate-y-2" /></a>
                        <a className="group p-1 px-2 bg-neutral-800 rounded-full flex flex-row gap-2"><IconBrandDiscordFilled className="transition-transform transform group-hover:-translate-y-2" /> <span className="transition-transform transform group-hover:-translate-y-2">k_ue</span></a>
                    </div>
                </div>
            </div>
            <img src="https://i.makeagif.com/media/11-22-2015/Y2UHpy.gif" className="rounded-xs w-full h-auto"></img>
          </div>
        </section>
    );
}