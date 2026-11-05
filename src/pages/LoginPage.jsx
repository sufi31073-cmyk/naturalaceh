import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [docId, setDocId] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [verified, setVerified] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (docId.trim() !== '') {
      setVerified(true);
    }
  };

  return (
    <div className="bg-stone-50 py-16 md:py-24 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto px-4 w-full">
        <div className="bg-white border border-stone-200 p-8 md:p-10 shadow-sm">
          {/* Logo / Header */}
          <div className="text-center mb-8">
            <span className="section-label block mb-2">Portal Verifikasi &amp; Keanggotaan</span>
            <h1 className="text-2xl md:text-3xl font-serif text-stone-900">Detail Dokumen Online</h1>
            <p className="text-stone-500 text-xs mt-2 font-mono">
              Sistem Autentikasi Dokumen Riset, Sertifikat Pelatihan &amp; Surat Kemitraan
            </p>
          </div>

          {verified ? (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 font-mono">
                <div className="font-bold mb-1">✓ DOKUMEN TERAUTENTIKASI</div>
                <div>ID: {docId}</div>
                <div>Penerbit: Natural Aceh Institutional Repository</div>
                <div>Status: Valid &amp; Tersertifikasi Elektronik</div>
              </div>
              <button
                onClick={() => setVerified(false)}
                className="w-full btn-outline text-xs py-2.5 font-mono"
              >
                Cek Dokumen Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleVerify} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">
                  Nomor Sertifikat / ID Dokumen *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Misal: NA-2026-MSIB-089"
                  value={docId}
                  onChange={(e) => setDocId(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">
                  Kode Akses / PIN Pengaman (Opsional)
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-800 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center text-xs py-3 uppercase tracking-wider font-semibold"
              >
                Verifikasi Dokumen Sekarang
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
            <Link to="/" className="hover:text-stone-900">← Kembali ke Beranda</Link>
            <a href="mailto:info@naturalaceh.org" className="hover:text-stone-900">Bantuan Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
