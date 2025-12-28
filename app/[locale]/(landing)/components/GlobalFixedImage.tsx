import Image from "next/image"

const GlobalFixedImage = () => {
  return (
    <div className="fixed top-0 right-0 -z-10 pointer-events-none select-none max-w-full overflow-hidden">
      <Image
        src="/images/background-overlay-image.png"
        alt="Background Overlay"
        width={600}
        height={600}
        priority={true}
        className="max-w-[90vw] md:max-w-none"
      />
    </div>
  )
}

export default GlobalFixedImage