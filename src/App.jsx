import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Welcome from "./pages/Welcome";
import Navbar from "./layouts/Navbar";
import Biography from "./pages/Biography";
import Sounds from "./pages/Sounds";
import Footer from "./layouts/Footer";
import ProductDetail from './pages/ProductDetail';
import Resources from './pages/Resources';
import InfoCont from './pages/InfoCont';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* <--- Envoltura principal */}
        <Navbar />

        <main className="main-content"> {/* <--- Este empuja al footer */}
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='/sounds' element={<Sounds />} />
            <Route path='/product/:slug' element={<ProductDetail />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/contact' element={<InfoCont />} />
            <Route path='/donations' element={<Donate />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;