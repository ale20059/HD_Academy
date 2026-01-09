import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api, { STORAGE_URL } from '../services/api';
import '../css/ProductDetail.css';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);

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

    const hendleBuyClick = () => {
        // Si es gratis, abrimos el link de descarga, si no, el de pago
        const targetUrl = product.is_free ? product.download_path : product.payment_url;

        if (targetUrl) {
            window.open(targetUrl, '_blank');
        } else {
            alert(product.is_free
                ? "Lo sentimos, no hay un link de descarga disponible."
                : "Lo sentimos, este producto no tiene un link de compra activo.");
        }
    }

    if (!product) return <div style={{ padding: '10rem', color: 'white' }}>Cargando...</div>;

    return (
        <div className="product-detail-container">
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
                        {/* Si NO es gratis, muestra precios normales */}
                        {!product.is_free ? (
                            <>
                                {Number(product.on_sale) === 1 && (
                                    <span className="old-price">${product.original_price}</span>
                                )}
                                <span className="current-price">${product.price}</span>

                                <button onClick={hendleBuyClick} className="btn-buy-now">
                                    Comprar ahora
                                </button>
                            </>
                        ) : (
                            /* Si ES gratis, muestra texto FREE y botón de descarga */
                            <>
                                <span className="current-price" style={{ color: '#007bff' }}>GRATIS</span>

                                <button
                                    onClick={hendleBuyClick}
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