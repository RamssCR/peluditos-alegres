import whatsapp from '../assets/whatsapp-brands-solid.svg'

function Banner() {
    return (
        <section className="banner" id="main">
            <div className="first-container">
                <div className="contact">
                    <img src={whatsapp} alt="ws" />
                    <span className="number">3238723691</span>
                </div>
            </div>

            <div className="second-container">
                <h2 className="banner-title">No pierdas tu oportunidad de ofrecerle a tu mascota un espacio de recreación</h2>
                <a href="#contact" className="book">Agenda Ya!</a>
            </div>

            <div className="third-container"></div>
        </section>
    )
}

export default Banner