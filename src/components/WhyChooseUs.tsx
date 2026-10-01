import React, { useState } from 'react';
import { 
  ShieldCheck, 
  LineChart, 
  Cloud, 
  Smile, 
  PieChart, 
  CheckCircle,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'thisMonth' | 'lastMonth'>('thisMonth');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Keamanan Setara Bank',
      description: 'Enkripsi data berlapis dengan protokol SSL/TLS & enkripsi database cloud. Privasi mutlak tanpa kebocoran data pengguna.',
    },
    {
      icon: LineChart,
      title: 'Grafik Interaktif & Intuitif',
      description: 'Pahami kondisi keuangan hanya dalam sekali lirik lewat diagram warna-warni yang mudah dipahami oleh siapa saja.',
    },
    {
      icon: Cloud,
      title: 'Sinkronisasi Cloud Real-time',
      description: 'Data selalu terbarukan di ponsel, tablet, dan laptop. Ganti perangkat tanpa takut kehilangan satu pun riwayat transaksi.',
    },
    {
      icon: Smile,
      title: 'Kemudahan Penggunaan',
      description: 'Desain bersih bebas iklan mengganggu. Tanpa kurva belajar berbelit-belit, bahkan untuk mereka yang baru mulai mencatat.',
    }
  ];

  // Data Analitik Visual Interaktif
  const analyticsData = {
    thisMonth: {
      totalExpense: 'Rp 4.250.000',
      totalIncome: 'Rp 9.800.000',
      savingsRate: '56.6%',
      categories: [
        { name: 'Kebutuhan & Belanja', percentage: 38, amount: 'Rp 1.615.000', color: 'bg-emerald-500', barColor: '#10B981' },
        { name: 'Makanan & Minuman', percentage: 26, amount: 'Rp 1.105.000', color: 'bg-teal-500', barColor: '#14B8A6' },
        { name: 'Tagihan & Listrik/Air', percentage: 18, amount: 'Rp 765.000', color: 'bg-amber-500', barColor: '#F59E0B' },
        { name: 'Transportasi', percentage: 12, amount: 'Rp 510.000', color: 'bg-sky-500', barColor: '#0EA5E9' },
        { name: 'Hiburan & Hobi', percentage: 6, amount: 'Rp 255.000', color: 'bg-purple-500', barColor: '#A855F7' },
      ]
    },
    lastMonth: {
      totalExpense: 'Rp 5.120.000',
      totalIncome: 'Rp 9.500.000',
      savingsRate: '46.1%',
      categories: [
        { name: 'Kebutuhan & Belanja', percentage: 32, amount: 'Rp 1.638.400', color: 'bg-emerald-500', barColor: '#10B981' },
        { name: 'Makanan & Minuman', percentage: 30, amount: 'Rp 1.536.000', color: 'bg-teal-500', barColor: '#14B8A6' },
        { name: 'Tagihan & Listrik/Air', percentage: 15, amount: 'Rp 768.000', color: 'bg-amber-500', barColor: '#F59E0B' },
        { name: 'Transportasi', percentage: 13, amount: 'Rp 665.600', color: 'bg-sky-500', barColor: '#0EA5E9' },
        { name: 'Hiburan & Hobi', percentage: 10, amount: 'Rp 512.000', color: 'bg-purple-500', barColor: '#A855F7' },
      ]
    }
  };

  const currentData = analyticsData[selectedPeriod];

  return (
    <section id="keunggulan" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 uppercase mb-2">
            <span>Mengapa Memilih CatatUang</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">Dirancang dengan Perhatian pada Detail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight text-balance">
            Solusi Nyata Bagi Siapa Saja yang Ingin Merapikan Finansial
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Kombinasi keamanan terpercaya dan grafik analitik yang mengubah angka kaku menjadi wawasan yang bermakna.
          </p>
        </div>

        {/* 4 Keunggulan Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Preview Analitik Visual dengan Chart Interaktif */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sisi Kiri: Penjelasan Analitik */}
            <div className="lg:col-span-5 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 mb-2">
                <PieChart className="w-4 h-4" />
                <span>Pratinjau Analitik Visual Interaktif</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-4">
                Lihat Ke Mana Perginya Setiap Rupiah Anda
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Tanpa perlu menghitung manual, CatatUang mengelompokkan pengeluaran ke dalam visualisasi persentase proporsional, memudahkan Anda menentukan pos mana yang dapat dihemat.
              </p>

              {/* Status Arus Kas Ringkas */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Kondisi Arus Kas: Sangat Sehat</span>
                </div>
                <p className="text-xs text-slate-600">
                  Rasio tabungan Anda mencapai <strong className="text-emerald-700 font-semibold">{currentData.savingsRate}</strong>, jauh melampaui batas rekomendasi finansial 20%.
                </p>
              </div>

              {/* Toggle Timeframe */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Pilih Periode:</span>
                <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setSelectedPeriod('thisMonth')}
                    className={`px-3 py-1.5 rounded-md transition-all ${selectedPeriod === 'thisMonth' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Bulan Ini
                  </button>
                  <button
                    onClick={() => setSelectedPeriod('lastMonth')}
                    className={`px-3 py-1.5 rounded-md transition-all ${selectedPeriod === 'lastMonth' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Bulan Lalu
                  </button>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Visual Chart & Category Bars */}
            <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
                <div>
                  <span className="text-xs text-slate-500">Total Pengeluaran ({selectedPeriod === 'thisMonth' ? 'Sep 2026' : 'Agu 2026'})</span>
                  <p className="text-2xl font-extrabold font-heading text-slate-900 tabular-nums">{currentData.totalExpense}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500">Total Pemasukan</span>
                  <p className="text-xl font-bold font-heading text-emerald-600 tabular-nums">+{currentData.totalIncome}</p>
                </div>
              </div>

              {/* Multi-segment Progress Bar Visualizer */}
              <div className="my-6">
                <div className="flex justify-between items-center text-xs text-slate-600 mb-2 font-medium">
                  <span>Komposisi Pengeluaran Menurut Pos</span>
                  <span className="text-slate-400">100% Total</span>
                </div>
                <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                  {currentData.categories.map((cat, idx) => (
                    <div
                      key={idx}
                      style={{ width: `${cat.percentage}%` }}
                      className={`${cat.color} h-full transition-all duration-500 cursor-pointer hover:opacity-80`}
                      onMouseEnter={() => setActiveCategoryIndex(idx)}
                      onMouseLeave={() => setActiveCategoryIndex(null)}
                      title={`${cat.name}: ${cat.percentage}% (${cat.amount})`}
                    />
                  ))}
                </div>
              </div>

              {/* Category Breakdown Cards */}
              <div className="space-y-2.5">
                {currentData.categories.map((cat, idx) => {
                  const isHovered = activeCategoryIndex === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveCategoryIndex(idx)}
                      onMouseLeave={() => setActiveCategoryIndex(null)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${isHovered ? 'bg-white border-emerald-400 shadow-sm translate-x-1' : 'bg-white/60 border-slate-200/70 hover:bg-white'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full ${cat.color} shrink-0`} />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">{cat.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 tabular-nums">
                        <span className="text-xs text-slate-400 font-mono">{cat.percentage}%</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">{cat.amount}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
