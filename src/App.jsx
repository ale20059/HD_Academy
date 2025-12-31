import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Welcome from "./pages/Welcome";
import Navbar from "./layouts/Navbar";
import Biography from "./pages/Biography";
import Sounds from "./pages/Sounds";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <div className="app-container"> {/* <--- Envoltura principal */}
        <Navbar />

        <main className="main-content"> {/* <--- Este empuja al footer */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/sounds" element={<Sounds />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;