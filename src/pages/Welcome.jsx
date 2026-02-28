import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/Welcome.css';
import guitarra from "../assets/images/guitar.jpg";
import imagen1 from "../assets/images/image.png";



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

        <div className="studio-grabacion">
          <div className="studio-left">
            <h2>Studio</h2>
            <img src={guitarra} alt="" />
          </div>
          <p>Donde las ideas <br /> se convierten en sonido profesional.</p>
          { /* <Link className="btn-academy" to="/sounds">escuchar</Link> */}
        </div>

        <div className="studio-grabacion">
          <div className="studio-left">
            <h2>Academy</h2>
            <img src={imagen1} alt="" />
          </div>
          <p>Donde el talento <br />se entrena y el sonido evoluciona.</p>
          { /* <Link className="btn-academy" to="/academy">inscribirme</Link> */}
        </div>

      </section>

    </div>
  )
}

export default Welcome;