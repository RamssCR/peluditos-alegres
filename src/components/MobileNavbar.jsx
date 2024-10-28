import { useContext } from "react"
import { webContext } from "../context/WebContextProvider"

function MobileNavbar() {
    const {activateModal, loading} = useContext(webContext)
    return (
        <div className={`modal ${loading ? 'fadeOut' : ''}`}>
            <div className={`mobile-navbar-container ${loading ? 'slideOut' : ''}`}>
                <span className="quit" onClick={() => activateModal()}>X</span>
                <nav className="mobile-navbar">
                    <li><a href="#main" onClick={() => activateModal()}>Inicio</a></li>
                    <li><a href="#about" onClick={() => activateModal()}>Sobre Nosotros</a></li>
                    <li><a href="#services" onClick={() => activateModal()}>Qué ofrecemos</a></li>
                    <li><a href="#contact" onClick={() => activateModal()}>Contacto</a></li>
                </nav>
            </div>
        </div>
    )
}

export default MobileNavbar