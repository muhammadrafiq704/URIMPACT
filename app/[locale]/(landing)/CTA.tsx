"use client";
import Button from "./components/Button";
import FlexBetween from "./components/FlexBetween";
import { gsap, useGSAP } from "@/app/lib/gsap";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const CTA = () => {
    const container = useRef<HTMLDivElement>(null);
    const t = useTranslations("CTASection");

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                onEnter: () => tl.restart(),
            },
        });

        tl.fromTo(".text-container",
            {
                scale: 1.2,
                autoAlpha: 0,
            },
            {
                scale: 1,
                autoAlpha: 1,
                duration: 2.5,
                ease: "power2.out",
            });
    }, { scope: container });
    return (
        <div ref={container} style={{
            backgroundImage: "url('/images/background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '380px',
            padding: "96px 80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px"
        }}>
            <div className="text-container text-center">
                <h2 className="text-3xl font-semibold mb-4 text-white leading-9">
                    {t("title")}
                </h2>
                <p className="text-[#FFFFFF]/90 mb-4">
                    {t("subtitle")}
                </p>
                <FlexBetween className="gap-4 justify-center">
                    <Button variant="contained" text={t("primary_button")} />
                    <Button variant="outlined" text={t("secondary_button")} />
                </FlexBetween>
            </div>
        </div>
    )
}

export default CTA;