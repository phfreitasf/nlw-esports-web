import { GameBanner } from './components/GameBanner'
import './styles/main.css'
import logoImg from './assets/logo.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { CreateAdBanner } from './components/CreateAdBanner'
import { useContext, useEffect, useState } from 'react'
import { CreateAdModal } from './components/CreateAdModal'
import * as Dialog from '@radix-ui/react-dialog'
import { Link, useRoutes } from 'react-router-dom';

import { settings } from './config/gamesSliderSettings'
import { DownloadApkBanner } from './components/DownloadApkBanner'
import axios from 'axios';
import discordContext from './context/discordContext';




function App() {
  interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
      ads: number
    }
  }

  const [open, setOpen] = useState(false);
  const [isMoving, setIsMoving] = useState(false)
  const [games, setGames] = useState<Game[]>([])
  const { isLogged, user, discordApiInfo } = useContext(discordContext)
  const [imgLink, setImgLink] = useState('')

  const getAllGames = async () => {
    axios('https://genshinapi.ddns.net:3333/games')
      .then(response =>
        setGames(response.data.sort((a: Game, b: Game) => b._count.ads - (a._count.ads)))) //organiza os jogos por quantidade de anúncios
  }

  useEffect(() => {

    if (isLogged) setImgLink(`https://cdn.discordapp.com/avatars/${discordApiInfo!.data?.id}/${discordApiInfo!.data?.avatar}.png`);
  }, [discordApiInfo,isLogged])


  useEffect(() => {
    getAllGames();
  }, [])


  return (

    <div id="home" className="max-w-[1250px] mx-auto flex flex-col items-center m-20">

      <img src={logoImg} alt="logo nlw" />
      <h1 className='text-4xl sm:text-6xl text-white font-black mt-10'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent stroke'>duo</span> está aqui.
      </h1>
      {isLogged ?
        <div className='flex items-center bg-gray-600 bg-opacity-50 rounded-lg gap-2 mt-5 pr-2'>
          <img className='w-20 rounded-lg' src={imgLink} />
          <span className='text-white'>Logado como :
            <p>
              {discordApiInfo.data.username}#{discordApiInfo.data.discriminator}
            </p>
          </span> </div> : null}
      <div className="w-full mt-10 gd-carousel-wrapper">
        <Carousel className="gd-carousel" removeArrowOnDeviceType={["tablet", "medium", "mobile", "smartWatchHaha"]} {...settings}
          beforeChange={() => setIsMoving(true)}
          afterChange={() => setIsMoving(false)}>
          {games.map(game => {
            return (

              <div key={game.id} >
                <Link to={`/ads/${game.title.replaceAll(' ', '-').toLowerCase()}`}>
                  <GameBanner
                    gameId={game.id}
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                    adsCount={game._count.ads}
                    isMoving={isMoving}
                  />
                </Link>
              </div>
            )
          })}
        </Carousel>

      </div>
      <div className='self-start'>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <CreateAdBanner />
        <CreateAdModal setOpen={setOpen} />
      </Dialog.Root>

      <DownloadApkBanner />
    </div>

  )
}

export default App
