import aboutImg from '../assets/image-1.jpg'

function About() {
    return (
        <section className="about" id="about">
            <article className="information">
                <h3 className="about-title">Sobre Nosotros</h3>
                <p className="about-description">En respuesta a los problemas asociados con la falta de espacios adecuados para la socialización y ejercicio de las mascotas en las ciudades, caracterizada por la escasez de áreas verdes, la contaminación ambiental y el estrés generado en los animales por la falta de estímulos, nuestro emprendimiento surge con el objetivo de ofrecer una alternativa saludable y divertida para perros y sus dueños.</p>
            </article>
            <article className="image-view">
                <img src={aboutImg} alt="image 1" className="desktop-only" />
            </article>
        </section>
    )
}

export default About