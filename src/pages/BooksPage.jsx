import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKS } from '../data/siteData';

export default function BooksPage() {
  const [selectedYear, setSelectedYear] = useState('ALL');
  const years = ['ALL', '2026', '2025', '2024', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013'];

  const extendedBooks = [
    ...BOOKS,
    {
      title: 'Katalog Mangrove Sumatra & Valuasi Ekonomi Karbon',
      year: '2026',
      img: 'https://picsum.photos/seed/book-2026/200/280',
    },
    {
      title: 'Rekonstruksi Pesisir Aceh: 20 Tahun Pasca Tsunami',
      year: '2025',
      img: 'https://picsum.photos/seed/book-2025/200/280',
    },
    {
      title: 'Panduan Praktis Mitigasi Bencana Berbasis Sekolah',
      year: '2021',
      img: 'https://picsum.photos/seed/book-2021/200/280',
    },
    {
      title: 'Panglima Laot: Hukum Adat Kelautan di Aceh',
      year: '2017',
      img: 'https://picsum.photos/seed/book-2017/200/280',
    },
    {
      title: 'Pemberdayaan Ekonomi Nelayan Pasca Konflik',
      year: '2014',
      img: 'https://picsum.photos/seed/book-2014/200/280',
    },
    {
      title: 'Monograf Ekologi Pesisir Ulee Lheue & Alue Naga',
      year: '2013',
      img: 'https://picsum.photos/seed/book-2013/200/280',
    },
  ];

  const filteredBooks = selectedYear === 'ALL'
    ? extendedBooks
    : extendedBooks.filter((b) => b.year === selectedYear);

  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-8">
          <Link to="/" className="hover:text-stone-900 transition-colors">BERANDA</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">NATURAL PUBLISHING · ARSIP BUKU</span>
        </div>

        {/* Header Banner */}
        <div className="border-b border-stone-200 pb-12 mb-12">
          <span className="section-label block mb-3">Natural Publishing · Katalog Terbitan Ber-ISBN</span>
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Arsip Buku &amp; Karya Ilmiah (2013–2026)
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
            Dokumentasi komprehensif atas riset lapangan, panduan teknis konservasi, kajian kearifan lokal adat laot, dan modul pendidikan ketahanan iklim selama lebih dari 13 tahun.
          </p>
        </div>

        {/* Year Filter Buttons */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
            Filter Tahun Penerbitan:
          </div>
          <div className="flex flex-wrap gap-2">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors border ${
                  selectedYear === yr
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {filteredBooks.map((b, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-3 flex flex-col justify-between group hover:border-stone-900 transition-colors">
              <div>
                <div className="overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-[11px] font-mono text-red-700 font-bold">{b.year}</div>
                <h3 className="font-serif text-xs md:text-sm text-stone-900 mt-1 leading-snug line-clamp-2 group-hover:underline">
                  {b.title}
                </h3>
              </div>
              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>ISBN Resmi</span>
                <span>Akses Riset →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Publication Assistance CTA */}
        <div className="bg-stone-900 text-white p-8 md:p-12 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl mb-2">Punya Naskah Buku atau Laporan Riset?</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Natural Publishing melayani pengajuan nomor ISBN resmi Perpustakaan Nasional RI, tata letak profesional, dan distribusi cetak/digital untuk karya bertema lingkungan dan sosial.
            </p>
          </div>
          <Link to="/intern" className="btn-primary text-xs py-2.5 px-6 uppercase tracking-wider font-semibold">
            Konsultasi Penerbitan ISBN
          </Link>
        </div>
      </div>
    </div>
  );
}
