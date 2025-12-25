
const Container = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <section className={`max-w-360 mx-auto w-full px-6 py-4 md:py-24 md:px-30 ${className}`}>
        {children}
    </section>
  )
}

export default Container