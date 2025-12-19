import Button from "./components/Button"
import FlexBetween from "./components/FlexBetween"
import { gsap, useGSAP } from "../lib/gsap"
import { useRef } from "react"

const CTA = () => {
    const container = useRef<HTMLDivElement>(null);
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
                <h2 className="text-3xl font-semibold mb-4 text-white leading-9">Ready to Monitor Your Forest Impact?</h2>
                <p className="text-[#FFFFFF]/90 mb-4">Join leading organizations using satellite technology for transparent
                    tree monitoring.</p>
                <FlexBetween className="gap-4 justify-center">
                    <Button variant="contained" text="Request a Demo" />
                    <Button variant="outlined" text="Contact Sales" />
                </FlexBetween>
            </div>
        </div>
    )
}

export default CTA