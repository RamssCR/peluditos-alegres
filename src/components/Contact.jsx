import { useForm } from 'react-hook-form'
import { useState } from 'react'
import wsIcon from '../assets/whatsapp-brands-solid.svg'
import fbIcon from '../assets/facebook-f-brands-solid.svg'
import igIcon from '../assets/instagram-brands-solid.svg'
import xIcon from '../assets/x-twitter-brands-solid.svg'

function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [active, setActive] = useState(false)

    active && setTimeout(() => setActive(false), 2500)

    return (
        <section className="contact2" id="contact">
            <article className="contact-form-container">
                <h3 className="contact-form-title">Puedes contactarnos por medio de un correo electrónico</h3>
                <form method="post" className="contact-form" onSubmit={handleSubmit(() => {setActive(true)})}>
                    <h4 className="form-title">Rellena los campos</h4>
                    {active && <span className="input-success">Los datos fueron registrados exitosamente</span>}
                    <div className="input-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" {...register('name', {required: true})} placeholder="ejem. Carlos Pérez" />
                        {errors.name && <span className="input-error">Debe ingresar un nombre</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" {...register('email', {required: true})} placeholder="ejem. carlos.perez@ejemplo.com" />
                        {errors.email && <span className="input-error">Debe ingresar un correo</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea rows={6} id="description" {...register('description', {required: true})} placeholder="ejem. ¡Hola!, estoy interesado(a) en agendar un espacio para mi mascota."></textarea>
                        {errors.name && <span className="input-error">Debe ingresar una descripción</span>}
                    </div>
                    <input type="submit" value="Enviar Correo" onClick={() => setTimeout(() => !errors.email && reset(), 10)} />
                </form>
            </article>
            <article className="social-media">
                <h4 className="social-media-title">O también nos puedes seguir por nuestras redes sociales</h4>
                <div className="media-container">
                    <div className="media">
                        <a href="#" className="img ws2"><img src={wsIcon} alt="WhatsApp" /></a>
                        <a href="#" className="media-name">WhatsApp</a>
                    </div>
                    <div className="media">
                        <a href="#" className="img fb"><img src={fbIcon} alt="Facebook" /></a>
                        <a href="#" className="media-name">Facebook</a>
                    </div>
                    <div className="media">
                        <a href="#" className="img ig"><img src={igIcon} alt="Instragram" /></a>
                        <a href="#" className="media-name">Instagram</a>
                    </div>
                    <div className="media">
                        <a href="#" className="img xt"><img src={xIcon} alt="X" /></a>
                        <a href="#" className="media-name">X</a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Contact