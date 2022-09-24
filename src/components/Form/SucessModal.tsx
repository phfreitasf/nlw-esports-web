import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle } from "phosphor-react";
import { SetStateAction } from "react";
import success from '../../assets/success_fiora.gif'
import { ButtonForm } from "./Button";


interface ModalProps {
    open: any,
    setOpen: any
}
export function SuccessModal({open, setOpen} : ModalProps) {

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed '>
                <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[400px] shadow-md shadow-violet-900 flex flex-col items-center justify-center'>
                    <Dialog.Close onClick={() => setOpen(false)} className="flex flex-col justify-center items-center w-full">
                        <span className="flex items-center justify-center gap-2 w-full text-xl"><CheckCircle size={32} color="#39b329" />Anúncio criado com sucesso</span>
                    </Dialog.Close>
                        <img className="max-w-[200px] -translate-x-7 -translate-y-5" src={success}/>
                        <div className="min-w-[100px]">
                        <ButtonForm onClick={() => setOpen(false)} text="Fechar"/>
                        </div>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal >
    )
}