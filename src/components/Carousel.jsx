import React, { useState, useEffect, useRef, useCallback } from 'react';

const testimonials = [
  {
    quote: "Natural Aceh telah menjadi mitra terpercaya kami dalam program restorasi mangrove. Dedikasi dan komitmen mereka terhadap lingkungan benar‑benar menginspirasi.",
    author: "Dr. Rima Yusuf",
    role: "Direktur Program Konservasi, KLHK",
  },
  {
    quote: "Pelatihan yang diberikan Natural Aceh membuka wawasan kami tentang pentingnya ekosistem pesisir. Program mereka sangat terstruktur dan berbasis riset.",
    author: "Fadhil Mustafa",
    role: "Kepala Dinas Lingkungan Hidup, Aceh Besar",
  },
  {
    quote: "Kami sangat terkesan dengan kemampuan Natural Aceh menghubungkan komunitas lokal dengan gerakan konservasi global. Kerja nyata, dampak nyata.",
    author: "Sarah Chen",
    role: "Program Officer, Konservasi International",
  },
  {
    quote: "Publikasi dan modul dari Natural Aceh menjadi referensi utama kami dalam penelitian ekologi mangrove di kawasan pesisir Sumatera.",
    author: "Prof. Hamdi Khalid",
    role: "Guru Besar Ekologi, Universitas Syiah Kuala",
  },
];

export default function Carousel({ items = testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const autoPlayRef = useRef(null);
  const hovered = useRef(false);

  const go = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => {
    setDirection('next');
    go((current + 1) % items.length);
  }, [current, go, items.length]);

  const prev = useCallback(() => {
    setDirection('prev');
    go((current - 1 + items.length) % items.length);
  }, [current, go, items.length]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!hovered.current) {
        setDirection('next');
        setCurrent(c => (c + 1) % items.length);
      }
    }, 5500);
    return () => clearInterval(autoPlayRef.current);
  }, [items.length]);

  const item = items[current];

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10 text-center">
          <span className="section-label">Testimoni</span>
          <h2 className="text-3xl font-serif mt-2 text-stone-800">
            Kata Mereka
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => { hovered.current = true; }}
          onMouseLeave={() => { hovered.current = false; }}
        >
          {/* Quote block */}
          <div
            className="text-center px-8 py-10 bg-white border border-stone-200"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? (direction === 'next' ? 'translateX(16px)' : 'translateX(-16px)')
                : 'translateX(0)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            {/* Open-quote mark */}
            <span
              className="block text-7xl leading-none text-stone-200 font-serif mb-2 select-none"
              aria-hidden="true"
            >
              &#8220;
            </span>

            <p className="text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto font-serif italic mb-8">
              {item.quote}
            </p>

            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-stone-800 tracking-wide">
                {item.author}
              </span>
              <span className="text-xs text-stone-500 font-mono tracking-wider">
                {item.role}
              </span>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Sebelumnya"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 flex items-center justify-center bg-white border border-stone-200 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Selanjutnya"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 flex items-center justify-center bg-white border border-stone-200 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 'next' : 'prev'); go(i); }}
              aria-label={`Slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-stone-800 w-6' : 'bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
