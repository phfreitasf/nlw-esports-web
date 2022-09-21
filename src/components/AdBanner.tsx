import { DuoInfo } from "./Form/DuoInfo";
import { GameAds } from "./ListGameAds";
import { ButtonForm } from "../components/Form/Button"


export function AdBanner(props: GameAds) {
    return (
        <div className="bg-[#2A2634] rounded-lg overflow-hidden w-[220px] px-6 py-4">
            <DuoInfo header='Nome' info={props.name} />
            <DuoInfo header='Tempo de jogo' info={`${props.yearsPlaying} anos`} />
            <DuoInfo header='Disponibilidade' info={`${props.weekDays} dia(s) • ${props.hourStart} - ${props.hourEnd}`} />
            <DuoInfo header='Chamada de audio?' info={props.useVoiceChannel ? 'Sim' : 'Não'} bool={true} />
            <ButtonForm  text='Discord' />
        </div>
    )
}