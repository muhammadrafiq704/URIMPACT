import Image from "next/image";
import Container from "./components/Container";
import { gsap, useGSAP, SplitText } from "../../app/lib/gsap";
import React from "react";

const Footer = () => {
    const container = React.useRef<HTMLElement>(null);
    useGSAP(() => {
        const split = SplitText.create(".split", { type: "lines" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                onEnter:()=> tl.restart()   
            },
        });
        tl.from(split.lines, {
            y:40,
            duration: 1,
            stagger: 0.08,
            autoAlpha: 0,
            ease: "power2.out",
        });
    }, { scope: container });
    return (
        <footer ref={container} className="bg-[#2B3D4F] text-white">
            <Container>
                <div className=" grid grid-cols-1 md:grid-cols-6 gap-12">

                    {/* LOGO AND NEWSLETTER */}
                    <div className="col-span-1 md:col-span-2 flex flex-col gap-6 items-start">
                        <Image
                            src="/images/URIMPACT_LOGO-08.svg"
                            alt="UrImpact Logo"
                            width={200}
                            height={50}
                        />
                        <p className="split text-sm leading-5 text-white/70">
                            Monitor your tree planting projects from space with automated satellite monitoring and AI-driven insights.
                        </p>
                        <div className="flex flex-col gap-2 text-sm w-full">
                            <span className="split font-medium text-sm leading-5">Subscribe to our newsletter</span>
                            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
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

                    {/* PRODUCT */}
                    <div className="split flex flex-col gap-4">
                        <span className="font-semibold text-sm leading-5">Product</span>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Features</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Pricing</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">API</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Integration</a>
                    </div>

                    {/* COMPANY */}
                    <div className="split flex flex-col gap-4">
                        <span className="font-semibold text-sm leading-5">Company</span>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">About</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Blog</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Careers</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Contact</a>
                    </div>

                    {/* CONTACT */}
                    <div className="split flex flex-col gap-4">
                        <span className="font-semibold text-sm leading-5">Resources</span>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Documentation</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Help Center</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Case Studies</a>
                        <a href="#" className="text-sm leading-5 text-white/70 hover:text-white">Webinars</a>
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

                <hr className="border-t border-white/20 my-8" />

                <p className="split text-center text-sm leading-5 text-white/50">
                    © 2025 ForestWatch. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
