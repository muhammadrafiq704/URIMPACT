import Image from "next/image"
import LocaleSwitcher from "./components/localSwticher"
import { useParams } from "next/navigation"
import { useState } from "react";
import { useTranslations } from "next-intl";

export type Locale = "en" | "ar";
const Navbar = () => {
    const t = useTranslations();
    const navbar = t.raw("Navbar") as { label: string; id: string }[];

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const params = useParams();
    const supportedLocales: Locale[] = ["en", "ar"];
    const locale: Locale = supportedLocales.includes(params.locale as Locale)
        ? (params.locale as Locale)
        : "en";
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const topPos = element.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ behavior: "smooth", top: topPos });
        }
    };
    return (
        <div className="w-full h-18 flex items-center justify-center backdrop-blur-lg fixed top-0 left-0 bg-black/20 shadow-sm border-b border-white/20 z-99">
            <div className="max-w-7xl px-6 md:px-10 mx-auto w-full">
                <div className="flex items-center justify-between">
                    <Image
                        src="/images/URIMPACT_LOGO-08.svg"
                        alt="logo-image"
                        width={200}
                        height={40}
                        className="object-contain"
                    />
                    <div className="flex items-center justify-center gap-8">
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="flex items-center gap-6">
                                {navbar.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-md hover:text-primary cursor-pointer"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <LocaleSwitcher currentLocale={locale} />
                        <button className="block lg:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                            <Image
                                src="/images/menu.png" alt="menu-icon" width={24} height={24}
                            />
                        </button>
                    </div>
                </div>
            </div>
            {openMenu && (
                <div className="absolute top-20 bg-primary w-full rounded-xl">
                    <div className="flex flex-col items-start gap-4 p-4">
                        {navbar.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { scrollToSection(item.id); setOpenMenu(false); }}
                                className="text-white text-md hover:text-secondary cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar