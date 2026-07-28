import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil & Sejarah | Kelurahan Lautang Benteng",
  description:
    "Mengenai visi misi, sejarah singkat, kondisi geografis, dan demografi kependudukan Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang (Sidrap), Sulawesi Selatan.",
};

export default function ProfilPage() {
  return (
    <div className="bg-white dark:bg-slate-950 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full text-emerald-300">
            Tentang Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4">
            Profil Kelurahan Lautang Benteng
          </h1>
          <p className="mt-4 text-emerald-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Mengenal lebih dekat visi misi, kondisi kemasyarakatan, serta demografi Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang, Sulawesi Selatan.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Visi & Misi */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-md shadow-emerald-500/20">
                V
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Visi Kelurahan
              </h2>
              <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed italic text-lg">
                &ldquo;Terwujudnya Pelayanan Prima menuju Masyarakat Kelurahan Lautang Benteng yang Sejahtera, Religius, Bersih, Berbudaya, dan Berbasis Inovasi Digital.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              Pemerintah Kelurahan Lautang Benteng & KKN Unhas Gel. 116
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-md shadow-teal-600/20">
              M
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Misi Kelurahan
            </h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <span>Meningkatkan kualitas tata kelola pemerintahan yang transparan, profesional, dan ramah terhadap warga.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <span>Mendorong pemberdayaan ekonomi masyarakat berbasis UMKM dan inovasi digital pedesaan/kelurahan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <span>Meningkatkan pembangunan infrastruktur lingkungan dan pemeliharaan ketertiban umum yang partisipatif.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <span>Memperkuat kerukunan antar warga melalui kegiatan kepemudaan, keagamaan, dan kelestarian budaya lokal.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sejarah Singkat */}
        <section className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-2.5 h-8 bg-emerald-600 rounded-full"></span>
            Sejarah Singkat Kelurahan
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-justify sm:text-left">
            <p>
              <strong>Kelurahan Lautang Benteng</strong> merupakan salah satu kelurahan yang terletak di wilayah Kecamatan Maritengngae, Kabupaten Sidenreng Rappang (Sidrap), Provinsi Sulawesi Selatan. Wilayah ini memiliki peran strategis sebagai bagian dari pusat aktivitas keagamaan, sosial bermasyarat, serta kegiatan ekonomi masyarakat di Kabupaten Sidrap.
            </p>
            <p>
              Dengan kekayaan nilai budaya kearifan lokal Sulawesi Selatan serta kerukunan masyarakat yang teguh, Kelurahan Lautang Benteng terus bertumbuh menjadi lingkungan yang nyaman, aman, dan berdaya saing dari segi tata kelola maupun UMKM.
            </p>
            <p>
              Sebagai langkah nyata dalam percepatan transformasi digital dan optimalisasi pelayanan masyarakat, pada tahun 2026 Pemerintah Kelurahan Lautang Benteng bersinergi bersama <strong>KKN Tematik Inovasi Desa Universitas Hasanuddin (Unhas) Gelombang 116</strong> menghadirkan sistem portal informasi dan layanan publik interaktif berbasis website ini guna memudahkan aksesibilitas warga.
            </p>
          </div>
        </section>

        {/* Kondisi Demografi & Wilayah */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center sm:text-left flex items-center gap-3">
            <span className="w-2.5 h-8 bg-amber-500 rounded-full"></span>
            Demografi & Kondisi Geografis
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">12.450</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Jiwa Total Penduduk</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">3.820</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Kepala Keluarga (KK)</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400">15</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Rukun Warga (RW)</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-amber-500 dark:text-amber-400">64</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Rukun Tetangga (RT)</span>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-slate-900 to-emerald-950 p-8 rounded-3xl text-white shadow-md">
            <h3 className="text-xl font-bold mb-4 text-emerald-300">Batas Wilayah Kelurahan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <strong className="text-amber-300 block mb-1">Sebelah Utara</strong>
                <span>Kelurahan / Desa Tetangga Kec. Maritengngae</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <strong className="text-amber-300 block mb-1">Sebelah Selatan</strong>
                <span>Wilayah Administrasi Kec. Maritengngae</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <strong className="text-amber-300 block mb-1">Sebelah Timur</strong>
                <span>Kawasan Permukiman & Sawah Warga</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <strong className="text-amber-300 block mb-1">Sebelah Barat</strong>
                <span>Jalan Akses Menuju Pusat Kota Pangkajene (Sidrap)</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
