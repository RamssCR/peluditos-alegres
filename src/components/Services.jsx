import serviceImg from '../assets/image-2.png'
import paw from '../assets/paw-solid-dark.svg'

function Services() {
    return (
        <section className="services" id="services">
            <article className="services-image">
                <img src={serviceImg} alt="Dog" />
            </article>
            <article className="services-info">
                <h3 className="services-title">¿Qué Ofrecemos?</h3>
                <ul>
                    <li><img src={paw} alt="item list" /><span className="service-item">Parque de Recreación</span></li>
                    <li><img src={paw} alt="item list" /><span className="service-item">Piscina</span></li>
                    <li><img src={paw} alt="item list" /><span className="service-item">Guardería</span></li>
                    <li><img src={paw} alt="item list" /><span className="service-item">Spa</span></li>
                    <li><img src={paw} alt="item list" /><span className="service-item">Entrenamiento</span></li>
                    <li><img src={paw} alt="item list" /><span className="service-item">Entretenimiento</span></li>
                    <li><img src={paw} alt="item list" /><span className="service-item">Veterinaria</span></li>
                    <li><img src={paw} alt="item list" /><span className="service-item">Venta de Accesorios</span></li>
                </ul>
            </article>
        </section>
    )
}

export default Services