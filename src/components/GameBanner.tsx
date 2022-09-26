export interface GameBannerProps {
    gameId: string,
    bannerUrl: string,
    title: string,
    adsCount: number,
    isMoving: boolean
}
export function GameBanner(props: GameBannerProps) {

    // as duas funcoes abaixo são para evitar efeito de drag do html nos cards
    function handleOnClick(e: any) {
        e.stopPropagation()
        if (props.isMoving) {
            e.preventDefault();
          }
    }
    function handleOnMouseDown(e: any) {
        e.preventDefault() 
    }


    return (
        <div className="relative rounded-lg overflow-hidden w-full px-1 m-auto max-w-[300px]" onClick={(e) => handleOnClick(e)} onMouseDown={(e) => handleOnMouseDown(e)}>

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