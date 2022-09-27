import { ButtonHTMLAttributes } from 'react'

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
}

export function ButtonForm({ text, ...rest }: ButtonFormProps) {
    return (
        <button {...rest} className="rounded-lg bg-sky-700 w-full p-1  text-white font-semibold hover:bg-sky-900 transition-colors">
            {text}
        </button>
    )
}