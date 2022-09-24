import { ButtonForm } from "./Form/Button";
import { ButtonDiscord } from "./Form/ButtonDiscord";

export function FixedNavBar() {
    return (
        <nav className="bg-[#34225B] p-2 mt-0 fixed w-full z-10 top-0 bg-opacity-80">
        <div className="container mx-auto flex items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a className="no-underline hover:text-white hover:no-underline" href="/">
                    <span className="text-2xl pl-2 bg-nlw-gradient bg-clip-text text-transparent"><i className=""></i> FindDuo</span>
                </a>
            </div>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="m-auto">
                    <ButtonDiscord/>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}