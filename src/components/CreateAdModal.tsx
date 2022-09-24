import * as Dialog from "@radix-ui/react-dialog";
import { CaretDown, Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import axios from 'axios'
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { SuccessModal } from "./SucessModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CreateAdModalProps {
    setOpen : Dispatch<SetStateAction<boolean>>
}

export function CreateAdModal({setOpen} : CreateAdModalProps) {
    interface Game {
        id: string,
        title: string,
        bannerUrl: string,
        _count: {
            ads: number
        }
    }
    // validação inputs 
    const [nome, setNome] = useState('')
    const [anos, setAnos] = useState(Number)
    const [discordTag, setDiscordTag] = useState('')

    // configuração do toast de mensagem
    const toastSettings : any = {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    }

    //discord
    const notify = (toastText : string) => toast.error(toastText, toastSettings);
    const handleDiscordChange = (e: any) => setDiscordTag(e.target.value)
    const discordValidation = () => {
        const regEx = /^.{3,32}#[0-9]{4}$/g
        return (regEx.test(discordTag)) 
    }
    //

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)
    const [openSucess, setOpenSucess] = useState(false)



    useEffect(() => {
        axios('https://genshinapi.ddns.net:3333/games').then(response => {
            setGames(response.data)
        })
    }, [])


    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        if(!discordValidation()) {
            notify('Discord Inválido!')
            return
        }; 
        try {
            await axios.post(`https://genshinapi.ddns.net:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            })
            setOpenSucess(true)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
                <Dialog.Content
                    className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-md shadow-violet-800'>
                    <Dialog.Title className="text-3xl font-black ">Publique um anúncio</Dialog.Title>

                    <form onSubmit={async (event) => { handleCreateAd(event).then() }} className='mt-8 flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                            <Select.Root name="game">
                                <Select.Trigger id="game" aria-label="Game" className="flex justify-between bg-zinc-900 py-2.5 px-4 rounded text-sm text-white">
                                    <div className="flex gap-2 items-center">
                                        <Select.Icon >
                                            <GameController size={24} />
                                        </Select.Icon>
                                        <Select.Value placeholder='League of Legends' />
                                    </div>
                                    <CaretDown size={24} className="self-end" />
                                </Select.Trigger>

                                <Select.Portal>
                                    <Select.Content className="self-stretch overflow-hidden -ml-7 bg-zinc-900 py-2.5 rounded text-sm text-zinc-500">
                                        <Select.Viewport>
                                            {games.map(game => {
                                                return (
                                                    <Select.Item key={game.id} value={game.id} className="pl-8 flex items-center justify-start h-25 py-1 hover:bg-violet-500 hover:text-white">
                                                        <Select.ItemIndicator>
                                                            <Check size={20} className="relative -ml-5" />
                                                        </Select.ItemIndicator>
                                                        <Select.ItemText>{game.title}</Select.ItemText>
                                                    </Select.Item>
                                                )
                                            })}

                                        </Select.Viewport>
                                    </Select.Content>
                                </Select.Portal>
                            </Select.Root>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name">Seu nome (ou nickname)</label>
                            <Input type="text" name="name" id="name" placeholder='Como te chamam dentro do game?' />
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                                <Input type="number" name="yearsPlaying" id="yearsPlaying" placeholder='Tudo bem ser ZERO' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="discord">Qual seu discord?</label>
                                <Input type="text" name="discord" id="discord" placeholder='Usuário#0000' onChange={handleDiscordChange} />
                                <ToastContainer />
                            </div>

                        </div>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="weekDays">Quando costuma jogar?</label>
                                <ToggleGroup.Root type={"multiple"} className="grid grid-cols-4 gap-2" onValueChange={setWeekDays}>
                                    <ToggleGroup.Item value="0" title="Domingo" className={`w-8 h-8 rounded-md ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>D</ToggleGroup.Item>
                                    <ToggleGroup.Item value="1" title="Segunda" className={`w-8 h-8 rounded-md ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                                    <ToggleGroup.Item value="2" title="Terça" className={`w-8 h-8 rounded-md ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>T</ToggleGroup.Item>
                                    <ToggleGroup.Item value="3" title="Quarta" className={`w-8 h-8 rounded-md ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                                    <ToggleGroup.Item value="4" title="Quinta" className={`w-8 h-8 rounded-md ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                                    <ToggleGroup.Item value="5" title="Sexta" className={`w-8 h-8 rounded-md ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                                    <ToggleGroup.Item value="6" title="Sabado" className={`w-8 h-8 rounded-md ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                                </ToggleGroup.Root>

                            </div>
                            <div className='flex flex-col gap-2 flex-1 ml-2'>
                                <label htmlFor="hourStart">Qual horário do dia?</label>
                                <div className='grid grid-cols-2 gap-2'>
                                    <Input required type="time" name="hourStart" id="hourStart" placeholder='De' />
                                    <Input required type="time" name="hourEnd" id="hourEnd" placeholder='Até' />
                                </div>
                            </div>
                        </div>
                        <label className='mt-2 flex gap-2 text-sm items-center'>
                            <Checkbox.Root onCheckedChange={(checked) => {
                                if (checked) setUseVoiceChannel(true)
                                else setUseVoiceChannel(false)
                            }}
                                className="w-6 h-6 p-1 rounded bg-zinc-900">
                                <Checkbox.Indicator>
                                    <Check className="w-4 h-4 text-emerald-400" />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            Costumo me conectar ao chat de voz
                        </label>
                        <footer className='mt-4 flex justify-end gap-4'>
                            <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold'>Cancelar</Dialog.Close>
                            {/* o Dialog abaixo é referente ao arquivo SucessModal */}
                            <Dialog.Root open={openSucess}>
                                <button
                                    className={'bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-2'} type="submit">
                                    <GameController className='h-6 w-6' />
                                    Encontrar Duo
                                </button>
                                <SuccessModal setOpen={setOpenSucess} parentModal={setOpen} />

                            </Dialog.Root>
                        </footer>
                    </form>

                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    )
}