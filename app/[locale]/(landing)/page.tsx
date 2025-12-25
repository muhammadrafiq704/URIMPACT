"use client"
import ProblemAndSoution from "./ProblemAndSoution"
import Hero from "./Hero"
import Services from "./Services"
import ServicesDetails from "./ServicesDetails"
import Trusted from "./Trusted"
import SeeForest from "./SeeForest"
import CTA from "./CTA"
import Footer from "./Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"
import TabSection from "./TabSection"

gsap.registerPlugin(ScrollTrigger, SplitText);

const Landing = () => {
    return (
        <>
            <Hero />
            <SeeForest/>
            <Trusted/>
            <TabSection/>
            <Services/>
            <ProblemAndSoution/>
            <ServicesDetails/>
            <CTA/>
            <Footer />
        </>
    )
}

export default Landing