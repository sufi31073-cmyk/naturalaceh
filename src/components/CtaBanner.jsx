import React from 'react';

export default function CtaBanner() {
  return (
    <section className="bg-stone-800 text-white py-20 fade-up">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <span className="section-label text-stone-400 block mb-4">Bergabunglah</span>
        <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
          Bersama kami menjaga alam Aceh<br/>untuk generasi mendatang.
        </h2>
        <p className="text-stone-400 mb-8 max-w-xl mx-auto leading-relaxed">
          Dukung program riset, konservasi, dan pemberdayaan komunitas yang telah berjalan lebih dari satu dekade.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#pillars"
            className="inline-flex items-center gap-2 bg-white text-stone-900 text-sm font-medium px-7 py-3 hover:bg-stone-100 transition-colors"
          >
            Donasi Sekarang
          </a>
          <a
            href="mailto:info@naturalaceh.org"
            className="inline-flex items-center gap-2 border border-stone-500 text-white text-sm font-medium px-7 py-3 hover:border-white transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
