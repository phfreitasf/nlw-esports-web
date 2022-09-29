import axios from 'axios';
import React from 'react'

//esse arquivo de contexto disponibiliza as informações do discord caso logado para toda aplicacao que importar


interface DiscordContext {
    isLogged: boolean | '';
    user: DiscordInfos | any;
    discordApiInfo: DiscordApiInfo | any;
}

export interface DiscordInfos {
    data: {
        discordId: string | '';
        name: string | '';
        access_token: string | '';
        refresh_token: string | '';
        createdAt?: any | '';
    }
}

export interface DiscordApiInfo {
    data: {
        id: string | '';
        username: string | '';
        avatar: string | '';
        avatar_decoration: string | '';
        discriminator: string | '';
        public_flags: number | '';
        flags: number | '';
        banner: string | '';
        banner_color: string | '';
        accent_color: string | '';
        locale: string | '';
        mfa_enabled: boolean | '';
    }
}


const session : any = async () => await axios.get('https://genshinapi.ddns.net:3333/api/auth/discord/status', { withCredentials: true })
let apiDiscord : any | null = async () => {}
if (session.data.access_token) apiDiscord = async () => await axios('https://discord.com/api/users/@me', { headers: { 'Authorization': `Bearer ${session.data.access_token}` } })

// console.log(session)
// console.log(apiDiscord)

const discordContext = React.createContext<DiscordContext>({
    user: session.data,
    discordApiInfo: apiDiscord,
    isLogged: session.data.access_token ? true : false
});

export default discordContext;