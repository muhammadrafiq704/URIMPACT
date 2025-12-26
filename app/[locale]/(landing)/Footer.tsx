"use client";
import Image from "next/image";
import Container from "./components/Container";
import React from "react";
import { useGSAP, gsap, SplitText } from "@/app/lib/gsap";

const socialIcons = [
    { id: 1, icon: "/icons/linkedin-icon.png", label: 'LinkedIn' },
    { id: 1, icon: "/icons/facebook-icon.png", label: 'Facebook' },
    { id: 1, icon: "/icons/x-icon.png", label: 'X' }
]
import { useTranslations } from "next-intl";

const Footer = () => {
    const container = React.useRef<HTMLElement>(null);
    const t = useTranslations("Footer");
    useGSAP(() => {
        const split = SplitText.create(".split", { type: "lines" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                // onEnter: () => tl.restart()
            },
        });
        tl.from(split.lines, {
            y: 40,
            duration: 1,
            stagger: 0.08,
            autoAlpha: 0,
            ease: "power2.out",
        });
    }, { scope: container });
    return (
        <footer ref={container} className="bg-[#2B3D4F] text-white">
            <Container>
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-center">

                    <div className="col-span-1 md:col-span-2 flex flex-col gap-6 items-start">
                        <Image
                            src="/images/URIMPACT_LOGO-08.svg"
                            alt={t("logo_alt")}
                            width={200}
                            height={50}
                        />
                        <p className="split text-sm leading-5 text-white/70">
                            {t("description")}
                        </p>
                        <div className="flex flex-col gap-2 text-sm w-full">
                            <span className="split font-medium text-sm leading-5">
                                {t("newsletter_title")}
                            </span>
                            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
                                <input
                                    type="email"
                                    placeholder={t("email_placeholder")}
                                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 w-full"
                                />
                                <button
                                    className="bg-primary px-4 py-2 rounded-lg cursor-pointer w-full md:w-auto flex items-center justify-center"
                                    aria-label={t("subscribe_button_aria")}
                                    type="submit"
                                >
                                    <Image
                                        src="/icons/share-outline.svg"
                                        alt={t("send_icon_alt")}
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div className="col-span-1 md:col-span-2 flex justify-end gap-20">
                        <div className="split flex flex-col gap-4 ">
                            <span className="font-semibold text-sm leading-5">{t("company_title")}</span>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("contact_us")}</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("services")}</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("see_forest")}</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("problems_&_solutions")}</a>
                        </div>
                        {/* LEGAL */}
                        <div className="split flex flex-col gap-4">
                            <span className="font-semibold text-sm leading-5">{t("legal_title")}</span>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("privacy_policy")}</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("terms_of_service")}</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("cookie_policy")}</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">{t("security")}</a>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-white/20 my-8" />
                <div className="flex items-center justify-between">
                    <p className="split text-center text-sm leading-5 text-white/50">
                        {t("copyright")}
                    </p>
                    <div className="flex items-center gap-2">
                        {
                            socialIcons.map((social) => (<Image
                                key={social.id}
                                src={social.icon}
                                alt={social.label}
                                width={18}
                                height={18}
                            />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
