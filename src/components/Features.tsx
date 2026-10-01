import React from 'react';
import { 
  ReceiptText, 
  BarChart3, 
  BellRing, 
  ShieldCheck, 
  Tags, 
  WalletCards,
  ArrowRight,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';

interface FeaturesProps {
  onOpenLogin?: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenLogin }) => {
  const APP_URL = "https://project-sync-assistant.ai.studio";

  const features = [
    {
      id: 'feature-1',
      title: 'Pencatatan Transaksi Mudah & Kilat',
      description: 'Cukup masukkan nominal dan pilih kategori dalam 3 detik. Didukung pelabelan cerdas yang mengingat pola pengeluaran rutin Anda.',
      editorialNumber: '01',
      icon: ReceiptText,
      badge: 'Efisiensi Harian',
      colSpan: 'md:col-span-2 lg:col-span-7',
      interactivePreview: (
        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 font-medium">
            <span>Input Kilat 1-Tap</span>
            <span className="text-emerald-600 font-semibold">Tersimpan Otomatis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md font-medium text-slate-700">Rp 45.000</span>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md font-medium">Makan Siang</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">Kantor Sudirman</span>
          </div>
        </div>
      )
    },
    {
      id: 'feature-2',
      title: 'Laporan Keuangan Harian & Bulanan',
      description: 'Ringkasan komprehensif alur kas masuk dan keluar secara otomatis. Ekspor data ke format PDF & Excel kapan saja untuk kebutuhan pembukuan.',
      editorialNumber: '02',
      icon: BarChart3,
      badge: 'Analitik Mendalam',
      colSpan: 'md:col-span-1 lg:col-span-5',
      interactivePreview: (
        <div className="mt-4 p-3 bg-emerald-950 text-white rounded-xl text-xs space-y-2">
          <div className="flex justify-between items-center text-emerald-300">
            <span>Ekspor Pembukuan</span>
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-center justify-between text-slate-200 font-mono">
            <span>Total Bersih Sep 2026</span>
            <span className="text-emerald-400 font-bold">+Rp 8.240.000</span>
          </div>
        </div>
      )
    },
    {
      id: 'feature-3',
      title: 'Anggaran Pintar & Notifikasi Pengeluaran',
      description: 'Atur batas maksimal belanja bulanan untuk setiap pos. Dapatkan peringatan dini sebelum Anda melewati batas aman anggaran.',
      editorialNumber: '03',
      icon: BellRing,
      badge: 'Kontrol Diri',
      colSpan: 'md:col-span-1 lg:col-span-4',
      interactivePreview: (
        <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs">
          <div className="flex justify-between text-amber-900 font-medium mb-1">
            <span>Batas Belanja Kuliner</span>
            <span className="font-bold">82%</span>
          </div>
          <div className="w-full h-2 bg-amber-200 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full w-[82%]" />
          </div>
          <p className="text-[11px] text-amber-700 mt-1.5">Tersisa Rp 360.000 hingga akhir bulan</p>
        </div>
      )
    },
    {
      id: 'feature-4',
      title: 'Kategori Kustom & Multi-Dompet',
      description: 'Kelola dompet tunai, rekening BCA/Mandiri, hingga e-wallet GoPay/OVO secara terpisah dalam satu aplikasi terpusat.',
      editorialNumber: '04',
      icon: Tags,
      badge: 'Fleksibilitas',
      colSpan: 'md:col-span-1 lg:col-span-4',
      interactivePreview: (
        <div className="mt-4 flex flex-wrap gap-1.5 text-xs">
          <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-700 font-medium">BCA Utama</span>
          <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-700 font-medium">GoPay</span>
          <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-700 font-medium">Uang Tunai</span>
          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md font-medium">+ Tambah Dompet</span>
        </div>
      )
    },
    {
      id: 'feature-5',
      title: 'Keamanan Data & Privasi Terjamin',
      description: 'Data finansial Anda dienkripsi tingkat tinggi. Tidak ada pihak ketiga yang dapat mengakses catatan Anda tanpa izin eksplisit.',
      editorialNumber: '05',
      icon: ShieldCheck,
      badge: 'Proteksi Maksimal',
      colSpan: 'md:col-span-2 lg:col-span-4',
      interactivePreview: (
        <div className="mt-4 p-3 bg-slate-100/80 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Enkripsi AES-256 Cloud</span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">Aktif</span>
        </div>
      )
    }
  ];

  return (
    <section id="fitur" className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 uppercase mb-2">
            <span>Fitur Unggulan</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">Dirancang Khusus untuk Pengguna Indonesia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight text-balance">
            Segala yang Anda Butuhkan untuk Membangun Arus Kas Sehat
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Tidak ada rumus rumit atau spreadsheet yang membingungkan. CatatUang menggabungkan kesederhanaan dengan daya analitik kuat.
          </p>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.colSpan} group relative bg-white hover:bg-slate-50/50 p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    
                    {/* Editorial Number */}
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-emerald-500 transition-colors">
                      {item.editorialNumber}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Interactive Preview Widget */}
                {item.interactivePreview}
              </div>
            );
          })}
        </div>

        {/* Feature Action Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Ingin mencoba langsung tanpa registrasi rumit?</p>
              <p className="text-xs text-slate-600">Aplikasi siap pakai secara instan di peramban dan perangkat Anda.</p>
            </div>
          </div>

          {onOpenLogin ? (
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm shrink-0 whitespace-nowrap"
            >
              Buka CatatUang Web
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm shrink-0 whitespace-nowrap"
            >
              Buka CatatUang Web
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </section>
  );
};
