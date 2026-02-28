import '../css/InfoCont.css'

function InfoCont() {
    return (
        <section className="contacto-section">
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2>Ponte en contacto con Nosotros</h2>
                    <p>¿Tienes dudas sobre nuestros recursos? Escribenos y te responderemos lo antes posible.</p>
                </div>
                <form action="#" method='post'>
                    <div className="input-group">
                        <input type="text" placeholder='Tu Nombre' required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder='Tu correo Electrónico' required />
                    </div>
                    <div className="input-group">
                        <textarea name="" id="" placeholder='Cuéntanos en qué podemos ayudarte...' required rows='5'></textarea>
                    </div>
                    <button type='submit' className='btn-enviar'>ENVIAR MENSAJE</button>
                </form>
            </div>
        </section>
    )
}


export default InfoCont;