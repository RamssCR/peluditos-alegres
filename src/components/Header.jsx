import { useContext } from 'react'
import { webContext } from '../context/WebContextProvider'
import bars from '../assets/bars-solid.svg'
import paw from '../assets/paw-solid.svg'
import MobileNavbar from './MobileNavbar'

function Header() {
    const { isModal, activateModal } = useContext(webContext)

    return (
    <>
        <header>
            <h2 className="main-title"><img src={paw} alt="paw" />Peluditos Alegres</h2>
            <nav className="desktop-navbar">
                <li><a href="#main">Inicio</a></li>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#services">Qué ofrecemos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </nav>
            <img src={bars} alt="links" className="burguer" onClick={() => activateModal()} />
        </header>
        {isModal && <MobileNavbar />}
    </>
    )
}

export default Header