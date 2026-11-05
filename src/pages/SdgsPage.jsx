import React from 'react';
import { Link } from 'react-router-dom';

export default function SdgsPage() {
  const sdgsList = [
    {
      code: 'SDG 13',
      name: 'Climate Action',
      title: 'SumatraSIG & Microclimate Risk Insurance',
      desc: 'Pemodelan risiko iklim mikro untuk nelayan dan petani tambak serta platform informasi geospasial berbasis partisipasi warga.',
    },
    {
      code: 'SDG 14',
      name: 'Life Below Water',
      title: 'Coastal Ecosystem Restoration',
      desc: 'Perlindungan padang lamun, terumbu karang, dan zona muara pasca-bencana dengan penerapan kearifan Panglima Laot.',
    },
    {
      code: 'SDG 12',
      name: 'Responsible Consumption',
      title: 'Ecolabels / Sustainable Public Procurement (SPP)',
      desc: 'Standardisasi sertifikasi produk ramah lingkungan dan advokasi kebijakan pengadaan berkelanjutan pada pemerintah daerah.',
    },
    {
      code: 'SDG 3',
      name: 'Good Health & Well-Being',
      title: 'Green Health Care Solutions & Hansen’s Disease',
      desc: 'Dukungan fasilitas kesehatan rendah emisi dan pendampingan eliminasi stigma bagi penderita kusta di komunitas terpencil.',
    },
    {
      code: 'SDG 1',
      name: 'No Poverty',
      title: 'Jaminan Penghasilan Aceh (Bungkesmas)',
      desc: 'Skema tabungan dan perlindungan kecelakaan kerja mikro untuk keluarga pekerja sektor informal dan pesisir.',
    },
    {
      code: 'SDG 4',
      name: 'Quality Education',
      title: 'GuruCerdas & Disaster Risk Reduction Education',
      desc: 'Integrasi kurikulum kebencanaan dan literasi iklim digital bagi sekolah-sekolah di zona rentan tsunami dan abrasi.',
    },
  ];

  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-8">
          <Link to="/" className="hover:text-stone-900 transition-colors">BERANDA</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">SDGS PROGRAM</span>
        </div>

        {/* Header Banner */}
        <div className="border-b border-stone-200 pb-12 mb-16">
          <span className="section-label block mb-3">Program Pilar 03 · Pembangunan Berkelanjutan Aceh</span>
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Sustainable Development Goals (SDGs) Program
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
            Menerjemahkan agenda global PBB ke dalam aksi nyata gampong dan kabupaten di Aceh, memadukan ilmu pengetahuan, kebijakan publik, dan kearifan masyarakat adat.
          </p>
        </div>

        {/* SDGs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sdgsList.map((item, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-8 flex flex-col justify-between group hover:border-stone-900 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-stone-900 text-white font-mono text-xs px-2.5 py-1">
                    {item.code}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                    {item.name}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-stone-700">
                <span>Inisiatif Aktif</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* SDGs Callout */}
        <div className="bg-stone-900 text-white p-8 md:p-12 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl mb-2">Tertarik Mengakses Data Riset SDGs Aceh?</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Kami mempublikasikan data terbuka dan laporan evaluasi SDGs berkala untuk peneliti, mahasiswa, dan pembuat kebijakan.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/books" className="btn-primary text-xs py-2.5 px-6 uppercase tracking-wider font-semibold">
              Lihat Arsip Publikasi
            </Link>
            <Link to="/" className="btn-outline border-stone-700 text-white hover:border-white text-xs py-2.5 px-5 uppercase tracking-wider">
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
