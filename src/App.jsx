import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from "./pages/Welcome";
import Navbar from "./layouts/Navbar";
import Biography from "./pages/Biography";
import Sounds from "./pages/Sounds";
import Footer from "./layouts/Footer";


function App() {
  return(


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/sounds" element={<Sounds />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;