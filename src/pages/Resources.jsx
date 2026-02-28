import React, { useEffect, useState } from 'react';
import api, { STORAGE_URL } from '../services/api';
import { Link } from 'react-router-dom';
import '../css/Sounds.css';

const Resources = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('preset');

    // Lógica para el Audio (Tal cual la tienes en Sounds)
    const [currentAudio, setCurrentAudio] = useState(null);
    const [playingId, setPlayingId] = useState(null);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                // Filtro para traer solo lo GRATIS
                const response = await api.get('/v1/products?free=1');
                setResources(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando recursos:", error);
                setLoading(false);
            }
        };
        fetchResources();
    }, []);

    const handlePlayPause = (product) => {
        const url = `${STORAGE_URL}${product.demo_audio_url}`;

        if (currentAudio && playingId === product.id) {
            if (!currentAudio.paused) {
                currentAudio.pause();
                setPlayingId(null);
            } else {
                currentAudio.play();
                setPlayingId(product.id);
            }
            return;
        }

        if (currentAudio) currentAudio.pause();

        const audio = new Audio(url);
        audio.play();
        setCurrentAudio(audio);
        setPlayingId(product.id);
        audio.onended = () => setPlayingId(null);
    };

    const filteredResources = resources.filter(r => r.category_type === filter);

    if (loading) return <p className="loading">Cargando recursos gratuitos de HD...</p>;

    return (
        <div className="sounds-page-container">

            <div className="filter-tabs">
                <button
                    className={filter === 'preset' ? 'active' : ''}
                    onClick={() => setFilter('preset')}
                >
                    PRESETS GRATIS
                </button>
                <button
                    className={filter === 'chart' ? 'active' : ''}
                    onClick={() => setFilter('chart')}
                >
                    CHARTS (PDF) GRATIS
                </button>

                <button
                    className={filter === 'sound_pack' ? 'active' : ''}
                    onClick={() => setFilter('sound_pack')}
                >
                    SOUND PACK
                </button>

                <button
                    className={filter === 'preset_pack' ? 'active' : ''}
                    onClick={() => setFilter('preset_pack')}
                >
                    PRESETS PACK
                </button>
            </div>

            <div className="product-grid">
                {filteredResources.length > 0 ? (
                    filteredResources.map(product => (
                        <div key={product.id} className="product-card">

                            {/* ETIQUETA DE OFERTA (Por si algún día pones oferta en algo de 0, aunque sea raro) */}
                            {Number(product.on_sale) === 1 && (
                                <div className="badge-sale">NUEVO</div>
                            )}

                            <div className="card-image">
                                <img src={`${STORAGE_URL}${product.cover_image}`} alt={product.name} />

                                {/* BOTÓN DE PLAY (DEMO) USANDO EMOJIS */}
                                {product.demo_audio_url && (
                                    <button
                                        className={`play-btn-overlay ${playingId === product.id ? 'is-playing' : ''}`}
                                        onClick={() => handlePlayPause(product)}
                                    >
                                        {playingId === product.id ? '⏸' : '▶'}
                                    </button>
                                )}
                            </div>

                            <div className="card-info">
                                <h3>{product.name}</h3>
                                <h2 className='category-type'>{product.category_type}</h2>

                                <div className="price-container">
                                    <p className="price" style={{ color: '#007bff' }}>FREE</p>
                                </div>
                            </div>

                            {/* Link al detalle del recurso */}
                            <Link to={`/product/${product.slug}`} className="btn-detail-link">
                                <button className="btn-detail" style={{ background: '#28a745' }}>
                                    Obtener gratis
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No hay {filter} gratuitos disponibles todavía.</p>
                )}
            </div>
        </div>
    );
};

export default Resources;