import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api, { STORAGE_URL } from '../services/api';
import '../css/ProductDetail.css';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    // Estado para mostrar el mensaje de éxito
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await api.get(`/v1/products/${slug}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error cargando detalle", error);
            }
        };
        fetchDetail();
    }, [slug]);

    const handleDownload = () => {
        // 1. Crear la URL de descarga de tu API de Laravel
        const downloadUrl = `${api.defaults.baseURL}/v1/products/${product.id}/download`;

        // 2. Crear un link invisible para forzar la descarga sin salir de la página
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', ''); // Esto indica que es una descarga
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 3. Mostrar el mensaje personalizado
        setShowToast(true);

        // 4. Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const handleBuyClick = () => {
        if (product.is_free) {
            handleDownload();
        } else {
            if (product.payment_url) {
                window.open(product.payment_url, '_blank');
            } else {
                alert("Lo sentimos, este producto no tiene un link de compra activo.");
            }
        }
    };

    if (!product) return <div style={{ padding: '10rem', color: 'white' }}>Cargando...</div>;

    return (
        <div className="product-detail-container">

            {/* --- MENSAJE PERSONALIZADO (TOAST) --- */}
            {showToast && (
                <div className="custom-toast">
                    <div className="toast-content">
                        ✅ ¡Archivo descargado correctamente!
                    </div>
                </div>
            )}

            <div className="detail-grid">
                <div className="detail-image-wrapper">
                    <img
                        src={`${STORAGE_URL}${product.cover_image}`}
                        alt={product.name}
                    />
                </div>

                <div className="detail-info">
                    <span className="category-tag">{product.category_type}</span>
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>

                    <div className="detail-price-box">
                        {!product.is_free ? (
                            <>
                                {Number(product.on_sale) === 1 && (
                                    <span className="old-price">${product.original_price}</span>
                                )}
                                <span className="current-price">${product.price}</span>
                                <button onClick={handleBuyClick} className="btn-buy-now">
                                    Comprar ahora
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="current-price" style={{ color: '#007bff' }}>GRATIS</span>
                                <button
                                    onClick={handleBuyClick}
                                    className="btn-buy-now"
                                    style={{ background: '#28a745' }}
                                >
                                    Descargar ahora
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;