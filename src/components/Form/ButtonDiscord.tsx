import { DiscordLogo } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function ButtonDiscord({ ...rest }: ButtonFormProps) {
    return (
        <button {...rest} 
        className="rounded-lg bg-sky-700 w-full p-2 text-white hover:bg-sky-900 transition-colors text-sm flex gap-2 items-center font-semibold">
            <DiscordLogo size={24} />
            Login Discord
        </button>
    )
}