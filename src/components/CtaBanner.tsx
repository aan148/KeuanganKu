import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface CtaBannerProps {
  onOpenLogin?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenLogin }) => {
  const APP_URL = "https://project-sync-assistant.ai.studio";

  return (
    <section className="py-16 sm:py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-700/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-300 mb-4 bg-emerald-800/60 py-1 px-3.5 rounded-full border border-emerald-700">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>Mulai Langkah Bebas Stres Finansial</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-5 text-balance">
          Ambil Kendali Penuh Atas Masa Depan Keuanganmu Hari Ini
        </h2>

        <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-9">
          Bergabunglah bersama puluhan ribu pengguna yang berhasil menghemat jutaan rupiah setiap bulan dengan pencatatan yang teratur dan otomatis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {onOpenLogin ? (
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Mulai Sekarang, Gratis!
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          ) : (
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Mulai Sekarang, Gratis!
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          )}
        </div>

        {/* Quiet assurance points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tanpa Perlu Kartu Kredit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Enkripsi Cloud Terlindungi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Akses Langsung di Browser & HP</span>
          </div>
        </div>

      </div>
    </section>
  );
};
