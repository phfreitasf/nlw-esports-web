import axios from "axios"
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AdBanner } from "./AdBanner"
import { ButtonForm } from "./Form/Button";

import Carousel from 'react-multi-carousel';
import { settings } from '../config/adsSliderSettings'
import { EmptyAds } from "./EmptyAds";

export interface GameAds {
    id: string,
    name: string,
    weekDays: string[],
    useVoiceChannel: boolean,
    yearsPlaying: number,
    hourStart: string,
    hourEnd: string
}
interface Game {
    id?: string,
    title?: string,
    bannerUrl?: string,
    _count?: {
        ads: number
    }
}

export function ListGameAds() {
    const [games, setGames] = useState({})
    const [game, setGame] = useState<Game>(Object)
    const [gameAds, setGameAds] = useState<GameAds[]>([])
    const { gameTitle } = useParams()


    const getGameId = async () => {
        await axios('https://genshinapi.ddns.net:3333/games')
            .then(response => setGames(response.data))
    }

    const getAds = async (id: string) => {
        await axios(`https://genshinapi.ddns.net:3333/games/${id}/ads`)
            .then(response => setGameAds(response.data))
    }

    const callAdApi = async () => Object.values(games).map((val: any) => {
        if (val.title.toLowerCase() == gameTitle?.replaceAll('-', ' ')) {
            getAds(val.id)
            setGame(val)
            return
        }
    })



    useEffect(() => {
        getGameId()
    }, [])

    useEffect(() => {
        callAdApi()
    }, [games])



    return (

        <div id="ads" className="container m-auto px-20 mt-32 pb-20">
            <div className="w-20 my-2 mx-auto lg:m-0 lg:my-2">
                <Link to="/"><ButtonForm text="Voltar" /></Link>
            </div>
            <div className="flex flex-col  lg:items-start justify-start items-center w-full m-0 mb-8 gap-2 text-center">
                <img className="rounded-lg" src={game.bannerUrl} alt={game.title} />
                <span className="bg-nlw-gradient bg-clip-text text-transparent font-bold text-2xl md:text-4xl stroke font-serif">{game.title}</span>
                <span className="font-normal text-zinc-100">{`${gameAds.length} anúncios disponíveis!`}</span>
                <span className="font-normal text-zinc-400">Conecte-se e começe a jogar</span>

            </div>
            {(() => {
                if (gameAds.length == 0) {
                    return (<EmptyAds />)
                }
            })()}
            <div className="gd-carousel-wrapper relative">
                <Carousel className="gd-carousel" removeArrowOnDeviceType={["tablet","medium","mobile","smartWatchHaha"]} {...settings} >
                    {gameAds.map((ad) => {
                        return (
                            <AdBanner
                                key={ad.id}
                                id={ad.id}
                                name={ad.name}
                                weekDays={ad.weekDays}
                                useVoiceChannel={ad.useVoiceChannel}
                                yearsPlaying={ad.yearsPlaying}
                                hourStart={ad.hourStart}
                                hourEnd={ad.hourEnd} />
                        )
                    })}
                </Carousel>
            </div>

        </div>
    )

}