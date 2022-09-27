import { AndroidLogo } from "phosphor-react";

export function DownloadApkBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex flex-col justify-center items-center'>

          <strong className='text-md sm:text-2xl text-white font-black block mb-1'>Aplicativo Android</strong>
            <a href={'https://drive.google.com/file/d/1V3QZCQtE7iOY98BPssPCcxWlohOJGqU9/view?usp=sharing'} target='_blank'>
            <button className='py-3 px-4 bg-sky-700 text-white items-center rounded hover:bg-sky-900 flex gap-3 text-lg transition-colors'><AndroidLogo size={32} />Download</button>
            </a>
        </div>
      </div>
    )
}