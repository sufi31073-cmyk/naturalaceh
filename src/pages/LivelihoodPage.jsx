import React from 'react';
import { Link } from 'react-router-dom';
import heroMangroveImg from '../assets/hero-mangrove.png';

export default function LivelihoodPage() {
  const steps = [
    {
      num: '01',
      title: 'Pembibitan Komunitas (Community Nursery)',
      desc: 'Pengembangan persemaian bibit Rhizophora apiculata dan Avicennia marina bersama kelompok warga lokal Alue Naga.',
    },
    {
      num: '02',
      title: 'Zonasi & Penanaman Tahan Gelombang',
      desc: 'Pemetaan hidrologi pasang surut dan pemasangan pemecah ombak bambu alami untuk melindungi bibit muda.',
    },
    {
      num: '03',
      title: 'Silvofishery & Mata Pencaharian Mandiri',
      desc: 'Integrasi budidaya kepiting bakau dan tiram tanpa merusak tutupan pohon mangrove yang sedang tumbuh.',
    },
    {
      num: '04',
      title: 'Monitoring Ekologi & Drone Pemantau',
      desc: 'Pengukuran serapan karbon biru (Blue Carbon) dan tingkat kelangsungan hidup (survival rate) secara berkala.',
    },
  ];

  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-8">
          <Link to="/" className="hover:text-stone-900 transition-colors">BERANDA</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">LIVELIHOOD &amp; MANGROVE RESTORATION</span>
        </div>

        {/* Header Banner */}
        <div className="border-b border-stone-200 pb-12 mb-16">
          <span className="section-label block mb-3">Program Pilar 02 · Restorasi Berbasis Kehidupan</span>
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Livelihood Program &amp; Restorasi Mangrove
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
            Memulihkan benteng pesisir Aceh melalui restorasi mangrove berbasis penghidupan masyarakat lokal di Alue Naga dan wilayah pesisir Sumatra.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="border border-stone-200 overflow-hidden bg-white shadow-sm">
              <img
                src={heroMangroveImg}
                alt="Restorasi Mangrove Alue Naga"
                className="w-full h-[450px] object-cover"
                style={{ filter: 'sepia(8%)' }}
              />
              <div className="p-4 bg-stone-900 text-stone-300 flex items-center justify-between text-xs font-mono">
                <span>ZONA RESTORASI ALUE NAGA · BANDA ACEH</span>
                <span className="text-emerald-400 font-bold">● ONGOING PROJECT 2026</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 leading-snug">
              Nature as Infrastructure: Ekosistem Sebagai Pelindung Nyata
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Setelah tsunami 2004, Alue Naga kehilangan sebagian besar benteng alaminya. Melalui Natural Aceh, masyarakat setempat kini tidak hanya menjadi penanam, tetapi pemilik manfaat langsung dari ekosistem pesisir yang pulih.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="bg-white p-4 border border-stone-200">
                <div className="text-3xl font-serif font-bold text-stone-900">75.000+</div>
                <div className="text-xs text-stone-500 font-mono mt-1">Bibit Tertanam</div>
              </div>
              <div className="bg-white p-4 border border-stone-200">
                <div className="text-3xl font-serif font-bold text-stone-900">84%</div>
                <div className="text-xs text-stone-500 font-mono mt-1">Tingkat Kelangsungan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stages of Restoration */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="section-label">Metodologi Lapangan</span>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-2">
              Tahapan Proyek Berkelanjutan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white p-6 border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-serif font-bold text-stone-300 mb-3">{s.num}</div>
                  <h3 className="font-serif text-lg text-stone-900 mb-2">{s.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 bg-stone-900 text-white flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-1">Dukung Aksi Penanaman Mangrove</h3>
            <p className="text-stone-400 text-sm">Adopsi bibit mangrove atau ajak tim institusi Anda melakukan aksi lapangan bersama kami.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:info@naturalaceh.org" className="btn-primary text-xs py-2.5 px-6 uppercase tracking-wider font-semibold">
              Adopsi Pohon Mangrove
            </a>
            <Link to="/" className="btn-outline border-stone-700 text-white hover:border-white text-xs py-2.5 px-5 uppercase tracking-wider">
              Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
