import { GameBanner } from './components/GameBanner'
import './styles/main.css'
import logoImg from './assets/Logo.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import { CreateAdModal } from './components/CreateAdModal'
import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom';

import {settings} from './config/gamesSliderSettings'
import { DownloadApkBanner } from './components/DownloadApkBanner'
import axios from 'axios';



function App() {
  interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
      ads: number
    }
  }

  const [games, setGames] = useState<Game[]>([])
  


  useEffect(() => {
    axios('https://genshinapi.ddns.net:3333/games')
      .then(response => response = response.data.sort((a: Game, b: Game) => b._count.ads - (a._count.ads)))
      .then(response  => setGames(response))
  }, [])


  return (

    <div id="home" className="max-w-[1250px] mx-auto flex flex-col items-center m-20">
          
      <img src={logoImg} alt="logo nlw" />
      <h1 className='text-2xl sm:text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className="w-full mt-16 gd-carousel-wrapper">
        <Carousel className="gd-carousel" {...settings}>
          {games.map(game => {
            return (

              <div key={game.id} >
                <Link to={`/ads/${game.title.replaceAll(' ', '-').toLowerCase()}`}>
                  <GameBanner
                    gameId={game.id}
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                    adsCount={game._count.ads} />
                </Link>
              </div>
            )
          })}
        </Carousel>

      </div>
      <div className='self-start'>
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

      <DownloadApkBanner />
    </div>

  )
}

export default App
