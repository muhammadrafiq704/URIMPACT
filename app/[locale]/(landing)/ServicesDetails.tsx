"use client";
import Image from "next/image";
import Chip from "./components/Chip";
import Container from "./components/Container";
// import { servicesDetails } from "./utils";
import CSRIndexContent from "./CSRIndexContent";
import ESGIndexContent from "./ESGIndexContent";
import CarbonIndexContent from "./CarbonIndexContent";
import AgricultureIndexContent from "./AgricultureIndexContent";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/app/lib/gsap";
import { useTranslations } from "next-intl";

const ServicesDetails = () => {
    const container = useRef<HTMLDivElement>(null);
    const t = useTranslations("ServicesDetailsSection");

    const rightContent = [
        <CSRIndexContent key="csr" />,
        <ESGIndexContent key="esg" />,
        <CarbonIndexContent key="carbon" />,
        <AgricultureIndexContent key="agriculture" />
    ];

    const getTranslatedServices = () => {
        return [
            {
                id: 1,
                tag: t("services.0.tag"),
                title: t("services.0.title"),
                desc: t("services.0.desc"),
                sub_desc: t("services.0.sub_desc"),
                features: [
                    t("services.0.features.0"),
                    t("services.0.features.1"),
                    t("services.0.features.2"),
                    t("services.0.features.3"),
                    t("services.0.features.4"),
                    t("services.0.features.5")
                ],
                bg: "#2D5F3F",
            },
            {
                id: 2,
                tag: t("services.1.tag"),
                title: t("services.1.title"),
                desc: t("services.1.desc"),
                sub_desc: t("services.1.sub_desc"),
                features: [
                    t("services.1.features.0"),
                    t("services.1.features.1"),
                    t("services.1.features.2"),
                    t("services.1.features.3"),
                    t("services.1.features.4"),
                    t("services.1.features.5")
                ],
                bg: "#00B8A9",
            },
            {
                id: 3,
                tag: t("services.2.tag"),
                title: t("services.2.title"),
                desc: t("services.2.desc"),
                sub_desc: t("services.2.sub_desc"),
                features: [
                    t("services.2.features.0"),
                    t("services.2.features.1"),
                    t("services.2.features.2"),
                    t("services.2.features.3"),
                    t("services.2.features.4"),
                    t("services.2.features.5")
                ],
                bg: "#4A90E2",
            },
            {
                id: 4,
                tag: t("services.3.tag"),
                title: t("services.3.title"),
                desc: t("services.3.desc"),
                sub_desc: t("services.3.sub_desc"),
                features: [
                    t("services.3.features.0"),
                    t("services.3.features.1"),
                    t("services.3.features.2"),
                    t("services.3.features.3"),
                    t("services.3.features.4"),
                    t("services.3.features.5")
                ],
                bg: "#E8D5B7",
            },
        ];
    };

    const translatedServices = getTranslatedServices();

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>(".service-item");

        sections.forEach((section, index) => {
            const textEls = section.querySelectorAll<HTMLElement>(".split");
            const rightEl = section.querySelector(".right-content");

            if (!rightEl) return;

            const isEven = index % 2 === 0;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    onEnter: () => tl.restart(),
                },
            });

            textEls.forEach((el) => {
                const split = SplitText.create(el, {
                    type: "lines",
                    linesClass: "split-line",
                });

                tl.from(split.lines, {
                    x: isEven ? -50 : 50,
                    autoAlpha: 0,
                    stagger: 0.08,
                    duration: 1.5,
                    ease: "back.out(1.7)",
                }, "<");
            });

            tl.from(
                rightEl,
                {
                    x: isEven ? 50 : -50,
                    autoAlpha: 0,
                    duration: 1.5,
                    ease: "back.out(1.7)",
                },
                "-=0.4"
            );
        });
    }, { scope: container });

    return (
        <section ref={container}>
            {translatedServices.map((detail, index) => {
                const isEven = index % 2 === 0;
                return (
                    <Container key={detail.id}>
                        <div className={`service-item flex items-center justify-center gap-12 
                            ${isEven ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}`}>
                            {/* LEFT SIDE */}
                            <div className="w-full md:w-6/12 flex flex-col items-start">
                                <Chip color={detail.bg} className="mb-5">{detail.tag}</Chip>
                                <p className="split text-[clamp(24px,4vw,40px)] font-bold leading-11 tracking-[-0.9px] mb-3">
                                    {detail.title}
                                </p>
                                <p className="split text-lg font-medium leading-7 text-(--color-primary) max-w-xl mb-4">
                                    {detail.desc}
                                </p>
                                <p className="split text-[16px] font-normal leading-6 text-[#5B6671] max-w-xl mb-8">
                                    {detail.sub_desc}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 w-full">
                                    {detail.features.map((feature, featureIndex) => (
                                        <div key={`features-${featureIndex}`} className="flex items-center gap-3">
                                            <div className="bg-primary/10 rounded-full w-5 h-5 flex items-center justify-center">
                                                <Image
                                                    src="/icons/tick-outline-icon.svg"
                                                    alt={t("tick_icon_alt")}
                                                    width={12}
                                                    height={12}
                                                />
                                            </div>
                                            <p className="split text-sm font-normal leading-5">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* RIGHT SIDE */}
                            <div className="right-content">
                                {rightContent[index]}
                            </div>
                        </div>
                    </Container>
                );
            })}
        </section>
    );
}

export default ServicesDetails;