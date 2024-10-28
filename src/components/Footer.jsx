import paw from '../assets/paw-solid-dark.svg'

function Footer() {
    return (
        <>
            <footer>
                <article className="company-logo">
                    <h2 className="main-title"><img src={paw} alt="paw" />Peluditos Alegres</h2>
                    <span className="phrase">Diversión para tu peludito</span>
                </article>
                <article className="contact-data">
                    <h3 className="contact-data-title">CONTÁCTANOS</h3>
                    <ul>
                        <li><strong>CORREO: </strong>agendagencia@peluditos.com</li>
                        <li><strong>HORARIO DE ATENCIÓN: </strong>Lunes a Sábado, 8:00am - 8:00pm</li>
                        <li><strong>ATENCIÓN AL CLIENTE: </strong>+57 (323) 872-3691</li>
                    </ul>
                </article>
                <article className="social-media-links">
                    <h3 className="social-media-links-title">NUESTRAS REDES</h3>
                    <ul>
                        <li><a href="#">WhatsApp</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">X</a></li>
                    </ul>
                </article>
            </footer>
            <span className="footer-line">Peluditos Alegres 2024 - Desarrollado por RamssDev</span>
        </>
    )
}

export default Footer