import { DuoInfo } from "./Form/DuoInfo";
import { GameAds } from "./ListGameAds";
import { ButtonForm } from "../components/Form/Button"
import { useEffect, useState } from "react";
import axios from "axios";


export function AdBanner(props: GameAds) {

    const Days = {
        0: 'Domingo',
        1: 'Segunda',
        2: 'Terça',
        3: 'Quarta',
        4: 'Quinta',
        5: 'Sexta',
        6: 'Sábado',
    }
    const [days, setDays] = useState<string[]>([])
    const [discordTag, setDiscordTag] = useState('Mostrar Discord')
    const temporaryDays: string[] = []
    const numberToDays = async () => {
        Object.entries(Days).map((objDay) => {
            props.weekDays.map(day => day == objDay[0] ? temporaryDays.push(objDay[1]) : null)
        })
        setDays(temporaryDays)
    }

    useEffect(() => {
        numberToDays()
    }, [])

    const getDiscordTag = async (anuncioId: string) => {
        await axios(`https://genshinapi.ddns.net:3333/ads/${anuncioId}/discord`)
            .then(response => setDiscordTag(response.data.discord))
    }

    return (
        <div className="bg-[#2A2634] m-auto lg:m-0 rounded-lg overflow-hidden w-[220px] px-6 py-4">
            <DuoInfo header='Nome' info={props.name} />
            <DuoInfo header='Tempo de jogo' info={`${props.yearsPlaying} anos`} />
            <DuoInfo header='Disponibilidade' info={days} />
            <DuoInfo header='Chamada de audio?' info={props.useVoiceChannel ? 'Sim' : 'Não'} bool={true} />
            <ButtonForm onClick={() => { getDiscordTag(props.id) }} text={discordTag || "Não disponível"} />
        </div>
    )
}