import React from "react";
import Link from "next/link";

interface FeatureItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge: string;
  color: string;
}

export default function FeatureCards() {
  const features: FeatureItem[] = [
    {
      title: "Profil Kelurahan",
      description:
        "Pelajari lebih dalam mengenai visi & misi, sejarah singkat berdirinya kelurahan, kondisi geografis, serta peta wilayah Nusantara Makmur.",
      href: "/profil",
      badge: "Informasi Wilayah",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/20",
      icon: (
        <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      title: "Struktur Organisasi",
      description:
        "Kenali jajaran pejabat pemerintahan kelurahan mulai dari Lurah, Sekretaria kelurahan, para Kasi pelayanan dan pemerintahan, hingga Ketua RW/RT.",
      href: "/struktur-organisasi",
      badge: "Pemerintahan",
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-500/20",
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Potensi Kelurahan",
      description:
        "Eksplorasi ragam keunggulan wilayah, mulai dari sentra UMKM warga, produk kerajinan tangan lokal, sektor pertanian organik, hingga pariwisata.",
      href: "/potensi",
      badge: "Ekonomi & Budaya",
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-500/20",
      icon: (
        <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Kontak & Layanan Warga",
      description:
        "Dapatkan informasi alamat resmi, jam kerja kantor, kontak WhatsApp pelayanan darurat, serta fasilitas penyampaian aspirasi dan pengaduan online.",
      href: "/kontak",
      badge: "Pelayanan Publik",
      color: "from-teal-500/10 to-emerald-500/10 text-teal-600 border-teal-500/20",
      icon: (
        <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1.5 rounded-full inline-block mb-3">
            Menu Utama Kelurahan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Pelayanan & Informasi Terpadu
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Sistem portal informasi kelurahan interaktif yang dirancang untuk memudahkan warga dalam mengakses layanan administratif, struktur pemerintahan, dan publikasi daerah.
          </p>
        </div>

        {/* 4 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} border shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action link indicator */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Buka Halaman {item.title}</span>
                <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Announcement Section (Bonus value for realism & aesthetics) */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase bg-amber-400 text-slate-900 px-3 py-1 rounded-full inline-block mb-3 shadow">
                Informasi Penting
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Layanan Pelaporan & Aspirasi Warga 24 Jam
              </h3>
              <p className="mt-2 text-emerald-100 text-sm sm:text-base">
                Anda ingin mengajukan pembuatan surat pengantar RT/RW, surat keterangan domisili, atau melaporkan kendala fasilitas umum? Gunakan fitur formulir online kami tanpa harus berantre di kantor.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/kontak"
                className="inline-block px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-base shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Ajukan Pengaduan Sekarang
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
