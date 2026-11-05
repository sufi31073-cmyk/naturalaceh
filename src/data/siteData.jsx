import React from 'react';
import pillarMangroveImg from '../assets/pillar-mangrove.png';

export const NAV_ITEMS = [
  {
    label: 'WPS Program',
    href: '/wps',
    children: [
      { label: 'Coastal Women', href: '/coastal-women' },
      { label: 'Health and Environmental Equity', href: '/health-and-environmental-equity' },
      { label: 'Economic Empowerment of Women', href: '/economic-empowerment-of-women-in-indonesia' },
      { label: 'Women Empowerment for Coastal Sustainability', href: '/women-empowerment-initiative-for-coastal-sustainability-in-aceh' },
    ],
  },
  {
    label: 'Livelihood Program',
    href: '/alue-naga',
    children: [
      { label: 'Akademi', href: '/akademi' },
      { label: 'Mangrove Restoration', href: '/restoration-ongoing-project-mangrove-restoration' },
      { label: 'Our Activities', href: '/our-activities' },
      { label: 'Nature as Infrastructure', href: '/nature-as-infrastructure' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'News', href: '/news' },
      { label: 'Video', href: '/video' },
    ],
  },
  {
    label: 'SDGs Program',
    href: '/sdgs-program',
    children: [
      { label: 'SumatraSIG', href: '/sumatrasig' },
      { label: 'Ecolabels / SPP', href: '/ecolabels-sustainable-public-procurement' },
      { label: 'Microclimate Risk Insurance', href: '/microclimate-risk-insurance' },
      { label: 'Coastal Ecosystem Restoration', href: '/coastal-ecosystem-restoration' },
      { label: 'Cross-border Climate Collaboration', href: '/cross-border-collaboration-for-climate-change-adaptation' },
      { label: 'Disaster Risk Reduction Education', href: '/integrating-disaster-risk-reduction-education-in-aceh' },
      { label: 'Green Health Care Solutions', href: '/green-health-care-solutions' },
      { label: "Hansen's Disease", href: '/hansens-disease' },
      { label: 'Coastal Communities Stewardship', href: '/empowering-coastal-communities-for-sustainable-environmental-stewardship' },
      { label: 'Bungkesmas', href: '/jaminan-penghasilan-aceh-bungkesmas' },
      { label: 'GuruCerdas', href: '/gurucerdas' },
    ],
  },
  {
    label: 'Submit',
    href: '/qris',
    children: [
      { label: 'ISBN', href: '/isbn' },
      { label: 'Article', href: '/article' },
      { label: 'Partnership', href: '/partnership' },
      { label: 'Social Enterprise', href: '/social-enterprise' },
      {
        label: 'Intern',
        href: '/intern',
        children: [
          { label: 'Magang SMK', href: '/magang-smk' },
          { label: 'Magang Mandiri', href: '/magang-mandiri' },
          { label: 'MSIB', href: '/msib' },
          { label: 'Magang Dalam Negeri', href: '/magang-dalam-negeri' },
          { label: 'Magang Umum / Relawan', href: '/magang-umum-relawan' },
        ],
      },
      { label: 'Career', href: '/career' },
    ],
  },
  {
    label: 'Conservation',
    href: '/conservation',
    children: [
      { label: 'Anoa', href: '/anoa' },
      { label: 'Land Restoration', href: '/land-restoration' },
    ],
  },
  {
    label: 'Login',
    href: '/login',
    children: [
      { label: 'Detail Dokumen Online', href: '/detail-dokumen-online' },
    ],
  },
  {
    label: 'Books',
    href: '/books',
    children: [
      { label: '2026', href: '/2026-2' },
      { label: '2025', href: '/2025-2' },
      { label: '2024', href: '/2024-2' },
      { label: '2021', href: '/2021-2' },
      { label: '2020', href: '/2020-2' },
      { label: '2019', href: '/buku2019' },
      { label: '2018', href: '/2018-2' },
      { label: '2017', href: '/2017-2' },
      { label: '2016', href: '/2016-2' },
      { label: '2015', href: '/2015-2' },
      { label: '2014', href: '/2014-2' },
      { label: '2013', href: '/2013-2' },
    ],
  },
];

export const NEWS_TICKER = [
  'Protecting Environmental Defenders, Combating the Criminalization of Activists in Indonesia',
  'Guardians of Aceh: Indigenous Wisdom in the Climate Crisis',
  'Enhancing Community Engagement in Malaria Prevention and Response in Aceh',
  'Strengthening Coastal Digital Resilience: Building Sustainable Internet Communities in Aceh',
  'Climate Action for Youth: Digital Technology for Educating and Empowering Youth in Climate Adaptation',
];

export const PILLARS = [
  {
    num: '01',
    title: 'Restorasi Pesisir & Mangrove',
    desc: 'Pemulihan ekosistem mangrove dan wilayah pesisir Aceh melalui pendekatan berbasis komunitas dan riset lapangan.',
    img: pillarMangroveImg,
  },
  {
    num: '02',
    title: 'Perempuan, Perdamaian & Keamanan',
    desc: 'Program pemberdayaan perempuan Aceh dalam tata kelola sumber daya alam dan perdamaian komunitas.',
    img: 'https://picsum.photos/seed/aceh-women/900/600',
  },
  {
    num: '03',
    title: 'Kearifan Iklim Lokal',
    desc: 'Mendokumentasikan dan mengintegrasikan pengetahuan adat panglima laot ke dalam kebijakan iklim modern.',
    img: 'https://picsum.photos/seed/aceh-climate/900/600',
  },
  {
    num: '04',
    title: 'Teknologi Iklim & SDGs',
    desc: 'Mengembangkan solusi berbasis teknologi untuk mendukung pencapaian Tujuan Pembangunan Berkelanjutan di Aceh.',
    img: 'https://picsum.photos/seed/aceh-sdgs/900/600',
  },
];

export const DISPATCHES = [
  {
    id: 'D01',
    coords: '05°33\'N 95°19\'E — BANDA ACEH',
    date: '28 Okt 2026',
    title: 'Penjaga Aceh: Kearifan Lokal di Tengah Krisis Iklim',
    excerpt: 'Bagaimana panglima laot di pesisir Aceh mempertahankan pengetahuan ekosistem selama berabad‑abad dan mengapa ilmu itu kini menjadi aset terpenting negara.',
    img: 'https://picsum.photos/seed/dispatch-coast/900/600',
    tag: 'Lapangan',
    large: true,
  },
  {
    id: 'D02',
    coords: '06°10\'N 95°30\'E — LANGSA',
    date: '15 Sep 2026',
    title: 'Melindungi Pejuang Lingkungan',
    excerpt: 'Tindakan hukum dan lapangan terhadap kriminalisasi aktivis lingkungan Aceh.',
    img: 'https://picsum.photos/seed/dispatch-forest/600/400',
    tag: 'Advokasi',
  },
  {
    id: 'D03',
    coords: '04°55\'N 95°08\'E — ALUE NAGA',
    date: '02 Agu 2026',
    title: 'Proyek Blue Resilience',
    excerpt: 'Dampak deforestasi mangrove terhadap keanekaragaman hayati laut Aceh.',
    img: 'https://picsum.photos/seed/dispatch-ocean/600/400',
    tag: 'Riset',
  },
  {
    id: 'D04',
    coords: '05°12\'N 95°20\'E — PESISIR ACEH',
    date: '10 Jul 2026',
    title: 'Konservasi Elang Bondol yang Terancam Punah',
    excerpt: 'Pemantauan dan perlindungan situs bersarang elang bondol Aceh.',
    img: 'https://picsum.photos/seed/dispatch-eagle/600/400',
    tag: 'Satwa Liar',
  },
];

export const BOOKS = [
  {
    title: 'Modul Edukasi Mangrove',
    year: '2015',
    img: 'https://picsum.photos/seed/book-mangrove/200/280',
  },
  {
    title: 'Makanan Sehat Berperspektif Iklim',
    year: '2018',
    img: 'https://picsum.photos/seed/book-food/200/280',
  },
  {
    title: 'Panduan Pemulihan Lahan Kering',
    year: '2019',
    img: 'https://picsum.photos/seed/book-land/200/280',
  },
  {
    title: 'Jurnal Hutan Sumatra Vol. I',
    year: '2020',
    img: 'https://picsum.photos/seed/book-forest/200/280',
  },
  {
    title: 'Kearifan Lokal & Perubahan Iklim',
    year: '2022',
    img: 'https://picsum.photos/seed/book-climate/200/280',
  },
  {
    title: 'Atlas Pesisir Aceh 2024',
    year: '2024',
    img: 'https://picsum.photos/seed/book-atlas/200/280',
  },
];

export const FOOTER_UNITS = [
  'Natural Research',
  'Natural Training',
  'Natural Publishing',
  'Natural Akademi',
  'Natural Food',
  'Bungkesmas',
  'UMMA',
  'UMMA POS',
  'STAY FRESH',
  'EDUNESIA',
  'Banda Promosi',
];

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/naturalaceh',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/naturalaceh',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/naturalaceh',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@naturalaceh',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111827"/>
      </svg>
    ),
  },
];
