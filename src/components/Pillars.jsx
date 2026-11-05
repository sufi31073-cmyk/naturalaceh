import React, { useState } from 'react';
import { PILLARS } from '../data/siteData';

export default function Pillars() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="pillars" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 fade-up">
          <span className="section-label">Area Program</span>
          <h2 className="text-3xl font-serif text-stone-900 mt-2">Pilar Dampak Kami</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Pillar list */}
          <div>
            {PILLARS.map((p, i) => (
              <button
                key={p.num}
                className="pillar-row w-full text-left fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
                onClick={() => setActivePillar(i)}
              >
                <span
                  className={`pillar-num transition-colors duration-300 ${
                    activePillar === i ? 'text-stone-800' : ''
                  }`}
                >
                  {p.num}
                </span>
                <div>
                  <div
                    className={`pillar-title text-lg transition-colors duration-300 ${
                      activePillar === i ? 'text-stone-900' : 'text-stone-700'
                    }`}
                  >
                    {p.title}
                  </div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`ml-auto flex-shrink-0 transition-opacity duration-300 ${
                    activePillar === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Active pillar image */}
          <div className="sticky top-28 fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="img-hover border border-stone-200">
              <img
                key={activePillar}
                src={PILLARS[activePillar].img}
                alt={PILLARS[activePillar].title}
                className="w-full h-80 object-cover"
                style={{
                  filter: 'sepia(8%) brightness(0.96)',
                  animation: 'fadeImg 0.4s ease',
                }}
              />
            </div>
            <div className="mt-2 text-xs text-stone-400 font-mono">
              FIG {String(activePillar + 2).padStart(2, '0')}. {PILLARS[activePillar].title.toUpperCase()}
            </div>
            <style>{`@keyframes fadeImg { from { opacity:0; transform:scale(1.02); } to { opacity:1; transform:scale(1); } }`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
