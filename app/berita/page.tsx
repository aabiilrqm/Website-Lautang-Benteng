import React from "react";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Berita & Kegiatan | Kelurahan Lautang Benteng",
  description:
    "Dokumentasi dan publikasi kegiatan yang terlaksana di Kelurahan Lautang Benteng, Kecamatan Maritengngae, Sidenreng Rappang.",
};

export const revalidate = 0;

interface Berita {
  id: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  foto: string | null;
  kategori: string;
}

export default async function BeritaPage() {
  const { data, error } = await supabase
    .from("berita")
    .select("*")
    .order("id", { ascending: true });

  const beritaList: Berita[] = data || [];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center sm:text-left relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-slate-300 shadow-sm">
            Publikasi & Dokumentasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight drop-shadow-sm">
            Berita & Kegiatan Kelurahan
          </h1>
          <p className="mt-4 text-white text-base sm:text-lg max-w-2xl leading-relaxed drop-shadow-sm">
            Rekam jejak, agenda penting, dan dokumentasi berbagai kegiatan yang telah terlaksana serta dihadiri oleh jajaran Pemerintah Kelurahan Lautang Benteng.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Berita Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {beritaList.length > 0 ? (
            beritaList.map((item) => (
              <div 
                key={item.id} 
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group flex flex-col"
              >
                {/* Bagian Foto */}
                <div className="relative h-56 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  {item.foto ? (
                    <img 
                      src={item.foto.trim()} 
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
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-300 shadow-sm border border-white/20 dark:border-slate-700/50">
                    {item.kategori}
                  </div>
                </div>

                {/* Bagian Konten Teks */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Tanggal */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>{item.tanggal}</span>
                  </div>

                  {/* Judul */}
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.judul}
                  </h2>

                  {/* Deskripsi */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed flex-1 whitespace-pre-wrap">
                    {item.deskripsi}
                  </p>


                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">Belum ada berita</h3>
              <p className="text-slate-500 mt-2">Daftar berita dan kegiatan akan segera ditambahkan.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
