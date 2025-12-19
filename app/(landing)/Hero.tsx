"use client";
import Button from "./components/Button"
import ArrowIcon from "@/public/icons/arrow-right.svg";
import FlexBetween from "./components/FlexBetween";
import Image from "next/image";
import React from "react";
import { gsap, useGSAP, } from "../lib/gsap";
import { useScrambleText } from "../hooks/useScrambleText";
import { useSplitText } from "../hooks/useSplitText";


const Hero = () => {
    const container = React.useRef<HTMLDivElement>(null);
    useScrambleText({
        selector: ".stat-value",
        scope: container,
    })
    useSplitText({
        selector: ".hero-title",
        scope: container,
        y: 40,
        type: "words"
    })
    useGSAP(() => {
        gsap.to(".floating-overlay", {
            y: -100,
            duration: 2.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });

        gsap.fromTo(".right-element", {
            scale: 0,
            opacity: 0,
            duration: 2
        }, {
            scale: 1,
            opacity: 1,
            duration: 2
        })
    }, { scope: container });
    return (
        <section ref={container} className=" min-h-screen relative px-6 md:px-20 flex items-center justify-center">
            {/* LEFT SECTION  */}
            {/* hero container */}
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="md:w-8/12 w-full flex flex-col items-start gap-8 mt-10 md:mt-0">
                    <span className="hero-title uppercase font-semibold text-sm leading-5 tracking-[1.4px] text-(--color-primary)">Satellite Forest Monitoring</span>
                    <p className="hero-title text-[clamp(28px,4vw,48px)] font-bold leading-12 -tracking-[1.2px] text-(-color-secondary)">Monitor Tree Planting Projects <span className="text-(--color-primary)">From Space</span></p>
                    <p className="hero-title text-[clamp(16px,4vw,24px)] font-normal leading-7 text-(--color-secondary) opacity-90">Automated satellite monitoring for transparent, verifiable tree
                        planting impact. Real-time data, instant reports, and
                        stakeholder confidence.</p>
                    <Button
                        text="Start Monitoring"
                        variant="contained"
                        icon={ArrowIcon}
                    />
                    <div className="w-full overflow-hidden">
                        <div className="marque-animation flex items-center gap-6 whitespace-nowrap">

                            <FlexBetween className="gap-2 items-center">
                                <Image src="/icons/satellite.svg" alt="Satellite Icon" width={16} height={16} />
                                <p className="text-[16px] font-normal leading-5 opacity-70 text-(--color-secondary)">
                                    Daily satellite updates
                                </p>
                            </FlexBetween>

                            <FlexBetween className="gap-2 items-center">
                                <Image src="/icons/tree.svg" alt="Tree Icon" width={16} height={16} />
                                <p className="text-[16px] font-normal leading-5 opacity-70 text-(--color-secondary)">
                                    10M+ trees monitored
                                </p>
                            </FlexBetween>

                            <FlexBetween className="gap-2 items-center">
                                <Image src="/icons/audit.svg" alt="Audit Icon" width={16} height={16} />
                                <p className="text-[16px] font-normal leading-5 opacity-70 text-(--color-secondary)">
                                    Audit-ready reports
                                </p>
                            </FlexBetween>

                        </div>
                    </div>

                </div>
                {/* RIGHT SECTION  */}
                <div className="right-element w-full md:w-5/12 flex items-center justify-center md:justify-end">
                    <div className="relative flex flex-col gap-3 bg-white rounded-lg border border-[#EDF1F3] p-4.5 w-full " style={{ boxShadow: "0px 24px 64px 0px #2B3D4F33" }}>
                        <FlexBetween className="justify-between">
                            <p className="font-semibold text-sm leading-5 text-(--color-secondary)">Project: Amazon Reforestation</p>
                            <div className="bg-primary/10 px-2 py-1 rounded-full flex items-center justify-center"><span className="text-(--color-primary) text-[12px] font-medium leading-4 opacity-100">Live</span></div>
                        </FlexBetween>
                        <div className="rounded-lg bg-[#2F603F33] overflow-hidden">
                            <Image
                                src="/images/forest-mountain.png"
                                alt="Project Image"
                                width={600}
                                height={180}
                                className="w-full h-ful object-cover"
                                style={{
                                    background: " linear-gradient(0deg, rgba(43, 61, 79, 0.3) 0%, rgba(43, 61, 79, 0) 100%)",
                                }}
                            />
                        </div>
                        <FlexBetween className="justify-between gap-3">
                            <div className="rounded-lg bg-[#F6F8F9] p-3 text-center w-full">
                                <p className="text-[#2B3D4F] font-bold text-lg leading-7 mb-1 stat-value">2,450</p>
                                <p className="text-[#657586] font-normal text-xs leading-4 mb-1">Trees planted</p>
                                <p className="text-(--color-primary) font-medium text-xs leading-4 stat-value">+12%</p>
                            </div>
                            <div className="rounded-lg bg-[#F6F8F9] p-3 text-center w-full">
                                <p className="text-[#2B3D4F] font-bold text-lg leading-7 mb-1 stat-value">94%</p>
                                <p className="text-[#657586] font-normal text-xs leading-4 mb-1">Survival rate</p>
                                <p className="text-(--color-primary) font-medium text-xs leading-4 stat-value">+3%</p>
                            </div>
                            <div className="rounded-lg bg-[#F6F8F9] p-3 text-center w-full">
                                <p className="text-[#2B3D4F] font-bold text-lg leading-7 mb-1 stat-value">12.3t</p>
                                <p className="text-[#657586] font-normal text-xs leading-4 mb-1">CO₂ captured</p>
                                <p className="text-(--color-primary) font-medium text-xs leading-4 stat-value">+8%</p>
                            </div>
                        </FlexBetween>
                        <div className="floating-overlay absolute -bottom-7 -left-4 md:-left-6 flex items-center gap-3 p-3 rounded-lg bg-[#FFFFFF] border border-[#EDF1F3] shadow-[0px 4px 16px 0px #2B3D4F14]"
                            style={{
                                boxShadow: "0px 4px 16px 0px #2B3D4F14"
                            }}
                        >
                            <Image
                                src="/icons/tree-icon.svg"
                                alt="Tree icons"
                                width={32}
                                height={32}
                            />
                            <FlexBetween className="flex-col">
                                <p className="text-[#2B3D4F] font-medium text-xs leading-4">New Detection</p>
                                <p className="text-[#657586] font-normal text-xs leading-4">+156 trees verified</p>
                            </FlexBetween>
                        </div>
                    </div>
                </div>
            </div>
            {/* BACKGROUND OVERLAY IMAGE  */}
            <div className="absolute top-0 right-0 -z-10 pointer-events-none select-none">
                <Image
                    src="/images/background-overlay-image.png"
                    alt="Background Overlay"
                    width={600}
                    height={600}
                    priority={true}
                />
            </div>
        </section>
    )
}

export default Hero