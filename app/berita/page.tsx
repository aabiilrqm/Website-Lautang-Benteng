import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita & Kegiatan | Kelurahan Lautang Benteng",
  description:
    "Dokumentasi dan publikasi kegiatan yang terlaksana di Kelurahan Lautang Benteng, Kecamatan Maritengngae, Sidenreng Rappang.",
};

// Interface untuk data mock berita/kegiatan
interface Berita {
  id: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  foto: string;
  kategori: string;
}

// Data mock sementara (Template)
const mockBerita: Berita[] = [
  {
    id: "1",
    judul: "Kerja Bakti Bersama Warga dan Mahasiswa KKN",
    deskripsi: "Kegiatan gotong royong membersihkan saluran air dan area fasilitas umum di Kelurahan Lautang Benteng, diikuti oleh perangkat kelurahan, warga, serta mahasiswa KKN Tematik Inovasi Desa Unhas.",
    tanggal: "12 Agustus 2026",
    foto: "", // Kosongkan sesuai permintaan
    kategori: "Sosial & Lingkungan",
  },
  {
    id: "2",
    judul: "Penyaluran Bantuan Sosial untuk Keluarga Pra-Sejahtera",
    deskripsi: "Ibu Lurah Lautang Benteng secara langsung menyerahkan bantuan sembako kepada warga yang membutuhkan. Program ini merupakan sinergi dengan pemerintah daerah Kabupaten Sidrap.",
    tanggal: "05 Agustus 2026",
    foto: "",
    kategori: "Kesejahteraan",
  },
  {
    id: "3",
    judul: "Pelatihan Digital Marketing bagi Pelaku UMKM",
    deskripsi: "Mahasiswa KKN Unhas Gelombang 116 mengadakan pelatihan pemasaran digital. Tujuannya agar produk unggulan UMKM Lautang Benteng dapat menjangkau pasar yang lebih luas melalui internet.",
    tanggal: "28 Juli 2026",
    foto: "",
    kategori: "Pemberdayaan",
  },
  {
    id: "4",
    judul: "Rapat Koordinasi Persiapan Hari Kemerdekaan",
    deskripsi: "Perangkat kelurahan beserta tokoh masyarakat, RT/RW, dan pemuda-pemudi karang taruna mengadakan rapat untuk menyusun agenda perlombaan 17 Agustus tingkat kelurahan.",
    tanggal: "20 Juli 2026",
    foto: "",
    kategori: "Pemerintahan",
  }
];

export default function BeritaPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-pink-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center sm:text-left relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest bg-rose-500/20 border border-rose-400/30 px-3 py-1 rounded-full text-rose-300 shadow-sm">
            Publikasi & Dokumentasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight drop-shadow-sm">
            Berita & Kegiatan Kelurahan
          </h1>
          <p className="mt-4 text-rose-100 text-base sm:text-lg max-w-2xl leading-relaxed drop-shadow-sm">
            Rekam jejak, agenda penting, dan dokumentasi berbagai kegiatan yang telah terlaksana serta dihadiri oleh jajaran Pemerintah Kelurahan Lautang Benteng.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Info Alert untuk Template */}
        <div className="mb-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
          <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-lg text-blue-600 dark:text-blue-400 shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm">Halaman Template (Mock Data)</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400 mt-1 leading-relaxed">
              Ini adalah tampilan sementara. Nantinya, daftar berita dan kegiatan ini dapat dikelola (ditambah/diedit) langsung oleh admin kelurahan melalui dashboard khusus yang terpisah.
            </p>
          </div>
        </div>

        {/* Berita Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockBerita.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group flex flex-col"
            >
              {/* Bagian Foto */}
              <div className="relative h-56 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                {item.foto ? (
                  <img 
                    src={item.foto} 
                    alt={item.judul} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center relative">
                    {/* Placeholder dekorasi */}
                    <svg className="w-16 h-16 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Tanpa Foto</span>
                  </div>
                )}
                
                {/* Badge Kategori - Melayang di atas foto */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rose-600 dark:text-rose-400 shadow-sm border border-white/20 dark:border-slate-700/50">
                  {item.kategori}
                </div>
              </div>

              {/* Bagian Konten Teks */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                {/* Tanggal */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>{item.tanggal}</span>
                </div>

                {/* Judul */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {item.judul}
                </h2>

                {/* Deskripsi */}
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed flex-1">
                  {item.deskripsi}
                </p>

                {/* Tombol Aksi (Opsional, untuk masa depan jika ada halaman detail) */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button className="text-sm font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 group/btn hover:text-rose-700 dark:hover:text-rose-300 transition-colors">
                    Baca Selengkapnya
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
