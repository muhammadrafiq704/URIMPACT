import ProblemAndSoution from "./ProblemAndSoution"
import Hero from "./Hero"
import Services from "./Services"
import ServicesDetails from "./ServicesDetails"
import Trusted from "./Trusted"
import SeeForest from "./SeeForest"
import CTA from "./CTA"
import Footer from "./Footer"

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