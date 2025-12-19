"use client";
import Image from "next/image"
import Container from "./components/Container"
import FlexBetween from "./components/FlexBetween"
import { images, stats } from "./utils"
import React from "react"
import { useScrambleText } from "../hooks/useScrambleText";
import { useSplitText } from "../hooks/useSplitText";

const Trusted = () => {
    const container = React.useRef<HTMLDivElement>(null);
    useScrambleText({
        selector: ".stat-value",
        scope: container,
        chars: "0123456+",
    });
    useSplitText({
        selector: ".split",
        scope: container,
        y: 20,
        type: "words",
    })

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
                            <p className="stat-value font-bold text-[clamp(18px,4vw,36px)] leading-10 text-[#2B3D4F]">
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