import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil & Sejarah | Kelurahan Lautang Benteng",
  description:
    "Mengenai visi misi, sejarah singkat, kondisi geografis, dan demografi kependudukan Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang (Sidrap), Sulawesi Selatan.",
};

export default function ProfilPage() {
  return (
    <div className="bg-white dark:bg-slate-950 pb-20">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-slate-300">
            Tentang Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4">
            Profil Kelurahan Lautang Benteng
          </h1>
          <p className="mt-4 text-emerald-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Mengenal lebih dekat visi misi, kondisi kemasyarakatan, serta demografi Kelurahan Lautang Benteng, Kecamatan Maritengngae, Kabupaten Sidenreng Rappang, Sulawesi Selatan.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">

        {/* Visi & Misi */}
        <section className="grid grid-cols-1 gap-8">
          {/* Visi */}
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-emerald-500/20 shrink-0">
                  V
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Visi Kabupaten Sidenreng Rappang
                </h2>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-emerald-800 dark:text-emerald-400 mb-6 text-center leading-tight">
                &ldquo;SIDENRENG RAPPANG MAJU DAN SEJAHTERA&rdquo;
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-emerald-100 dark:border-slate-800 shadow-sm">
                  <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-500 mb-3 border-b border-emerald-100 dark:border-slate-800 pb-2">MAJU</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    Merujuk pada Upaya untuk memajukan Pembangunan Daerah melalui berbagai Aspek Kehidupan di Kabupaten Sidenreng Rappang baik secara Ekonomi, Sosial dan Budaya.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-emerald-100 dark:border-slate-800 shadow-sm">
                  <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-500 mb-3 border-b border-emerald-100 dark:border-slate-800 pb-2">SEJAHTERA</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    Menggambarkan Cita-cita untuk meningkatkan kualitas hidup Masyarakat Sidenreng Rappang secara menyeluruh melalui terciptanya kesejahteraan Masyarakat secara Lahir dan Batin, Memperoleh rasa aman dalam menjalani kehidupan sesuai dengan standar hidup yang layak, yang diindikasikan dengan meningkatnya pendapatan Masyarakat, menurunkan angka kemiskinan serta meningkatnya keterjangkauan Pelayanan Masyarakat dalam memenuhi kebutuhan dasarnya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-teal-600/20 shrink-0">
                M
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                Misi Kabupaten Sidenreng Rappang
              </h2>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <span className="leading-relaxed">Membangun Struktur Perekonomian Daerah yang kuat melalui percepatan pengembangan Agrobisnis menuju Agroindustri pada sektor Pertanian, Perkebunan, Peternakan dan Perikanan.</span>
              </li>
              <li className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <span className="leading-relaxed">Mewujudkan Kesejahteraan Masyarakat dengan memperluas kesempatan berusaha, menciptakan Lapangan kerja dan perlindungan Sosial yang Adaptif.</span>
              </li>
              <li className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <span className="leading-relaxed">Mengembangkan Kualitas Sumber Daya Manusia yang Inklusif untuk mewujudkan Pendidikan Unggul dan Kesehatan untuk semua.</span>
              </li>
              <li className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <span className="leading-relaxed">Mewujudkan Pengelolaan Sumber Daya Alam dan Lingkungan yang berkelanjutan.</span>
              </li>
              <li className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                <span className="leading-relaxed">Mewujudkan Kehidupan Sosial Kemasyarakatan yang Kondusif, Berbudaya, Beradat dan Religius.</span>
              </li>
              <li className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">6</span>
                <span className="leading-relaxed">Meningkatkan Tata Kelola Pemerintahan yang Efektif, Transparan, Akuntabel dan Inovatif melalui Pemanfaatan Teknologi Informasi Digital.</span>
              </li>
              <li className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 md:col-span-2">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">7</span>
                <span className="leading-relaxed">Mengembangkan Infrastruktur yang Merata dan Berkualitas untuk Mendukung Pertumbuhan Ekonomi serta Meningkatkan Kualitas Hidup Masyarakat.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sejarah Singkat */}
        <section className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-2.5 h-8 bg-emerald-600 rounded-full"></span>
            Penjelasan Singkat Kelurahan
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-justify sm:text-left">
            <p>
              Secara geografis, wilayah ini menghubungkan antara Kelurahan Lautang Benteng dan Desa Tanete. Posisi strategis ini dimanfaatkan untuk terus berupaya meningkatkan kualitas permukiman perdesaan serta mendorong pertumbuhan ekonomi di wilayah tersebut.
            </p>
            <p>
              Kelurahan Lautang Benteng memiliki total penduduk sebanyak 6.027 jiwa dengan kondisi sosial ekonomi masyarakat yang baik. Hal ini secara langsung turut mendorong pertumbuhan ekonomi dan tingkat kesejahteraan masyarakat secara umum.
            </p>
            <p>
              Pemerintah setempat juga terus membangun dan meningkatkan infrastruktur yang lebih baik, seperti akses jalan dan jembatan. Infrastruktur ini menghubungkan kelurahan dan memfasilitasi mobilitas masyarakat, yang pada akhirnya menunjang kelancaran distribusi hasil pertanian maupun produk UMKM lainnya.
            </p>
          </div>
        </section>

        {/* Kondisi Demografi & Wilayah */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center sm:text-left flex items-center gap-3">
            <span className="w-2.5 h-8 bg-amber-500 rounded-full"></span>
            Demografi & Kondisi Geografis
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center flex flex-col justify-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">6.027</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Total Penduduk (Jiwa)</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center flex flex-col justify-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">3</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Lingkungan / Dusun</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center flex flex-col justify-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400">6</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Rukun Warga (RW)</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-center flex flex-col justify-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-amber-500 dark:text-amber-400">7</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 block">Rukun Tetangga (RT)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Luas Wilayah */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Data Luas Wilayah
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  <li className="flex justify-between items-center py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                    <span className="font-medium">Luas Total</span>
                    <span className="font-bold text-slate-800 dark:text-white">557,15 Ha</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                    <span className="pl-4 text-slate-500 dark:text-slate-400">- Luas Wilayah Efektif</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">480 Ha</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                    <span className="pl-4 text-slate-500 dark:text-slate-400">- Sawah / Pertanian</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">432,5 Ha</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                    <span className="pl-4 text-slate-500 dark:text-slate-400">- Pemukiman & Perkantoran</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">47,25 Ha</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                    <span className="pl-4 text-slate-500 dark:text-slate-400">- Perkebunan</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">0,6 Ha</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-between">
                <span className="font-medium text-emerald-800 dark:text-emerald-300">Kepadatan Penduduk</span>
                <div className="text-right">
                  <span className="block font-bold text-emerald-700 dark:text-emerald-400 text-lg">10,80 Jiwa/Ha</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-500">Klasifikasi: Rendah</span>
                </div>
              </div>
            </div>

            {/* Batas Wilayah */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-md flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6 text-amber-400 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                Batas Wilayah
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors hover:bg-white/10">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 font-bold text-amber-400 text-lg border border-slate-700">U</div>
                  <div>
                    <strong className="text-slate-400 block mb-0.5 text-xs uppercase tracking-wider">Sebelah Utara</strong>
                    <span className="font-medium text-slate-100">Kelurahan Wala</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors hover:bg-white/10">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 font-bold text-amber-400 text-lg border border-slate-700">S</div>
                  <div>
                    <strong className="text-slate-400 block mb-0.5 text-xs uppercase tracking-wider">Sebelah Selatan</strong>
                    <span className="font-medium text-slate-100">Desa Tanete</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors hover:bg-white/10">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 font-bold text-amber-400 text-lg border border-slate-700">T</div>
                  <div>
                    <strong className="text-slate-400 block mb-0.5 text-xs uppercase tracking-wider">Sebelah Timur</strong>
                    <span className="font-medium text-slate-100">Kec. Watang Sidenreng</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors hover:bg-white/10">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 font-bold text-amber-400 text-lg border border-slate-700">B</div>
                  <div>
                    <strong className="text-slate-400 block mb-0.5 text-xs uppercase tracking-wider">Sebelah Barat</strong>
                    <span className="font-medium text-slate-100">Kelurahan Rijang Pittu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
