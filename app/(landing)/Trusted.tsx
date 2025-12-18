"use client";
import Image from "next/image"
import Container from "./components/Container"
import FlexBetween from "./components/FlexBetween"
import { images, stats } from "./utils"
import React from "react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
const Trusted = () => {
    const container = React.useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 🔹 Split heading text
        const split = SplitText.create(".split", { type: "lines" });

        // 🔹 Scroll-based timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        // 1️⃣ Heading animation
        tl.from(split.lines, {
            y: 40,
            autoAlpha: 0,
            stagger: 0.06,
            duration: 1,
            ease: "back.out(1.7)",
        });

        // 2️⃣ Stats animation (starts only after trigger)
        tl.to(
            ".value-text",
            {
                yPercent: -50,
                duration: 2.5,
                ease: "none",
                yoyo: true,
                repeat: -1,
            },
            "-=0.3"
        );

        // 🔹 Cleanup
        return () => {
            split.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, { scope: container });

    return (
        <Container>
            <div ref={container} className="flex flex-col gap-12 items-center justify-center mt-16 md:mt-0">
                <p className="split font-semibold text-[clamp(16px,4vw,30px)] leading-9 text-[#2B3D4F] ">Trusted by Leading Organizations</p>
                <div className="w-full overflow-hidden">
                    <div className="w-full overflow-hidden">
                        <div className="marque-animation flex gap-16 w-full">
                            {[...images, ...images].map((src, index) => (
                                <Image key={index} src={`${src}`} alt={`Marquee ${index}`} width={400} height={200} />
                            ))}
                        </div>
                    </div>
                </div>
                <FlexBetween className="items-center justify-center gap-15">
                    {stats.map((item) => (
                        <div key={item.label} className="flex flex-col gap-4">
                            <p className="value-text font-bold text-[clamp(18px,4vw,36px)] leading-10 text-[#2B3D4F]">
                                {item.value}
                            </p>
                            <p className="font-normal text-sm leading-5 text-[#2B3D4F]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </FlexBetween>

            </div>
        </Container>
    )
}

export default Trusted