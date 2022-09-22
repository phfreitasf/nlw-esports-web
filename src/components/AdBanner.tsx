import { DuoInfo } from "./Form/DuoInfo";
import { GameAds } from "./ListGameAds";
import { ButtonForm } from "../components/Form/Button"
import { useEffect, useState } from "react";
import axios from "axios";


export function AdBanner(props: GameAds) {

    const [discordTag, setDiscordTag] = useState('')

    const getDiscordTag = async (anuncioId : string) => {
        await axios(`https://genshinapi.ddns.net:3333/ads/${anuncioId}/discord`)
        .then(response => setDiscordTag(response.data.discord))
    }

    useEffect(() => {
        getDiscordTag(props.id)
      }, [])

    return (
        <div className="bg-[#2A2634] m-auto lg:m-0 rounded-lg overflow-hidden w-[220px] px-6 py-4">
            <DuoInfo header='Nome' info={props.name} />
            <DuoInfo header='Tempo de jogo' info={`${props.yearsPlaying} anos`} />
            <DuoInfo header='Disponibilidade' info={`${props.weekDays} dia(s) • ${props.hourStart} - ${props.hourEnd}`} />
            <DuoInfo header='Chamada de audio?' info={props.useVoiceChannel ? 'Sim' : 'Não'} bool={true} />
            <ButtonForm  text={discordTag} />
        </div>
    )
}