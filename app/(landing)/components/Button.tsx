import Image from "next/image";

type ButtonProps = {
    variant?: 'contained' | 'outlined';
    onClick?: () => void;
    text: string;
    icon?: string;
}

const Button = ({ variant = 'contained', onClick, text, icon }: ButtonProps) => {
    return (
        <button
            className={`
        ${variant === 'contained' ? 'bg-(--color-primary) text-white hover:bg-[#077168]' : 'text-(--color-primary) border-2 border-(--color-primary) hover:bg-(--color-primary) hover:text-[#FFFFFF]'} '}
        px-8 py-2.5 text-lg leading-7 flex items-center gap-1 font-semibold cursor-pointer transition-all duration-500 ease-in-out
      `}
            onClick={onClick}
            style={variant === 'contained' ? {
                boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)'
            } : undefined}
        >
            {text}
            {variant === "contained" && icon && (<Image src={icon} alt="Icon" width={18} height={18} className="text-color" />)}
        </button>
    )
}

export default Button