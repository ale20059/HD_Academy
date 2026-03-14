import { useState } from 'react';
import api from '../services/api';
import '../css/InfoCont.css'

function InfoCont() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'info', msg: 'Enviando...' });

        try {
            await api.post('/v1/contact', formData);
            setStatus({ type: 'success', msg: '✅ ¡Mensaje enviado con éxito!' });
            setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
        } catch (error) {
            setStatus({ type: 'error', msg: '❌ Error al enviar el mensaje.' });
        }
    };

    return (
        <section className="contacto-section">
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2>Ponte en contacto con Nosotros</h2>
                    <p>¿Tienes dudas sobre nuestros recursos? Escríbenos.</p>
                    {status.msg && (
                        <div className={`status-msg ${status.type}`}>{status.msg}</div>
                    )}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder='Tu Nombre'
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder='Tu correo Electrónico'
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="input-group">
                        <textarea
                            placeholder='Cuéntanos en qué podemos ayudarte...'
                            required
                            rows='5'
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button type='submit' className='btn-enviar'>ENVIAR MENSAJE</button>
                </form>
            </div>
        </section>
    )
}

export default InfoCont;