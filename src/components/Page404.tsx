import { Link } from 'react-router-dom'
import error from '../assets/404.gif'
import { ButtonForm } from './Form/Button'

export function Page404() {
    return (
    <div className="flex flex-col justify-center items-center gap-3 mt-20">
        <span className='text-2xl text-white'>Página não encontrada</span>
        <Link to="/"><ButtonForm text="Página inicial" /></Link>
        <img className='rounded-lg' src={error}/>

    </div>
    )
}