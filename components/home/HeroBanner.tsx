import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 min-h-[580px] lg:min-h-[660px] flex flex-col justify-between">
      {/* Background Banner Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sawah.jpg"
          alt="Banner Panorama Kelurahan Lautang Benteng"
          fill
          priority
          className="object-cover object-center scale-105 animate-[pulse_15s_ease-in-out_infinite_alternate]"
        />
        {/* Deep architectural overlay gradients for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-transparent to-slate-900/60"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 my-auto flex flex-col items-start text-left">
        {/* Badge / Motto */}
        <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Portal Resmi & Layanan Digital | KKN Tematik Inovasi Desa Unhas Gel. 116</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl drop-shadow-sm">
          Selamat Datang di Portal Resmi <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Kelurahan Lautang Benteng
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed text-balance drop-shadow-sm">
          Selamat datang di website resmi Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang (Sidrap), Sulawesi Selatan. Mewujudkan tata kelola pemerintahan yang cepat, transparan, dan akuntabel bersama KKN Tematik Inovasi Desa Universitas Hasanuddin Gelombang 116.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 w-full sm:w-auto">
          <Link
            href="/profil"
            className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/40 hover:shadow-emerald-600/60 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Jelajahi Profil Kelurahan</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <Link
            href="/kontak"
            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200 flex items-center justify-center text-center"
          >
            Kontak Kami
          </Link>
        </div>
      </div>

      {/* Floating Statistics Bottom Bar */}
      <div className="relative z-10 bg-slate-900/80 border-t border-slate-800/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center md:text-left">

            <div className="flex flex-col md:flex-row items-center gap-3 pt-4 md:pt-0 first:pt-0">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <span className="block font-black text-2xl lg:text-3xl text-white">6.027</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Penduduk (Jiwa)</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 md:pl-8 pt-4 md:pt-0">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <span className="block font-black text-2xl lg:text-3xl text-white">4,8 km²</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Luas Wilayah</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 md:pl-8 pt-4 md:pt-0">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <span className="block font-black text-xl lg:text-2xl text-white">3.006 L / 3.021 P</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Rincian Gender</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
