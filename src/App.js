import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from './pages/home/home.js';
import About from './pages/about/about.js';
import Instant from './pages/instant/instant.js';
import Landscape from './pages/film/landscape.js'
import CityMuse from './pages/film/cityMuse.js'
import DesertLight from './pages/desert-light/desert-light.js';
import ScrollToTop from './components/ScrollToTop';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <BrowserRouter>
        <div className="mobile-wrapper">
          <div className="mobile-header">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img className="mobile-signature" src="https://s2.loli.net/2025/04/21/GHJQBVZzCadyRtK.png" alt="signature" />
            </Link>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              { menuOpen ? '✘' : '☰' }
            </button>
          </div>

          <nav className={`sidebar ${menuOpen ? "show" : ""}`}>
            <ul>
              <li>
                <b>Film Collections</b>
                <ul className="sub-links">
                  <li><Link to="/film/landscape" onClick={() => setMenuOpen(false)}>Landscape</Link></li>
                  <li><Link to="/film/citymuse" onClick={() => setMenuOpen(false)}>Civic Muse</Link></li>
                </ul>
              </li>
              <li><Link to="/desert-light" onClick={() => setMenuOpen(false)}><b>Desert Light in Frames</b></Link></li>
              <li><Link to="/instant" onClick={() => setMenuOpen(false)}><b>The Instant Archive</b></Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}><b>About Me</b></Link></li>
              <li className="mobile-menu-icon"><img src="https://s2.loli.net/2025/04/28/pwgiB4FhSxlXKLk.png" width="40px" alt="icon" /></li>
            </ul>
          </nav>

          <main className="main-content">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/film/landscape" element={<Landscape />} />
              <Route path="/film/citymuse" element={<CityMuse />} />
              <Route path="/desert-light" element={<DesertLight />} />
              <Route path="/instant" element={<Instant />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <SpeedInsights />
        <Analytics />
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <div className="desktop-wrapper">
          <nav className="sidebar">
            <Link to="/"><img className="web-signature" src="https://s2.loli.net/2025/04/21/GHJQBVZzCadyRtK.png" alt="signature" /></Link>
            <ul>
              <li>
                Film Collections
                <ul className="sub-links">
                  <li><Link to="/film/landscape" onClick={() => setMenuOpen(false)}>Landscape</Link></li>
                  <li><Link to="/film/citymuse" onClick={() => setMenuOpen(false)}>Civic Muse</Link></li>
                </ul>
              </li>
              <li><Link to="/desert-light" onClick={() => setMenuOpen(false)}>Desert Light in Frames</Link></li>
              <li><Link to="/instant" onClick={() => setMenuOpen(false)}>The Instant Archive</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link></li>
            </ul>
            <div className="desktop-menu-icon">
              <img src="https://s2.loli.net/2025/04/28/pwgiB4FhSxlXKLk.png" width="40px" alt="icon" />
            </div>
          </nav>
  
          <main className="main-content">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/film/landscape" element={<Landscape />} />
              <Route path="/film/citymuse" element={<CityMuse />} />
              <Route path="/desert-light" element={<DesertLight />} />
              <Route path="/instant" element={<Instant />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <SpeedInsights />
        <Analytics />
      </BrowserRouter>
    );
  }
}

export default App;