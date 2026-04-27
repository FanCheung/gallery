import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from '@/components/Layout';
import Home from '@/pages/Home';
import Artworks from '@/pages/Artworks';
import ArtworkDetail from '@/pages/ArtworkDetail';
import ArtistDetail from '@/pages/ArtistDetail';
import About from '@/pages/About';
import Trading from '@/pages/Trading';
import Exhibitions from '@/pages/Exhibitions';
import ExhibitionDetail from '@/pages/ExhibitionDetail';
import News from '@/pages/News';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
            <Route path="/artist/:id" element={<ArtistDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/exhibitions/:id" element={<ExhibitionDetail />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
