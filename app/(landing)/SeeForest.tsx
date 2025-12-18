import Image from "next/image"
import Container from "./components/Container"
import FlexBetween from "./components/FlexBetween"

const SeeForest = () => {
    return (
        <Container>
            <div className="flex flex-col gap-16 items-start">
                <FlexBetween className="gap-4">
                    <div className="bg-(--color-primary) rounded-[0.5px] w-1.5" />
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-[clamp(24px,4vw,40px)] tracking-[-0.9px] leading-11">See Your Forest From Above</p>
                        <p className="font-normal text-[16px] leading-6 text-[#5B6671] ">Monitor all your environmental projects in one unified dashboard with real-time satellite data and automated reporting.</p>
                    </div>
                </FlexBetween>
                <div>
                    <Image src="/images/dashboard.png" alt="Forest View" width={1024} height={650} />
                </div>
            </div>
        </Container>
    )
}

export default SeeForest