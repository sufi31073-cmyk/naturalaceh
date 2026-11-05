import React from 'react';
import { Link } from 'react-router-dom';

export default function WPSPage() {
  const initiatives = [
    {
      title: 'Coastal Women (Pemberdayaan Perempuan Pesisir)',
      badge: 'Pesisir Aceh',
      desc: 'Penguatan kapasitas ekonomi dan kepemimpinan ibu-ibu pencari tiram dan nelayan perempuan di pesisir Banda Aceh dan Aceh Besar.',
      metrics: '420+ Perempuan Terberdayakan',
      img: 'https://picsum.photos/seed/wps-coastal/800/500',
    },
    {
      title: 'Health and Environmental Equity',
      badge: 'Kesehatan Lingkungan',
      desc: 'Akses terhadap air bersih, sanitasi layak anak dan perempuan, serta perlindungan kesehatan reproduksi di zona rawan iklim dan abrasi.',
      metrics: '18 Desa Pesisir Terdampingi',
      img: 'https://picsum.photos/seed/wps-health/800/500',
    },
    {
      title: 'Economic Empowerment of Women',
      badge: 'Ekonomi Mandiri',
      desc: 'Pelatihan pengolahan produk bernilai tambah berbasis hasil laut lokal, kewirausahaan hijau, dan akses keuangan mikro Bungkesmas.',
      metrics: '35 Kelompok Usaha Mikro',
      img: 'https://picsum.photos/seed/wps-economic/800/500',
    },
    {
      title: 'Women Empowerment for Coastal Sustainability',
      badge: 'Konservasi Komunitas',
      desc: 'Integrasi peran perempuan dalam forum musyawarah gampong, pembibitan mangrove mandiri, dan pengawasan pesisir berbasis adat.',
      metrics: '12 Kelompok Pengawas Mangrove',
      img: 'https://picsum.photos/seed/wps-mangrove/800/500',
    },
  ];

  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-8">
          <Link to="/" className="hover:text-stone-900 transition-colors">BERANDA</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">WPS PROGRAM</span>
        </div>

        {/* Header Banner */}
        <div className="border-b border-stone-200 pb-12 mb-16">
          <span className="section-label block mb-3">Program Pilar 01 · Gender &amp; Ketahanan Iklim</span>
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Women, Peace, and Security (WPS) Program
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
            Inisiatif terpadu Natural Aceh dalam menempatkan perempuan di garis depan aksi iklim, resolusi konflik sumber daya alam, dan ketahanan ekonomi keluarga pesisir di seluruh Aceh.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {initiatives.map((item, idx) => (
            <div key={idx} className="bg-white border border-stone-200 shadow-sm overflow-hidden flex flex-col group hover:border-stone-400 transition-colors">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: 'sepia(8%)' }}
                />
                <span className="absolute top-4 left-4 bg-stone-900/80 text-white font-mono text-[11px] px-2.5 py-1 backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between font-mono text-xs text-stone-500">
                  <span>Dampak:</span>
                  <span className="text-stone-900 font-bold">{item.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Field Journal Quote */}
        <div className="bg-stone-900 text-stone-200 p-8 md:p-12 rounded-none mb-16 border-l-4 border-red-700">
          <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed mb-4 text-stone-100">
            "Ketika perempuan pesisir diberi ruang dan akses kepemimpinan, restorasi mangrove bukan sekadar menanam pohon, melainkan menjaga kedaulatan pangan dan masa depan anak cucu gampong."
          </blockquote>
          <div className="font-mono text-xs text-stone-400">
            — Catatan Lapangan Tim WPS Natural Aceh, Alue Naga, Banda Aceh
          </div>
        </div>

        {/* CTA Back or Submit */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-8 bg-white border border-stone-200">
          <div>
            <h4 className="font-serif text-lg text-stone-900 mb-1">Ingin Berkolaborasi dalam Program WPS?</h4>
            <p className="text-sm text-stone-600">Kami membuka kemitraan riset, pendampingan desa, dan dukungan CSR.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/intern" className="btn-primary text-xs py-2.5 px-5 uppercase tracking-wider font-semibold">
              Gabung / Magang WPS
            </Link>
            <Link to="/" className="btn-outline text-xs py-2.5 px-5 uppercase tracking-wider font-semibold">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
