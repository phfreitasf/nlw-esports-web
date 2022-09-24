import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
import success from '../assets/success_fiora.gif'
import { ButtonForm } from "./Form/Button";


interface ModalProps {
    setOpen: any,
    parentModal: Dispatch<SetStateAction<boolean>>
}
export function SuccessModal({ setOpen, parentModal }: ModalProps) {


    const closeAllDialogs = () => {
        setOpen(false), parentModal(false)
    }
    return (
        <Dialog.Portal >
            <Dialog.Overlay className='bg-black/60 inset-0 fixed '>
                <Dialog.Content
                    onPointerDownOutside={() => closeAllDialogs()}
                    className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[400px] shadow-md shadow-violet-900 flex flex-col items-center justify-center'>
                    <span className="flex items-center justify-center gap-2 w-full text-xl"><CheckCircle size={32} color="#39b329" />Anúncio criado com sucesso</span>
                    <img className="max-w-[200px] -translate-x-7 -translate-y-5" src={success} />
                    <div className="min-w-[100px]">
                        <ButtonForm onClick={() => closeAllDialogs()} text="Fechar" />
                    </div>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal >
    )
}