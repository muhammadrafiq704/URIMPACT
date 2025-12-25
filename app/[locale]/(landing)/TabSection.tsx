"use client";

import Image from "next/image";
import Container from "./components/Container";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const tabs = [
    { id: 1, icon: "/icons/onboarding.svg", label: "Onboarding", image: "/images/onboarding.png" },
    { id: 2, icon: "/icons/dashboard.svg", label: "Dashboard", sub_tab: ["Dashboard 1", "Dashboard 2"], image: ["/images/dashboard1.png", "/images/dashboard2.png"] },
    { id: 3, icon: "/icons/scope.svg", label: "Scope 1&2", image: "/images/scope.png" },
    { id: 4, icon: "/icons/ai.svg", label: "Urimpact AI", image: "/images/urimpact-ai.png" },
    { id: 5, icon: "/icons/ai.svg", label: "Suppliers", image: "/images/suppliers.png" },
    { id: 6, icon: "/icons/ai.svg", label: "Certificate", image: "/images/onboarding.png" },
];

const TabSection = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [activeSubTab, setActiveSubTab] = useState<number>(0)
    const contentRef = useRef<HTMLDivElement>(null);
    const activeTabObj = tabs.find((tab) => tab.id === activeTab);
    let activeImage = "";
    if (activeTabObj?.sub_tab && activeTabObj.image instanceof Array) {
        activeImage = activeTabObj.image[activeSubTab]
    } else if (typeof activeTabObj?.image === "string") {
        activeImage = activeTabObj.image
    }

    useEffect(() => {
        if (!contentRef.current) return;

        gsap.set(contentRef.current, { opacity: 0, y: 20, scale: 0.95 });

        gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
        });
    }, [activeTab]);

    return (
        <Container>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex w-full gap-2 border-b border-[#E8D5B7] py-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-center gap-2 w-full py-2 rounded-md transition-colors duration-300 ${activeTab === tab.id
                                ? "text-primary"
                                : ""
                                }`}
                        >
                            <Image src={tab.icon} alt={tab.label} width={24} height={24} />
                            <p className="text-lg font-semibold">{tab.label}</p>
                        </button>
                    ))}
                </div>
                {activeTab === 2 && activeTabObj?.sub_tab && (
                    <div className="flex items-center gap-2 w-full">
                        {activeTabObj.sub_tab.map((sub, index) => (
                            <button
                                key={sub}
                                onClick={() => setActiveSubTab(index)}
                                className={`px-2 py-1 rounded-full transition-all duration-300 ${activeSubTab === index ? "bg-white shadow-lg" : ""
                                    }`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>
                )}
                <div
                    ref={contentRef}
                    className="w-full h-150 overflow-auto overflow-x-hidden py-2 flex justify-center items-start border border-gray-200 rounded-md"
                >
                    {activeImage && (
                        <Image
                            src={activeImage}
                            alt="Tab Image"
                            width={800}
                            height={400}
                            className="object-contain w-full"
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default TabSection;
