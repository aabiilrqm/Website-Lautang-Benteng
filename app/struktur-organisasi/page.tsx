import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Struktur Organisasi | Kelurahan Lautang Benteng",
  description:
    "Bagan kepemimpinan dan jajaran pejabat fungsional Pemerintah Kelurahan Lautang Benteng beserta mitra KKN Tematik Inovasi Desa Unhas Gel. 116.",
};

interface Official {
  name: string;
  role: string;
  nip?: string;
  category: "pimpinan" | "staf" | "lembaga";
  bio: string;
}

const officials: Official[] = [
  {
    name: "Andi Farahdiba, S.AP",
    role: "Kepala Kelurahan",
    nip: "19840229 201407 2 001",
    category: "pimpinan",
    bio: "Memimpin pelaksanaan tugas pemerintahan, pembangunan, dan pembinaan kemasyarakatan di wilayah Kelurahan Lautang Benteng.",
  },
  {
    name: "Muhammad Mustaqim, S.Sos",
    role: "Sekretaris Kelurahan",
    nip: "19791222 200604 1 012",
    category: "pimpinan",
    bio: "Mengkoordinasikan urusan administrasi umum, keuangan, kepegawaian, serta perlengkapan kesekretariatan.",
  },
  {
    name: "Masribulan, S.Sos",
    role: "Kasi Pemerintahan",
    nip: "19690316 200701 2 021",
    category: "staf",
    bio: "Menangani administrasi kependudukan, pertahanan wilayah, dan pelayanan masyarakat.",
  },
  {
    name: "Andi Muhammad Karsa, SE",
    role: "Kasi Pembangunan & Pemberdayaan",
    nip: "19800916 2002121 005",
    category: "staf",
    bio: "Menangani urusan pembangunan fisik, ekonomi, dan pemberdayaan masyarakat kelurahan.",
  },
  {
    name: "Adi Nurdin, SH",
    role: "Kasi Tertib dan Linmas",
    nip: "19790829 201001 1 010",
    category: "staf",
    bio: "Menangani urusan ketenteraman, ketertiban umum, dan perlindungan masyarakat (Linmas).",
  },
  {
    name: "Rismawati",
    role: "Staf Sekretariat",
    nip: "19861022 201001 2 001",
    category: "staf",
    bio: "Membantu pelaksanaan tugas-tugas administratif dan pelayanan di kelurahan.",
  },
  {
    name: "Yanti Patong",
    role: "Staf Sekretariat",
    nip: "198213120 252112 1 13",
    category: "staf",
    bio: "Membantu pelaksanaan tugas-tugas administratif dan pelayanan di kelurahan.",
  },
  {
    name: "Triyana Winda",
    role: "Staf Kasi Pemerintahan",
    nip: "20021217 202521 2 012",
    category: "staf",
    bio: "Membantu pelaksanaan tugas-tugas pada Seksi Pemerintahan.",
  },
  {
    name: "Sridanty Jamaluddin",
    role: "Staf Kasi Pembangunan & Pemberdayaan",
    nip: "19940622 202521 2 089",
    category: "staf",
    bio: "Membantu pelaksanaan tugas-tugas pada Seksi Pembangunan dan Pemberdayaan.",
  },
  {
    name: "Hardiyanti Anhar",
    role: "Staf Kasi Tertib dan Linmas",
    nip: "19900930 202521 2 106",
    category: "staf",
    bio: "Membantu pelaksanaan tugas-tugas pada Seksi Tertib dan Linmas.",
  },
  {
    name: "Sertu Roy Tandi",
    role: "Babinsa",
    category: "lembaga",
    bio: "Bintara Pembina Desa yang bertugas melaksanakan pembinaan teritorial di wilayah kelurahan.",
  },
  {
    name: "Aipda Zainuddin",
    role: "Bhabinkamtibmas",
    category: "lembaga",
    bio: "Bhayangkara Pembina Keamanan dan Ketertiban Masyarakat di wilayah kelurahan.",
  },
  {
    name: "Muslimin K",
    role: "Kepala Lingkungan 1",
    category: "lembaga",
    bio: "Membantu Lurah dalam pelaksanaan tugas pemerintahan dan pembinaan kemasyarakatan di Lingkungan 1.",
  },
  {
    name: "Muh Syahwi",
    role: "Kepala Lingkungan 2",
    category: "lembaga",
    bio: "Membantu Lurah dalam pelaksanaan tugas pemerintahan dan pembinaan kemasyarakatan di Lingkungan 2.",
  },
  {
    name: "Muh Tahir",
    role: "Kepala Lingkungan 3",
    category: "lembaga",
    bio: "Membantu Lurah dalam pelaksanaan tugas pemerintahan dan pembinaan kemasyarakatan di Lingkungan 3.",
  },
];

export default function StrukturOrganisasiPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full text-blue-300">
            Pemerintahan & Kelembagaan
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4">
            Struktur Organisasi Kelurahan
          </h1>
          <p className="mt-4 text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Mengenal jajaran kepemimpinan pejabat kelurahan, para kepala seksi, pimpinan kelembagaan, serta mitra dari KKN Tematik Inovasi Desa Unhas Gel. 116 yang bersinergi melayani warga Kelurahan Lautang Benteng, Sidrap.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Pimpinan Utama Section (Lurah & Seklury) */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            Unsur Pimpinan Kelurahan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officials
              .filter((o) => o.category === "pimpinan")
              .map((person) => (
                <div
                  key={person.name}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-emerald-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 shrink-0 flex items-center justify-center text-white font-black text-4xl shadow-inner">
                    {person.name.charAt(0)}
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <span className="text-xs font-bold uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-md mb-2 inline-block">
                      {person.role}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                      {person.name}
                    </h3>
                    {person.nip && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                        NIP: {person.nip}
                      </p>
                    )}
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {person.bio}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Kepala Seksi & Staf */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
            Kepala Seksi & Staf Kelurahan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officials
              .filter((o) => o.category === "staf")
              .map((person) => (
                <div
                  key={person.name}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-2xl shrink-0">
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 block">
                          {person.role}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                          {person.name}
                        </h4>
                      </div>
                    </div>
                    {person.nip && (
                      <p className="text-xs text-slate-400 font-mono mb-3">
                        NIP: {person.nip}
                      </p>
                    )}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Aparatur Kelurahan
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Lembaga Kemasyarakatan Desa/Kelurahan */}
        <div>
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            Lembaga Kemasyarakatan Kelurahan (LKK) & RW/RT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officials
              .filter((o) => o.category === "lembaga")
              .map((person) => (
                <div
                  key={person.name}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-2xl shrink-0">
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 block">
                          {person.role}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                          {person.name}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Mitra Kerja Kelurahan
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
