import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onOpenLogin?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenLogin }) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');
  const APP_URL = "https://project-sync-assistant.ai.studio";

  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Starter Bebas Biaya',
      price: 'Rp 0',
      period: 'selamanya',
      description: 'Pilihan sempurna untuk mahasiswa dan perorangan yang ingin mulai disiplin mencatat pengeluaran.',
      features: [
        'Pencatatan transaksi tanpa batas',
        '3 Dompet digital / rekening bank',
        'Laporan bulanan dasar',
        'Kategori pengeluaran standar',
        'Akses peramban & smartphone',
        'Penyimpanan cloud aman'
      ],
      ctaText: 'Mulai Gratis Sekarang',
    },
    {
      id: 'pro',
      name: 'Pro Personal',
      price: billingPeriod === 'yearly' ? 'Rp 24.000' : 'Rp 29.000',
      period: 'per bulan',
      description: 'Bagi Anda yang serius membangun kekayaan bersih dan ingin otomatisasi analitik menyeluruh.',
      isPopular: true,
      features: [
        'Semua fitur pada paket Starter',
        'Dompet & rekening bank tanpa batas',
        'Ekspor laporan lengkap ke Excel & PDF',
        'Anggaran pintar dengan notifikasi over-budget',
        'Analitik visual kategori & perbandingan historis',
        'Target tabungan & pelacak dana darurat',
        'Dukungan pelanggan prioritas'
      ],
      ctaText: 'Coba Gratis 14 Hari',
    },
    {
      id: 'business',
      name: 'Bisnis & UMKM',
      price: billingPeriod === 'yearly' ? 'Rp 65.000' : 'Rp 79.000',
      period: 'per bulan',
      description: 'Lengkap dengan pelacakan kas usaha, invoice, dan pencatatan laba kotor bagi pemilik toko atau UMKM.',
      features: [
        'Semua fitur pada paket Pro Personal',
        'Multi-user (hingga 5 staf / kasir)',
        'Pembuat invoice digital & tanda terima',
        'Pemisahan tegas pos kas pribadi vs bisnis',
        'Laporan laba rugi siap audit sederhana',
        'Integrasi API & webhook kustom',
        'Dedicated account manager'
      ],
      ctaText: 'Coba Gratis Bisnis',
    }
  ];

  return (
    <section id="harga" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 uppercase mb-2">
            <span>Paket Harga Transparan</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">Tanpa Biaya Tersembunyi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight text-balance">
            Investasi Terjangkau untuk Masa Depan Bebas Stres Finansial
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Pilih paket yang paling sesuai dengan kebutuhan pencatatan Anda. Bisa upgrade, downgrade, atau batal kapan saja.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-lg transition-all ${billingPeriod === 'monthly' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <span>Tahunan</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${billingPeriod === 'yearly' ? 'bg-emerald-700 text-emerald-100' : 'bg-emerald-100 text-emerald-800'}`}>
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                plan.isPopular
                  ? 'bg-slate-900 text-white shadow-xl ring-2 ring-emerald-500 scale-[1.02] z-10'
                  : 'bg-white text-slate-900 border border-slate-200/90 shadow-2xs hover:shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[11px] font-bold py-1 px-3.5 rounded-full shadow-sm flex items-center gap-1 tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Paling Diminati</span>
                </div>
              )}

              <div>
                <h3 className={`text-xl font-bold font-heading mb-1 ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-6 ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className={`text-4xl font-extrabold font-heading tabular-nums ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                    /{plan.period}
                  </span>
                </div>

                <div className={`h-px w-full mb-6 ${plan.isPopular ? 'bg-slate-800' : 'bg-slate-100'}`} />

                {/* Features List */}
                <ul className="space-y-3 mb-8 text-xs sm:text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.isPopular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className={plan.isPopular ? 'text-slate-300' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              {onOpenLogin ? (
                <button
                  onClick={onOpenLogin}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
