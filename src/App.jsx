import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import WPSPage from './pages/WPSPage';
import LivelihoodPage from './pages/LivelihoodPage';
import SdgsPage from './pages/SdgsPage';
import InternPage from './pages/InternPage';
import ConservationPage from './pages/ConservationPage';
import BooksPage from './pages/BooksPage';
import LoginPage from './pages/LoginPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fade-up observer for editorial feel
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col justify-between">
      <div>
        <Navbar scrolled={scrolled} />
        <main>
          <Routes>
            {/* Beranda */}
            <Route path="/" element={<HomePage />} />

            {/* WPS Program Pages */}
            <Route path="/wps" element={<WPSPage />} />
            <Route path="/coastal-women" element={<WPSPage />} />
            <Route path="/health-and-environmental-equity" element={<WPSPage />} />
            <Route path="/economic-empowerment-of-women-in-indonesia" element={<WPSPage />} />
            <Route path="/women-empowerment-initiative-for-coastal-sustainability-in-aceh" element={<WPSPage />} />

            {/* Livelihood & Mangrove Restoration */}
            <Route path="/alue-naga" element={<LivelihoodPage />} />
            <Route path="/restoration-ongoing-project-mangrove-restoration" element={<LivelihoodPage />} />
            <Route path="/our-activities" element={<LivelihoodPage />} />
            <Route path="/nature-as-infrastructure" element={<LivelihoodPage />} />
            <Route path="/achievements" element={<LivelihoodPage />} />
            <Route path="/akademi" element={<LivelihoodPage />} />

            {/* SDGs Program */}
            <Route path="/sdgs-program" element={<SdgsPage />} />
            <Route path="/sumatrasig" element={<SdgsPage />} />
            <Route path="/ecolabels-sustainable-public-procurement" element={<SdgsPage />} />
            <Route path="/microclimate-risk-insurance" element={<SdgsPage />} />
            <Route path="/coastal-ecosystem-restoration" element={<SdgsPage />} />
            <Route path="/green-health-care-solutions" element={<SdgsPage />} />
            <Route path="/jaminan-penghasilan-aceh-bungkesmas" element={<SdgsPage />} />
            <Route path="/gurucerdas" element={<SdgsPage />} />

            {/* Submit, Intern & MSIB */}
            <Route path="/intern" element={<InternPage />} />
            <Route path="/msib" element={<InternPage />} />
            <Route path="/magang-smk" element={<InternPage />} />
            <Route path="/magang-mandiri" element={<InternPage />} />
            <Route path="/magang-dalam-negeri" element={<InternPage />} />
            <Route path="/magang-umum-relawan" element={<InternPage />} />
            <Route path="/career" element={<InternPage />} />
            <Route path="/isbn" element={<InternPage />} />
            <Route path="/article" element={<InternPage />} />
            <Route path="/partnership" element={<InternPage />} />
            <Route path="/social-enterprise" element={<InternPage />} />
            <Route path="/qris" element={<InternPage />} />

            {/* Conservation */}
            <Route path="/conservation" element={<ConservationPage />} />
            <Route path="/anoa" element={<ConservationPage />} />
            <Route path="/land-restoration" element={<ConservationPage />} />

            {/* Books Archive (2013-2026) */}
            <Route path="/books" element={<BooksPage />} />
            <Route path="/:year" element={<BooksPage />} />

            {/* Login & Dokumen Online */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/detail-dokumen-online" element={<LoginPage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout />
    </BrowserRouter>
  );
}
