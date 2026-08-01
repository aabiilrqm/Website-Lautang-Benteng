import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Potensi & UMKM Kelurahan | Kelurahan Lautang Benteng",
  description:
    "Eksplorasi ragam produk unggulan UMKM, kerajinan lokal, pertanian, dan inovasi warga Kelurahan Lautang Benteng, Sidrap bersama KKN Tematik Inovasi Desa Unhas Gel. 116.",
};

export const revalidate = 0;

export default async function PotensiPage() {
  const { data: umkmList, error } = await supabase
    .from("umkm")
    .select("*")
    .order("id", { ascending: true });

  const umkmData = umkmList || [];

  return (
    <div className="bg-white dark:bg-slate-950 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest bg-amber-500/20 border border-amber-400/30 px-3 py-1 rounded-full text-amber-300">
            Ekonomi & Sumber Daya Warga
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4">
            Potensi Unggulan Kelurahan
          </h1>
          <p className="mt-4 text-amber-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Menampilkan kekayaan kreativitas UMKM warga, produk kerajinan, budidaya pertanian, dan program inovasi digital yang didukung oleh KKN Tematik Inovasi Desa Unhas Gel. 116 di Lautang Benteng, Sidrap.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Intro Highlight */}
        <div className="bg-amber-50 dark:bg-slate-900 rounded-3xl p-8 border border-amber-100 dark:border-slate-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Dukung Produk Lokal, Masyarkat Kelurahan Berdaya!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              Seluruh produk yang ditampilkan di bawah ini diproduksi langsung oleh tangan-tangan kreatif warga Kelurahan Lautang Benteng, Kecamatan Maritengngae, Sidenreng Rappang. Pembelian langsung kepada produsen lokal!
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/kontak"
              className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all duration-200 inline-block text-center"
            >
              Daftarkan UMKM Anda Di Sini
            </Link>
          </div>
        </div>

        {/* Peta Sebaran UMKM (Gambar) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800 mb-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                Pemetaan Digital
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                Peta Sebaran UMKM
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm md:text-base max-w-2xl">
                Jelajahi titik lokasi berbagai usaha mikro, kecil, dan menengah (UMKM) serta sentra ekonomi kreatif warga di wilayah Kelurahan Lautang Benteng.
              </p>
            </div>
            <a 
              href="/images/lautang_benteng.jpeg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:hover:bg-blue-900/60 dark:text-blue-300 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
              Perbesar Peta
            </a>
          </div>
          
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-inner group bg-slate-100 dark:bg-slate-950">
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 z-10 pointer-events-none"></div>
            <img
              src="/images/lautang_benteng.jpeg"
              alt="Peta Sebaran UMKM Kelurahan Lautang Benteng"
              className="w-full h-auto max-h-[80vh] object-contain transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>

        {/* Grid Card Potensi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umkmData.length > 0 ? umkmData.map((item: any) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {item.foto ? (
                <div className="h-48 w-full relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img src={item.foto} alt={item.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 shadow-sm z-10">
                    UMKM
                  </span>
                </div>
              ) : (
                <div className="h-36 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-800/50 relative p-6 flex items-end justify-between overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-amber-500/10 transition-transform group-hover:scale-150"></div>
                  <span className={`text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 z-10 shadow-sm`}>
                    UMKM
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                    {item.nama}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 whitespace-pre-wrap">
                    {item.deskripsi || "Belum ada deskripsi"}
                  </p>
                </div>

                <div className="space-y-3 border-t border-slate-200/60 dark:border-slate-800 pt-4 text-xs">
                  {item.jam_buka && (
                    <div className="flex justify-between items-center bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg text-emerald-800 dark:text-emerald-300 font-semibold">
                      <span>Jam Operasional:</span>
                      <span>{item.jam_buka}</span>
                    </div>
                  )}
                  {item.alamat && (
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      <span>{item.alamat}</span>
                    </div>
                  )}
                  {item.cp && (
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{item.cp}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-slate-500 dark:text-slate-400">Belum ada data UMKM yang tersedia.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
