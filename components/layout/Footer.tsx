import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Kolom 1: Informasi Kelurahan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                <img src="/images/sidrap.png" alt="Logo Sidrap" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg tracking-tight leading-tight">
                  Kelurahan Lautang Benteng
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Kec. Maritengngae, Kab. Sidrap
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Portal resmi Pemerintah Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang, Sulawesi Selatan. Berkomitmen memberikan pelayanan publik yang cepat, transparan, dan inovatif.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                <img src="/images/logo_kkn_f.png" alt="Logo KKN" className="w-full h-full object-contain" />
              </div>
              <span className="inline-block bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-xs px-2.5 py-1.5 rounded-md font-semibold leading-tight">
                Inisiatif KKN Tematik<br />Inovasi Desa Unhas Gel. 116
              </span>
            </div>
          </div>

          {/* Kolom 2: Tautan Pintasan */}
          <div>
            <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2 mb-4 flex items-center justify-between">
              <span>Menu Navigasi</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  Beranda (Landing Page)
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  Profil & Sejarah Kelurahan
                </Link>
              </li>
              <li>
                <Link href="/struktur-organisasi" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  Struktur Organisasi Pemerintahan
                </Link>
              </li>
              <li>
                <Link href="/potensi" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  Potensi Kelurahan & UMKM
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  Berita & Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Jam Pelayanan */}
          <div>
            <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2 mb-4 flex items-center justify-between">
              <span>Jam Operasional Kantor</span>
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex justify-between pb-2 border-b border-slate-800/60">
                <span className="font-medium text-slate-300">Senin - Kamis</span>
                <span className="text-emerald-400 font-semibold">08:00 - 16:30 WITA</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800/60">
                <span className="font-medium text-slate-300">Senin - Jumat</span>
                <span className="text-emerald-400 font-semibold">08:00 - 17:00 WITA</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-300">Sabtu & Minggu</span>
                <span className="text-amber-500 font-semibold">Tutup / Libur</span>
              </div>
            </div>
          </div>

          {/* Kolom 4: Kontak Informasi */}
          <div>
            <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2 mb-4 flex items-center justify-between">
              <span>Hubungi Kami</span>
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-slate-800 text-emerald-400 shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <strong className="text-slate-200 block">Alamat Kantor</strong>
                  <span>Kantor Kelurahan Lautang Benteng, Kec. Maritengngae, Kab. Sidenreng Rappang, Sulawesi Selatan, Kode Pos 91611</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-slate-800 text-emerald-400 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <strong className="text-slate-200 block">Telepon & WhatsApp</strong>
                  <span>(0421) 921-123 / 0812-3456-7890</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-slate-800 text-emerald-400 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <strong className="text-slate-200 block">Email Resmi</strong>
                  <span>sekretariat@lautangbenteng.kelurahan.id</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Garis Bawah & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-slate-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} Pemerintah Kelurahan Lautang Benteng. Dipersembahkan oleh KKN Tematik Inovasi Desa Universitas Hasanuddin Gelombang 116.
          </p>
        </div>
      </div>
    </footer>
  );
}
