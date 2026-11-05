import React from 'react';
import { BOOKS } from '../data/siteData';

export default function BooksArchive() {
  return (
    <section id="archive" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between fade-up">
          <div>
            <span className="section-label">Karya Ilmiah</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-2">Natural Publishing — Arsip Buku</h2>
          </div>
          <span className="text-xs font-mono text-stone-400 hidden md:block">2013–2026</span>
        </div>

        <div
          className="flex overflow-x-auto gap-5 pb-4 -mx-4 px-4 snap-x snap-mandatory fade-up"
          style={{ scrollbarWidth: 'thin' }}
        >
          {BOOKS.map((b) => (
            <div key={b.title} className="book-card snap-start">
              <img src={b.img} alt={b.title} />
              <div className="mt-2">
                <div className="text-xs font-mono text-stone-400">{b.year}</div>
                <div className="text-sm text-stone-700 mt-0.5 leading-snug">{b.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
