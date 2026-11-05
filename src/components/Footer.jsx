import React from 'react';
import { FOOTER_UNITS, SOCIAL_LINKS } from '../data/siteData';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-stone-800">

          {/* Brand + Social */}
          <div className="lg:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Natural Aceh"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-sm leading-relaxed text-stone-400 mb-6">
              Kami adalah lembaga riset, pelatihan, dan filantropi yang berpartisipasi dalam proses pembangunan dan rencana aksi program berkelanjutan di Aceh dan Indonesia melalui kemitraan kolaboratif dengan semua pemangku kepentingan.
            </p>
            <span className="font-mono text-xs tracking-widest text-stone-600 uppercase block mb-5">Est. 2013</span>

            {/* Social Media */}
            <div>
              <h4 className="text-xs font-mono tracking-widest text-stone-500 uppercase mb-3">Media Sosial</h4>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-stone-700 text-stone-500 hover:text-white hover:border-stone-400 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Units */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-stone-500 uppercase mb-5">Unit Kerja</h4>
            <ul className="space-y-2.5">
              {FOOTER_UNITS.map((u) => (
                <li key={u}>
                  <a href="#pillars" className="text-sm text-stone-400 hover:text-white transition-colors">{u}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Phone */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-stone-500 uppercase mb-5">Jam Operasional</h4>
              <div className="space-y-1.5 text-sm">
                <p>Senin–Jumat: 09:00 – 17:00</p>
                <p>Sabtu: 09:00 – 13:00</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-mono tracking-widest text-stone-500 uppercase mb-5">Telepon</h4>
              <div className="space-y-1.5 text-sm font-mono">
                <a href="tel:+6265136130076" className="block hover:text-white transition-colors">+62 651 3 613076</a>
                <a href="tel:+6289946130076" className="block hover:text-white transition-colors">+62 899 4 613076</a>
                <a href="tel:+6289756130076" className="block hover:text-white transition-colors">+62 897 5 613076</a>
              </div>
            </div>
          </div>

          {/* Office + Nav */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-stone-500 uppercase mb-5">Kantor</h4>
              <address className="not-italic text-sm leading-relaxed text-stone-400">
                <p>Tgk. Adee II No 8, Ulee Kareng</p>
                <p>Banda Aceh City</p>
                <p>Indonesia 23117</p>
              </address>
              <a
                href="mailto:info@naturalaceh.org"
                className="inline-block mt-3 text-sm font-mono text-stone-400 hover:text-white transition-colors"
              >
                info@naturalaceh.org
              </a>
            </div>
            <div>
              <h4 className="text-xs font-mono tracking-widest text-stone-500 uppercase mb-5">Navigasi</h4>
              <ul className="space-y-2.5">
                {['Tentang Kami', 'Program', 'Publikasi', 'Pelatihan', 'Berita', 'Karir', 'Hubungi Kami'].map((n) => (
                  <li key={n}>
                    <a href="#pillars" className="text-sm text-stone-400 hover:text-white transition-colors">{n}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <span>© 2026 Natural Aceh. Hak Cipta Dilindungi.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Syarat Penggunaan</a>
            <span className="font-mono">naturalaceh.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
