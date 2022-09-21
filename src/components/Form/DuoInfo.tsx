interface DuoInfoProps {
    header: string,
    info: string,
    bool?: boolean
    days? : boolean
}
interface Days {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado',
}
export function DuoInfo({ header, info, bool = false }: DuoInfoProps) {
    return (
        <div className="mb-2 h-[52px] w-[200px]">
            <span className="text-zinc-300 block">{header}</span>

            {(() => {
                if (!bool) {
                return <span className="text-white font-bold block">{info}</span>
                }
                return <span className={info == 'Sim' ? 'text-green-600' : 'text-red-600' + ' font-bold block'}>{info}</span>
            })()}

        </div>
    )
}