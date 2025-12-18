import Image from "next/image"
import Container from "./components/Container"
import FlexBetween from "./components/FlexBetween"
import { services } from "./utils"

const Services = () => {
  return (
    <Container>
      <div className="flex flex-col gap-16 items-start">
        <FlexBetween className="gap-4">
          <div className="bg-(--color-primary) rounded-[0.5px] w-1.5" />
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[clamp(24px,4vw,40px)] tracking-[-0.9px] leading-11">Our Services</p>
            <p className="font-normal text-[16px] leading-6 text-[#5B6671] ">Comprehensive environmental monitoring solutions for every need</p>
          </div>
        </FlexBetween>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="relative p-8 border border-[#E2E7E980] rounded-xs flex flex-col gap-4">
              <div
                className="rounded-xs h-1 w-full absolute top-0 left-0"
                style={{ backgroundColor: service.bg }}
              />

              <div className="flex items-start">
                <Image src={service.icon} alt={service.title} width={48} height={48} />
              </div>

              <h3 className="font-bold text-[clamp(16px,4vw,24px)] leading-7">{service.title}</h3>

              <p className="font-normal text-[16px] leading-6 text-[#5B6671]">{service.description}</p>

              <ul className="flex flex-col gap-2 list-none">
                {service.features.map((feature, i) => (
                  <div key={`feature-${i}`} className="flex gap-3 items-center">
                    <Image src="/icons/tick-outline-icon.svg" alt="tick-icon" width={16} height={16} />
                    <li className="font-normal text-[16px] leading-6 text-[#5B6671]">{feature}</li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </Container>
  )
}

export default Services