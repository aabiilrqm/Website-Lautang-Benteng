import React from "react";

export default function KontakPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-24 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest bg-teal-500/20 border border-teal-400/30 px-3 py-1 rounded-full text-teal-300">
            Pusat Informasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4">
            Kontak Kami
          </h1>
          <p className="mt-4 text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hubungi kantor Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang untuk informasi lebih lanjut mengenai layanan kelurahan.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              Kantor Kelurahan
            </h2>

            <div>
              <strong className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                Alamat Lengkap Kantor
              </strong>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">
                Kantor Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang (Sidrap), Provinsi Sulawesi Selatan, Kode Pos 91611.
              </p>
            </div>

            <div>
              <strong className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                Jadwal Operasional Pelayanan
              </strong>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="font-semibold">Senin - Jumat:</span>
                  <span className="text-emerald-600 font-bold dark:text-emerald-400">07:00 - 16:00 WITA</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Sabtu - Minggu:</span>
                  <span className="text-amber-600 font-bold dark:text-amber-400">Tutup / Libur</span>
                </li>
              </ul>
            </div>

            <div>
              <strong className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                Saluran Komunikasi
              </strong>
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span>WA Pelayanan: <strong>0812-3456-7890</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span>Email: <strong>sekretariat@lautangbenteng.kelurahan.id</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Kotak Informasi Peta Wilayah */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white text-center relative overflow-hidden shadow-lg border border-slate-800">
            <h3 className="text-lg font-bold text-emerald-300 mb-2">Panduan Rute Lokasi</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Kantor Kelurahan Lautang Benteng berlokasi strategis di wilayah Kecamatan Maritengngae, Kabupaten Sidenreng Rappang, Sulawesi Selatan. Mudah diakses oleh warga masyarakat maupun pengakses informasi digital.
            </p>
            <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 text-xs text-slate-400 flex-col gap-1">
              <svg className="w-6 h-6 text-amber-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>[ Koordinat GPS: -3.9167, 119.8000 - Maritengngae, Sidrap ]</span>
              <span className="text-[10px] text-emerald-400 font-semibold mt-1">Buka di Google Maps &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
