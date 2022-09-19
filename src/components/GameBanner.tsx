interface GameBannerProps {
    bannerUrl: string,
    title: string,
    adsCount: number
}
export function GameBanner(props: GameBannerProps) {
    return (
        <a className="relative rounded-lg overflow-hidden" href="#home"><img src={props.bannerUrl} alt={props.title} />
            <div className='w-full pt-16 pb-4 px-4 bg-gradient-games absolute bottom-0 left-0 right-0'>
                <strong className='text-white font-bold block'>{props.title}</strong>
                <span className='text-zinc-400 text-sm block'>{props.adsCount} anúncio(s)</span>
            </div></a>
    )
}