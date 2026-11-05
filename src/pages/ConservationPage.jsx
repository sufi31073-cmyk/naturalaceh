import React from 'react';
import { Link } from 'react-router-dom';

export default function ConservationPage() {
  const wildlifeProjects = [
    {
      title: 'Pemantauan Anoa & Satwa Kunci Pegunungan',
      tag: 'Monitoring Satwa',
      desc: 'Pemasangan jaringan kamera jebak (camera trap) dan survei koridor jelajah anoa serta satwa terancam punah di bentang alam pegunungan Aceh.',
      img: 'https://picsum.photos/seed/anoa-wildlife/800/500',
    },
    {
      title: 'Restorasi Lahan Kritis & Penghijauan Hulu',
      tag: 'Land Restoration',
      desc: 'Rehabilitasi daerah tangkapan air (catchment area) dan penanaman vegetasi endemik untuk mencegah sedimentasi serta banjir bandang.',
      img: 'https://picsum.photos/seed/land-restoration/800/500',
    },
  ];

  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-8">
          <Link to="/" className="hover:text-stone-900 transition-colors">BERANDA</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">CONSERVATION · ANOA &amp; LAND RESTORATION</span>
        </div>

        {/* Header Banner */}
        <div className="border-b border-stone-200 pb-12 mb-16">
          <span className="section-label block mb-3">Program Pilar 04 · Konservasi Biodiversitas &amp; Lanskap</span>
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Konservasi Satwa Liar &amp; Pemulihan Lahan
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
            Melindungi kekayaan fauna Sumatra dan memulihkan integritas bentang alam hulu hingga hilir melalui riset lapangan yang ketat dan kemitraan masyarakat adat.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {wildlifeProjects.map((p, idx) => (
            <div key={idx} className="bg-white border border-stone-200 overflow-hidden group hover:border-stone-500 transition-colors">
              <div className="relative h-72 overflow-hidden bg-stone-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: 'sepia(10%)' }}
                />
                <span className="absolute top-4 left-4 bg-stone-900 text-white font-mono text-[11px] px-2.5 py-1">
                  {p.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-red-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Status Inisiatif:</span>
                  <span className="text-emerald-700 font-bold">● Berkelanjutan 2026</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="p-8 bg-white border border-stone-200 flex items-center justify-between">
          <span className="text-xs font-mono text-stone-500">Natural Aceh Conservation Initiative</span>
          <Link to="/" className="btn-primary text-xs py-2 px-5 uppercase tracking-wider font-semibold">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
