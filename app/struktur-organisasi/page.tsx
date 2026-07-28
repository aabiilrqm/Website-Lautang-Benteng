import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Struktur Organisasi | Kelurahan Nusantara Makmur",
  description:
    "Bagan kepemimpinan dan jajaran pejabat fungsional Pemerintah Kelurahan Nusantara Makmur beserta pengurus RW dan RT.",
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
    name: "Drs. H. Bambang Soetopo, M.Si.",
    role: "Lurah Nusantara Makmur",
    nip: "19720512 199803 1 004",
    category: "pimpinan",
    bio: "Memimpin pelaksanaan tugas pemerintahan, pembangunan, dan pembinaan kemasyarakatan di wilayah Kelurahan.",
  },
  {
    name: "Siti Rahmawati, S.STP.",
    role: "Sekretaris Kelurahan (Sekdes/Seklur)",
    nip: "19851024 200801 2 003",
    category: "pimpinan",
    bio: "Mengkoordinasikan urusan administrasi umum, keuangan, kepepegawaian, serta perlengkapan kesekretariatan.",
  },
  {
    name: "Ir. H. Hendra Gunawan",
    role: "Kasi Pemerintahan & Trantib",
    nip: "19780415 200501 1 008",
    category: "staf",
    bio: "Menangani administrasi kependudukan, pertahanan wilayah, keamanan, dan ketenteraman warga masyarakat.",
  },
  {
    name: "Nurul Aini, S.Sos.",
    role: "Kasi Kesejahteraan Sosial (Kessos)",
    nip: "19830719 201001 2 011",
    category: "staf",
    bio: "Membantu fasilitasi penyaluran bantuan sosial, program puskesmas/posyandu, kepemudaan, serta pendidikan anak.",
  },
  {
    name: "Agus Prakoso, S.Kom.",
    role: "Kasi Pelayanan & Inovasi Digital",
    nip: "19910312 201503 1 002",
    category: "staf",
    bio: "Mengelola loket pelayanan publik surat-menyurat warga serta pengembangan portal online pengaduan masyarakat.",
  },
  {
    name: "H. Mashudi, B.A.",
    role: "Ketua Forum RW & LPMK",
    category: "lembaga",
    bio: "Koordinator perwakilan 15 Rukun Warga dan Lembaga Pemberdayaan Masyarakat Kelurahan Nusantara Makmur.",
  },
  {
    name: "Ibu Hj. Ratmiatun",
    role: "Ketua Tim Penggerak PKK Kelurahan",
    category: "lembaga",
    bio: "Menggerakkan 10 program pokok PKK guna membina keluhuran keluarga dan kewirausahaan kaum ibu di desa/kelurahan.",
  },
  {
    name: "Kapten (Purn) Sudarmadi",
    role: "Komandan Linmas & Satgas Bencana",
    category: "lembaga",
    bio: "Menjaga kesiapsiagaan lingkungan, keamanan malam, serta penanggulangan siaga tangkap banjir/bencana wilayah.",
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
            Mengenal jajaran kepemimpinan pejabat kelurahan, para kepala seksi, dan pimpinan lembaga swadaya masyarakat yang bersinergi melayani warga Nusantara Makmur.
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

        {/* Kepala Seksi & Pelayanan */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
            Kepala Seksi & Pelayanan Teknis
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
                      Seksi Pemerintahan & Pelayan
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
