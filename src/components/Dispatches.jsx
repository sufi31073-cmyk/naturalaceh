import React from 'react';
import { DISPATCHES } from '../data/siteData';

export default function Dispatches() {
  return (
    <section id="dispatches" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 flex items-end justify-between fade-up">
          <div>
            <span className="section-label">Liputan Lapangan</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-2">Dispatches Terbaru</h2>
          </div>
          <a
            href="#dispatches"
            className="text-sm text-stone-500 hover:text-stone-800 transition-colors hidden md:flex items-center gap-1 font-mono"
          >
            Semua artikel
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large featured article */}
          {DISPATCHES.filter((d) => d.large).map((d) => (
            <article
              key={d.id}
              className="lg:col-span-7 group cursor-pointer fade-up"
            >
              <div className="img-hover border border-stone-200 mb-4">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-72 md:h-96 object-cover"
                  style={{ filter: 'sepia(12%) brightness(0.95)' }}
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-white bg-stone-700 px-2 py-0.5 font-mono">{d.tag}</span>
                <span className="font-mono text-xs text-stone-400">{d.coords}</span>
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:underline underline-offset-4 decoration-1">
                {d.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-3">{d.excerpt}</p>
              <span className="text-xs font-mono text-stone-400">{d.date}</span>
            </article>
          ))}

          {/* Stack of smaller articles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {DISPATCHES.filter((d) => !d.large).map((d, i) => (
              <article
                key={d.id}
                className="article-card group flex gap-4 cursor-pointer fade-up"
                style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
              >
                <div className="img-hover flex-shrink-0 w-24 h-24 border border-stone-200">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'sepia(10%)' }}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-stone-400 block mb-1">
                      {d.tag} · {d.date}
                    </span>
                    <h4 className="font-serif text-base text-stone-900 leading-snug group-hover:underline underline-offset-2 decoration-1">
                      {d.title}
                    </h4>
                    <p className="text-sm text-stone-500 mt-1">{d.excerpt}</p>
                  </div>
                  <span className="font-mono text-xs text-stone-400 mt-1">{d.coords}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
