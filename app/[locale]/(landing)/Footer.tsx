import Image from "next/image";
import Container from "./components/Container";
import React from "react";
import { useGSAP, gsap, SplitText } from "@/app/lib/gsap";

const socialIcons = [
    { id: 1, icon: "/icons/linkedin-icon.png", label: 'LinkedIn' },
    { id: 1, icon: "/icons/facebook-icon.png", label: 'Facebook' },
    { id: 1, icon: "/icons/x-icon.png", label: 'X' }
]

const Footer = () => {
    const container = React.useRef<HTMLElement>(null);
    useGSAP(() => {
        const split = SplitText.create(".split", { type: "lines" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                onEnter: () => tl.restart()
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
                            alt="UrImpact Logo"
                            width={200}
                            height={50}
                        />
                        <p className="split text-sm leading-5 text-white/70">
                            Monitor your tree planting projects from spafce with automated satellite monitoring and AI-driven insights.
                        </p>
                        <div className="flex flex-col gap-2 text-sm w-full">
                            <span className="split font-medium text-sm leading-5">Subscribe to our newsletter</span>
                            <div className="flex flex-col md:flex-row items-center gap-2 max-w-sm w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className=" bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30  w-full"
                                />
                                <button
                                    className="bg-primary px-4 py-2 rounded-lg cursor-pointer w-full md:w-auto flex items-center justify-center"
                                    aria-label="Subscribe"
                                    type="submit"
                                >
                                    <Image
                                        src="/icons/share-outline.svg"
                                        alt="Send"
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
                            <span className="font-semibold text-sm leading-5">Company</span>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">About Us</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">See Forest</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Services</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Contact Us</a>
                        </div>
                        {/* LEGAL */}
                        <div className="split flex flex-col gap-4">
                            <span className="font-semibold text-sm leading-5">Legal</span>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Terms of Service</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Cookie Policy</a>
                            <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Security</a>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-white/20 my-8" />
                <div className="flex items-center justify-between">
                    <p className="split text-center text-sm leading-5 text-white/50">
                        © 2025 ForestWatch. All rights reserved.
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
