import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
          <strong className='text-md sm:text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
          <span className='text-zinc-400 text-sm sm:text-lg'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <Dialog.Trigger className='py-3 px-4 bg-sky-700 text-white rounded hover:bg-sky-900 flex gap-3 sm:text-lg transition-colors items-center'>
            <MagnifyingGlassPlus size={26} />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
    )
}