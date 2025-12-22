import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faSpotify, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-section social">
                    <div className="social-links-circle">
                        <a href="https://instagram.com/academia.hd/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://spotify.com" target="_blank" rel="noreferrer" aria-label="Spotify">
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Hijos De Dios. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;