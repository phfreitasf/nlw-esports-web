import { DuoInfo } from "./Form/DuoInfo";
import { GameAds } from "./ListGameAds";
import { ButtonForm } from "../components/Form/Button"
import { useEffect, useState } from "react";
import axios from "axios";


export function AdBanner(props: GameAds) {

    const Days = {
        0: 'Dom',
        1: 'Seg',
        2: 'Ter',
        3: 'Qua',
        4: 'Qui',
        5: 'Sex',
        6: 'Sáb',
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
        <div className="relative px-1 max-w-[216px] m-auto">
        <div className="bg-[#2A2634] relative rounded-lg  px-6 py-4">
            <DuoInfo header='Nome' info={props.name} />
            <DuoInfo header='Tempo de jogo' info={`${props.yearsPlaying} anos`} />
            <DuoInfo header='Disponibilidade' info={days.join(',')} />
            <DuoInfo header='Chamada de audio?' info={props.useVoiceChannel ? 'Sim' : 'Não'} bool={true} />
            <ButtonForm onClick={() => { getDiscordTag(props.id) }} text={discordTag || "Não disponível"} />
        </div>
        </div>
    )
}