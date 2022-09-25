export interface GameBannerProps {
    gameId: string,
    bannerUrl: string,
    title: string,
    adsCount: number
}
export function GameBanner(props: GameBannerProps) {
    return (
        <div className="relative rounded-lg overflow-hidden w-full px-1 m-auto max-w-[300px]">

            <img className="relative w-full rounded-lg" draggable="false" src={props.bannerUrl} alt={props.title} />
            <div className="relative">
            <div className='pt-16 pb-4 px-2 bg-gradient-games rounded-lg absolute -bottom-0 left-0 right-0'>
                <strong className='text-white font-bold block'>{props.title}</strong>
                <span className='text-zinc-400 text-sm block'>{props.adsCount} anúncio(s)</span>
            </div>
            </div>
        </div>
    )
}