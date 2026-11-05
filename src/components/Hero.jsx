import React from 'react';
import heroMangroveImg from '../assets/hero-mangrove.png';

export default function Hero({ heroRef }) {
  return (
    <section ref={heroRef} className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Text block */}
        <div className="lg:col-span-6 fade-up">
          <span className="section-label block mb-6">Riset · Konservasi · Filantropi · Aceh</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 text-balance">
            Kemanusiaan dan<br />Alam adalah Satu.
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-lg">
            Natural Aceh adalah lembaga riset, pelatihan, konservasi, dan filantropi yang berakar pada ekosistem pesisir dan hutan hujan Aceh, Indonesia.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#pillars" className="btn-primary">Jelajahi Program</a>
            <a href="#dispatches" className="btn-outline">Baca Riset Terbaru</a>
          </div>

          {/* Stats row */}
          <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-3 gap-6">
            {[
              { n: '13+', label: 'Tahun Berdiri' },
              { n: '48', label: 'Publikasi' },
              { n: '8', label: 'Unit Kerja' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-serif font-bold text-stone-900">{s.n}</div>
                <div className="text-xs text-stone-500 mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image block */}
        <div className="lg:col-span-6 fade-up" style={{ transitionDelay: '0.15s' }}>
          <div className="relative">
            <div className="img-hover border border-stone-200">
              <img
                src={heroMangroveImg}
                alt="Restorasi Mangrove Alue Naga"
                className="w-full h-[480px] object-cover"
                style={{ filter: 'sepia(10%) brightness(0.97)' }}
              />
            </div>
            {/* Caption */}
            <div className="mt-2 flex items-center justify-between text-xs text-stone-400 font-mono ml-48">
              <span>RESTORASI PESISIR ALUE NAGA — BANDA ACEH</span>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-stone-800 text-white px-5 py-4 text-sm hidden md:block">
              <div className="font-mono text-xs text-stone-400 mb-1">Program aktif</div>
              <div className="font-serif text-base">Restorasi Mangrove<br />Alue Naga, Aceh Besar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
