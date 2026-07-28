"use client";

import React, { useState } from "react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    noHp: "",
    kategori: "Pengantar RT/RW & Domisili",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman data layanan aspirasi warga
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nama: "",
        nik: "",
        noHp: "",
        kategori: "Pengantar RT/RW & Domisili",
        pesan: "",
      });
    }, 5000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest bg-teal-500/20 border border-teal-400/30 px-3 py-1 rounded-full text-teal-300">
            Pusat Pelayanan & Komuniksi
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4">
            Kontak & Pengaduan Online Warga
          </h1>
          <p className="mt-4 text-teal-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Hubungi kantor Kelurahan Nusantara Makmur untuk jadwal pelayanan tatap muka atau gunakan formulir aspirasi online 24 jam di bawah ini.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Kolom Kiri: Informasi Alamat & Jadwal */}
          <div className="lg:col-span-5 space-y-8">
            
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
                  Jalan Garuda Nusantara No. 45, RT 01 / RW 01, Kelurahan Nusantara Makmur, Kecamatan Makmur Raya, Kota Makmur, Kode Pos 50123.
                </p>
              </div>

              <div>
                <strong className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  Jadwal Operasional Pelayan
                </strong>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="font-semibold">Senin - Kamis:</span>
                    <span className="text-emerald-600 font-bold dark:text-emerald-400">08:00 - 15:30 WIB</span>
                  </li>
                  <li className="flex justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="font-semibold">Jumat:</span>
                    <span className="text-emerald-600 font-bold dark:text-emerald-400">08:00 - 14:30 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Sabtu - Minggu:</span>
                    <span className="text-amber-600 font-bold dark:text-amber-400">Tutup (Layanan Online 24 J)</span>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  Saluran Komuniksi
                </strong>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span>WA Pelayanan: <strong>0812-3456-7890</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span>Email: <strong>sekretariat@nusantaramakmur.desa.id</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kotak Informasi Peta Wilayah */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white text-center relative overflow-hidden shadow-lg border border-slate-800">
              <h3 className="text-lg font-bold text-emerald-300 mb-2">Panduan Rute Lokasi</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Kantor Kelurahan Nusantara Makmur terletak persis di seberang Lapangan Alun-Alun Garuda, 200 meter dari Kantor Pos Kecamatan Makmur Raya.
              </p>
              <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 text-xs text-slate-400 flex-col gap-1">
                <svg className="w-6 h-6 text-amber-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>[ Koordinat GPS: -6.912345, 110.456789 ]</span>
                <span className="text-[10px] text-emerald-400 font-semibold mt-1">Buka di Google Maps &rarr;</span>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Formulir Pengaduan / Aspirasi Online */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Formulir Aspirasi & Layanan Online
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Silakan ajukan permohonan surat keterangan, pengaduan fasilitas umum, atau saran pengembangan kepada Pemerintah Kelurahan. Data Anda dilindungi undang-undang.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 dark:bg-emerald-950/70 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-sm flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <div>
                    <strong className="font-bold block">Aspirasi Berhasil Dikirim!</strong>
                    <span>Terima kasih. Laporan/permohonan Anda telah dicatat dalam sistem sekretariat kelurahan dan akan ditindaklanjuti oleh petugas loket dalam waktu 1x24 jam.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Nama Lengkap (Sesuai KTP) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Nomor Induk Kependudukan (NIK) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="16 digit NIK KTP Anda"
                      maxLength={16}
                      value={formData.nik}
                      onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Nomor WhatsApp / HP Aktif <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxx (Untuk konfirmasi)"
                      value={formData.noHp}
                      onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Kategori Layanan / Laporan
                    </label>
                    <select
                      value={formData.kategori}
                      onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option value="Pengantar RT/RW & Domisili">Permohonan Surat Domisili / Usaha</option>
                      <option value="Pengaduan Infrastruktur">Pengaduan Infrastruktur / Jalan Rusak</option>
                      <option value="Kebersihan & Lingkungan">Laporan Kebersihan & Sampah</option>
                      <option value="Administrasi Kependudukan">Konsultasi KTP / KK / Akta Lahir</option>
                      <option value="Aspirasi & Saran Warga">Aspirasi & Saran Pembangunan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Detail Pesan atau Rincian Permohonan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tuliskan keterangan lengkap mengenai permohonan surat yang Anda butuhkan atau kronologi pengaduan fasilitas yang ingin dilaporkan..."
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                  >
                    <span>Kirim Laporan / Permohonan Sekarang</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
