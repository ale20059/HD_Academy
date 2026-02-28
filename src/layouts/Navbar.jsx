import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    // Estado para el menú hamburguesa
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { path: "/", label: "Inicio" },
        //{ path: "/sounds", label: "Sounds" },
        //{ path: "/academy", label: "Academy" },
        { path: "/resources", label: "Recursos" },
        //{ path: "/biography", label: "Biografía" },
        { path: "/donations", label: "Donaciones" },
        { path: "/contact", label: "Contacto" }
    ];

    return (
        <nav className="navbar">
            <Link to="/" className="logo-container">
                <img src={logo} alt="HD Industries Logo" className="logo-img" />
            </Link>

            {/* Botón Hamburguesa (solo visible en móvil) */}
            <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Agregamos la clase 'active' si isOpen es true */}
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {/* Cerramos el menú al hacer clic en un link */}
                        <Link to={item.path} onClick={() => setIsOpen(false)}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;