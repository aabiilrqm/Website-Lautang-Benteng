import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Potensi & UMKM Kelurahan | Kelurahan Lautang Benteng",
  description:
    "Eksplorasi ragam produk unggulan UMKM, kerajinan lokal, pertanian, dan inovasi warga Kelurahan Lautang Benteng, Sidrap bersama KKN Tematik Inovasi Desa Unhas Gel. 116.",
};

interface PotensiItem {
  title: string;
  category: "UMKM & Kuliner" | "Kerajinan Lokal" | "Pertanian & Wisata" | "Teknologi & Jasa";
  description: string;
  contact: string;
  location: string;
  badgeColor: string;
  price?: string;
}

const potensiList: PotensiItem[] = [
  {
    title: "Keripik Pisang & Olahan Kuliner Khas Sidrap",
    category: "UMKM & Kuliner",
    description:
      "Produk camilan keripik renyah gurih bersertifikasi Halal yang diproduksi oleh kelompok UMKM dan Ibu-ibu PKK di lingkungan Kelurahan Lautang Benteng.",
    contact: "0812-9876-5432 (Ibu Wulandari - UMKM)",
    location: "Sentra Kuliner Lautang Benteng",
    price: "Mulai Rp 15.000 / bungkus",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  },
  {
    title: "Kerajinan Tenun & Busana Tradisional Sulsel",
    category: "Kerajinan Lokal",
    description:
      "Kerajinan kain tenun dan busana khas Sulawesi Selatan yang dikerjakan oleh para pengrajin lokal berbakat di wilayah Kelurahan Lautang Benteng, Sidrap.",
    contact: "0813-8877-6655 (Sanggar Kerajinan)",
    location: "Jl. Permukiman Warga RW 03",
    price: "Rp 180.000 - Rp 650.000 / lembar",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
  },
  {
    title: "Taman Hidroponik & Kebun Sayur Organik",
    category: "Pertanian & Wisata",
    description:
      "Kawasan budidaya sayuran selada, pakcoy, dan melon premium bebas pestisida di pekarangan hijau warga yang juga dibuka sebagai sarana wisata edukasi pertanian anak.",
    contact: "0852-3344-5566 (Kang Ridwan - Kelompok Tani)",
    location: "Greenhouse Kampung Inovasi RW 02",
    price: "Sayur segar mulai Rp 10.000 / 250gr",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    title: "Kerajinan Anyaman Bambu & Rotan Rumah",
    category: "Kerajinan Lokal",
    description:
      "Pembuatan kursi taman, tempat buah, tudung saji, dan lampu hias estetik berbahan dasar bambu tali pilihan yang telah dipasarkan hingga ke hotel dan kafe luar kota.",
    contact: "0815-7788-9900 (Bapak Surip)",
    location: "Bengkel Bambu Indah RT 03 / RW 09",
    price: "Rp 35.000 - Rp 1.200.000",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
  },
  {
    title: "Produk Olahan Pertanian & Kopi Sidrap",
    category: "UMKM & Kuliner",
    description:
      "Olahan hasil bumi dan bubuk kopi khas yang diproses dari panen perkebunan masyarakat Kabupaten Sidenreng Rappang dengan cita rasa autentik dan berkualitas.",
    contact: "0819-2233-4455 (Mitra Tani Warga)",
    location: "Kios UMKM Kelurahan Lautang Benteng",
    price: "Rp 25.000 / 200gr",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  },
  {
    title: "Bank Sampah Induk 'Bersih Sejahtera'",
    category: "Teknologi & Jasa",
    description:
      "Inisiatif pengelolaan daur ulang sampah kering warga menjadi produk pupuk kompos organik serta tabungan emas/uang bagi keluarga anggota kelurahan yang aktif.",
    contact: "0811-2233-0099 (Sekretariat Bank Sampah)",
    location: "Balai Warga Lautang Benteng (Binaan KKN Unhas)",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  },
];

export default function PotensiPage() {
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

        {/* Grid Card Potensi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {potensiList.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Illustration Top Pattern */}
              <div className="h-36 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-800/50 relative p-6 flex items-end justify-between overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-amber-500/10 transition-transform group-hover:scale-150"></div>
                <span className={`text-[11px] font-bold uppercase px-3 py-1 rounded-full ${item.badgeColor} z-10 shadow-sm`}>
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 border-t border-slate-200/60 dark:border-slate-800 pt-4 text-xs">
                  {item.price && (
                    <div className="flex justify-between items-center bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg text-emerald-800 dark:text-emerald-300 font-semibold">
                      <span>Harga Estimasi:</span>
                      <span>{item.price}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{item.contact}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
