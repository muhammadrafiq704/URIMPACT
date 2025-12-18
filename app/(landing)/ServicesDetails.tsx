import Image from "next/image"
import Chip from "./components/Chip"
import Container from "./components/Container"
import { servicesDetails } from "./utils"
import CSRIndexContent from "@/public/icons/CSRIndexContent"
import ESGIndexContent from "./ESGIndexContent"
import CarbonIndexContent from "./CarbonIndexContent"
import AgricultureIndexContent from "./AgricultureIndexContent"

const rightContent = [
    <CSRIndexContent key="csr" />,
    <ESGIndexContent key="esg" />,
    <CarbonIndexContent key="carbon" />,
    <AgricultureIndexContent key="agriculture" />
]

const ServicesDetails = () => {
    return (
        <section>
            {
                servicesDetails.map((detail, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <Container key={detail.id}>
                            <div className={`flex  items-center justify-center gap-12 
                        ${isEven ? " flex-col md:flex-row" : " flex-col md:flex-row-reverse"} `}>
                                {/* LEFT SIDE  */}
                                <div className="w-full md:w-6/12 flex flex-col items-start" >
                                    <Chip color={detail.bg} className="mb-5">{detail.tag}</Chip>
                                    <p className="text-[clamp(24px,4vw,40px)] font-bold leading-11 tracking-[-0.9px] mb-3">{detail.title}</p>
                                    <p className="text-lg font-medium leading-7 text-(--color-primary) max-w-xl mb-4">{detail.desc}</p>
                                    <p className="text-[16px] font-normal leading-6 text-[#5B6671] max-w-xl mb-8">{detail.sub_desc}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 w-full">
                                        {
                                            detail.features.map((feature, index) => (
                                                <div key={`features-${index}`} className="flex items-center gap-3">
                                                    <div className="bg-primary/10 rounded-full w-5 h-5 flex items-center justify-center">
                                                        <Image src="/icons/tick-outline-icon.svg" alt="tick-icon" width={12} height={12}
                                                            className="" />
                                                    </div>
                                                    <p className="text-sm font-normal leading-5">{feature}</p>
                                                </div>
                                            ))
                                        }

                                    </div>

                                </div>
                                {/* RIGHT SIDE  */}
                                {rightContent[index]}
                            </div>
                        </Container>
                    )
                })
            }
        </section >
    )
}

export default ServicesDetails