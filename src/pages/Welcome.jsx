import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/Welcome.css';



function Welcome() {
  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hijos De Dios</h1>
          <p>HD Industries</p>
        </div>
      </section>
      <section className="content-section">
        <div className="module-card">
          <div className="icon">🎵</div>
          <h3>HD Sounds</h3>
          <p>Explora nuestras librerias y samples y beats exclusivos</p>
          <Link to="/sounds">Ir a HD Sounds</Link>
        </div>

        <div className="module-card">
          <div className="icon">🎓</div>
          <h3>HD Academy</h3>
          <p>Aprende producción y mezcla con los mejores.</p>
          <Link to="/academy" className="btn-small">Ver cursos</Link>
        </div>

        <div className="module-card">
          <div className="icon">👕</div>
          <h3>Tienda Oficial</h3>
          <p>Lleva el estilo de Hijos de Dios contigo.</p>
          <Link to="/shop" className="btn-small">Ir a la tienda</Link>
        </div>

      </section>

    </div>
  )
}

export default Welcome;