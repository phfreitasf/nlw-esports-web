import { ButtonHTMLAttributes } from 'react'

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
}

export function ButtonForm({ text, ...rest }: ButtonFormProps) {
    return (
        <button {...rest} className="rounded-lg bg-[#8B5CF6] w-full p-1  text-white font-semibold hover:bg-violet-700 transition-colors">
            {text}
        </button>
    )
}