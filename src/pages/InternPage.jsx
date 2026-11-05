import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InternPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'MSIB',
    institution: '',
    interest: 'Restorasi Mangrove & Ekologi',
    notes: '',
  });

  const programs = [
    {
      name: 'MSIB (Kampus Merdeka)',
      badge: 'Mahasiswa S1/D4',
      duration: '4–6 Bulan',
      desc: 'Program magang bersertifikat resmi Kemendikbudristek dengan proyek langsung di laboratorium lapangan dan pendampingan desa.',
    },
    {
      name: 'Magang Mandiri Perguruan Tinggi',
      badge: 'Mahasiswa Umum',
      duration: '1–3 Bulan',
      desc: 'Terbuka bagi mahasiswa yang ingin menyelesaikan tugas akhir, riset skripsi, atau magang wajib institusi.',
    },
    {
      name: 'Magang SMK (Prakerin)',
      badge: 'Siswa SMK',
      duration: '3–6 Bulan',
      desc: 'Praktik kerja industri di bidang kejuruan multimedia, teknologi informasi, kehutanan, dan tata kelola administrasi.',
    },
    {
      name: 'Magang Dalam Negeri & Relawan',
      badge: 'Umum & Profesional',
      duration: 'Fleksibel',
      desc: 'Bergabung dengan tim aksi lapangan dalam restorasi mangrove, kampanye edukasi iklim gampong, dan dokumentasi.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-8">
          <Link to="/" className="hover:text-stone-900 transition-colors">BERANDA</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">SUBMIT · PROGRAM MAGANG &amp; MSIB</span>
        </div>

        {/* Header Banner */}
        <div className="border-b border-stone-200 pb-12 mb-16">
          <span className="section-label block mb-3">Karier &amp; Pengembangan Kapasitas Generasi Muda</span>
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Program Magang, Riset &amp; Relawan Natural Aceh
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
            Tingkatkan keterampilan praktis dalam konservasi pesisir, advokasi lingkungan hidup, dan analisis geospasial bersama para mentor profesional di Banda Aceh.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programs.map((p, i) => (
            <div key={i} className="bg-white border border-stone-200 p-6 flex flex-col justify-between hover:border-stone-400 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-stone-100 text-stone-800 font-mono text-[10px] px-2 py-0.5 border border-stone-300">
                    {p.badge}
                  </span>
                  <span className="font-mono text-xs text-red-700 font-semibold">{p.duration}</span>
                </div>
                <h3 className="font-serif text-lg text-stone-900 mb-2">{p.name}</h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">{p.desc}</p>
              </div>
              <a
                href="#form-daftar"
                className="text-xs font-mono text-stone-900 font-bold hover:text-red-700 flex items-center gap-1 pt-3 border-t border-stone-100"
              >
                Daftar Program ↓
              </a>
            </div>
          ))}
        </div>

        {/* Registration Form & Guidelines */}
        <div id="form-daftar" className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-stone-200 p-8 md:p-12 mb-20">
          <div className="lg:col-span-5 space-y-6">
            <span className="section-label">Pendaftaran Online</span>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">
              Kirimkan Aplikasi Anda Sekarang
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Tim seleksi Natural Aceh meninjau aplikasi secara berkala setiap awal bulan. Pastikan data yang dimasukkan akurat dan lampiran CV/portofolio siap diunggah saat tahap wawancara.
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-200 text-xs text-stone-600 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-red-700 font-bold">✓</span>
                <span>Sertifikat resmi &amp; surat rekomendasi akhir magang.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-700 font-bold">✓</span>
                <span>Akses laboratorium data lapangan &amp; perpustakaan riset.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-700 font-bold">✓</span>
                <span>Bimbingan langsung dari peneliti dan praktisi konservasi.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-300 text-emerald-900 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Aplikasi Berhasil Dikirim!</h3>
                <p className="text-sm text-emerald-800 mb-6">
                  Terima kasih, <strong>{formData.name}</strong>. Tim Natural Aceh akan meninjau pendaftaran Anda dan menghubungi melalui email <em>{formData.email}</em> dalam 3-5 hari kerja.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline border-emerald-700 text-emerald-900 hover:bg-emerald-700 hover:text-white text-xs py-2 px-5 font-mono"
                >
                  Kirim Aplikasi Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-600 mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Rahmat Hidayat"
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-600 mb-1">Email Aktif *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-600 mb-1">Nomor WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="081234567890"
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-600 mb-1">Pilihan Jalur Magang *</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800"
                    >
                      <option value="MSIB">MSIB (Kampus Merdeka)</option>
                      <option value="Magang Mandiri">Magang Mandiri Kampus</option>
                      <option value="Magang SMK">Magang SMK (Prakerin)</option>
                      <option value="Magang Dalam Negeri">Magang Dalam Negeri</option>
                      <option value="Relawan Umum">Relawan Lapangan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-600 mb-1">Asal Sekolah / Universitas *</label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="Contoh: Universitas Syiah Kuala / SMKN 1 Banda Aceh"
                    className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-600 mb-1">Bidang Minat / Divisi *</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800"
                  >
                    <option>Restorasi Mangrove &amp; Ekologi Pesisir</option>
                    <option>WPS &amp; Pemberdayaan Perempuan</option>
                    <option>Geospasial / SIG &amp; Pemetaan Drone</option>
                    <option>Penerbitan Buku &amp; Jurnal (Natural Publishing)</option>
                    <option>Multimedia &amp; Komunikasi Sains</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-600 mb-1">Motivasi &amp; Catatan Tambahan</label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ceritakan singkat motivasi Anda bergabung..."
                    className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-xs py-3 uppercase tracking-wider font-semibold"
                >
                  Kirim Formulir Pendaftaran
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
