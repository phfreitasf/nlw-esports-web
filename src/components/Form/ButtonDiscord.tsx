import axios from 'axios'
import { DiscordLogo } from 'phosphor-react'
import { ButtonHTMLAttributes, useContext } from 'react'
import discordContext from '../../context/discordContext'

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function ButtonDiscord({ ...rest }: ButtonFormProps) {
    async function handleDiscordLogin() {

        if (isLogged) {
            await axios.get('https://genshinapi.ddns.net:3333/api/auth/discord/logout', { withCredentials: true })
            window.location.reload()
        }
        else {
            window.location.href = ('https://genshinapi.ddns.net:3333/api/auth/discord')
        }
    }


    const { isLogged } = useContext(discordContext)
    return (
        <div>
            <button {...rest} onClick={handleDiscordLogin}
                className="rounded-lg bg-sky-700 w-full p-2 text-white hover:bg-sky-900 transition-colors text-sm flex gap-2 items-center font-semibold">
                <DiscordLogo size={24} />
                {isLogged ? 'Desconectar' : 'Login'}
            </button>

        </div>
    )
}