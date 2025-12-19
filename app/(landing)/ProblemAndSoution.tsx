"use client"

import Image from "next/image"
import Container from "./components/Container"
import FlexBetween from "./components/FlexBetween"
import { benefits, manualProcessFeatures } from "./utils"
import Button from "./components/Button"
import { useRef } from "react"
import { useSplitText } from "../hooks/useSplitText"

const ProblemAndSoution = () => {
    const container = useRef<HTMLDivElement>(null);
     useSplitText({
            selector: ".split",
            scope: container,
            x: -40,
            type: "lines",
        })
    // useGSAP(() => {
    //     const split = SplitText.create(".split", { type: "lines" });

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: container.current,
    //             start: "top 75%",
    //              onEnter: () => tl.restart(),
    //         },
    //     });

    //     tl.from(split.lines, {
    //         x: -50,
    //         autoAlpha: 0,
    //         stagger: 0.08,
    //         duration: 2.5,
    //         ease: "back.out(1.7)",
    //     });
    // }, { scope: container });
    return (
        <Container>
            <div ref={container} className="flex flex-col gap-16 items-start">
                <FlexBetween className="gap-4">
                    <div className="bg-(--color-primary) rounded-[0.5px] w-1.5" />
                    <div className=" flex flex-col gap-4">
                        <p className="split font-bold text-[clamp(24px,4vw,40px)] tracking-[-0.9px] leading-11">Problem & Solution</p>
                        <p className="split font-normal text-[16px] leading-6 text-[#5B6671] ">Traditional vs. Automated Monitoring</p>
                    </div>
                </FlexBetween>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=" flex flex-col gap-4">
                        <h3 className="split font-bold text-[clamp(16px,4vw,30px)] leading-7 text-[#2B3D4F]">Traditional Tree Monitoring Is Costly & Inefficient</h3>
                        <p className="split font-normal text-[16px] leading-6 text-[#657586]">Scope 3 and on-the-ground project verification are complex: inconsistent data,
                            long audit cycles, poor supplier engagement, and limited ability to verify survival
                            rates and carbon capture.</p>

                        <ul className=" flex flex-col gap-4 list-none">
                            {manualProcessFeatures.map((feature, i) => (
                                <div key={`feature-${i}`} className="flex gap-4 items-center">
                                    <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                                    <div className="flex flex-col">
                                        <li className="split font-semibold text-[16px] leading-6 text-[#2B3D4F]">{feature.title}</li>
                                        <li className="split font-normal text-sm leading-5 text-[#657586]">{feature.description}</li>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <h3 className="split font-bold text-[clamp(16px,4vw,30px)] leading-7 text-(--color-primary) ">URIMPACT Provides Automated Satellite Monitoring</h3>
                        <p className="split font-normal text-[16px] leading-6 text-[#657586]">Automated satellite monitoring + AI-driven analysis provides continuous,
                            verifiable, and auditable insights across every planting project.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.map((feature, i) => (
                                <div key={`feature-${i}`} className="flex flex-col gap-3 items-start bg-[#FFFFFF] p-4 rounded-lg" style={{
                                    boxShadow: "0px 4px 16px 0px #2B3D4F14"
                                }}>
                                    <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                                    <p className="split font-semibold text-[16px] leading-6 text-[#2B3D4F]">{feature.title}</p>
                                    <p className="split font-normal text-sm leading-5 text-[#657586]">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FlexBetween className="justify-center w-full">
                    <Button
                        variant="outlined"
                        text="Watch Demo"
                    />
                </FlexBetween>
            </div>
        </Container>
    )
}

export default ProblemAndSoution