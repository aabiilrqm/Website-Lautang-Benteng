import React from "react";

export default function KontakPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-24 min-h-screen">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-slate-300">
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
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>WA Pelayanan: <strong>0812-3456-7890</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>Email: <strong>sekretariat@lautangbenteng.kelurahan.id</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Kotak Informasi Peta Wilayah */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 relative overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-800 dark:text-emerald-300 mb-2">Panduan Rute Lokasi</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Kantor Kelurahan Lautang Benteng berlokasi strategis di wilayah Kecamatan Maritengngae, Kabupaten Sidenreng Rappang. Silakan gunakan peta di bawah ini sebagai panduan arah.
            </p>
            
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-700 relative shadow-inner group">
              <iframe 
                src="https://maps.google.com/maps?q=Kantor%20Lurah%20Lautang%20Benteng,%20Sidenreng%20Rappang&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-4 flex justify-end">
              <a 
                href="https://maps.app.goo.gl/jmeQ7ELkvwxnT5PfA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold transition-colors"
              >
                <span>Buka di Aplikasi Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
