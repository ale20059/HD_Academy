import React, { useState, useEffect } from 'react';
import api, { STORAGE_URL } from '../services/api';
import '../css/Biography.css';

const Biography = () => {
    const [biographies, setBiographies] = useState([]);
    const [loading, setLoading] = useState(true);

    // URL para las imágenes que vienen de Laravel Storage
    const IMAGE_BASE_URL = `${STORAGE_URL}`;

    useEffect(() => {
        const getBiography = async () => {
            try {
                // Consumimos el endpoint /biography usando nuestra config de axios
                const response = await api.get('v1/biography');
                setBiographies(response.data);
            } catch (error) {
                console.error("Error al obtener la biografía:", error);
            } finally {
                setLoading(false);
            }
        };
        getBiography();
    }, []);

    if (loading) return <div className="loading-state">Cargando biografía...</div>;

    return (
        <section className='container-section'>
            <div className="biography-container">
                <h1>Nuestra Trayectoria</h1>

                {biographies.map((bio) => (
                    <article key={bio.id} className="bio-card">
                        <div className="bio-image-wrapper">
                            <img
                                src={`${IMAGE_BASE_URL}${bio.photo_url}`}
                                alt={bio.name}
                            />
                        </div>

                        <div className="bio-info">
                            <span className="bio-responsibility">{bio.responsibility}</span>
                            <h2>{bio.name}</h2>
                            <p className="bio-description">{bio.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Biography;