interface DuoInfoProps {
    header: string,
    info: any,
    bool?: boolean
    days? : boolean
}
export function DuoInfo({ header, info, bool = false }: DuoInfoProps) {
    return (
        <div className="mb-2 h-[52px] w-full">
            <span className="text-zinc-300 block">{header}</span>

            {(() => {
                if (!bool) {
                return <span className="text-white font-bold block truncate  w-full">{info}</span>
                }
                return <span className={info == 'Sim' ? 'text-green-600' : 'text-red-600' + ' font-bold block '}>{info}</span>
            })()}

        </div>
    )
}