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

gsap.registerPlugin(ScrollTrigger, SplitText);

const Landing = () => {
    return (
        <>
            <Hero />
            <Trusted/>
            <Services/>
            <ProblemAndSoution/>
            <ServicesDetails/>
            <SeeForest/>
            <CTA/>
            <Footer />
        </>
    )
}

export default Landing