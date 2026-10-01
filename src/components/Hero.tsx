import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  EyeOff, 
  Plus, 
  ShoppingBag, 
  Coffee, 
  Briefcase, 
  Car, 
  Smartphone,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import { Transaction } from '../types';

interface HeroProps {
  onOpenLogin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLogin }) => {
  const APP_URL = "https://project-sync-assistant.ai.studio";

  // State untuk interaktivitas mockup smartphone
  const [showBalance, setShowBalance] = useState(true);
  const [chartMode, setChartMode] = useState<'weekly' | 'monthly'>('weekly');
  const [activeTxFilter, setActiveTxFilter] = useState<'all' | 'income' | 'expense'>('all');

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'tx-1',
      title: 'Honor Proyek Desain UI',
      category: 'Freelance & Bisnis',
      type: 'income',
      amount: 4500000,
      date: 'Hari ini, 14:20',
      iconName: 'briefcase'
    },
    {
      id: 'tx-2',
      title: 'Belanja Mingguan Supermarket',
      category: 'Kebutuhan Dapur',
      type: 'expense',
      amount: 485000,
      date: 'Hari ini, 10:15',
      iconName: 'shopping-bag'
    },
    {
      id: 'tx-3',
      title: 'Kopi & Snack Rapat',
      category: 'Makanan & Minuman',
      type: 'expense',
      amount: 68000,
      date: 'Kemarin, 16:40',
      iconName: 'coffee'
    },
    {
      id: 'tx-4',
      title: 'Bensin & Parkir Kantor',
      category: 'Transportasi',
      type: 'expense',
      amount: 150000,
      date: 'Kemarin, 08:30',
      iconName: 'car'
    }
  ]);

  // Data grafik batang mingguan & bulanan
  const weeklyData = [
    { label: 'Sen', income: 65, expense: 35 },
    { label: 'Sel', income: 40, expense: 70 },
    { label: 'Rab', income: 90, expense: 45 },
    { label: 'Kam', income: 55, expense: 60 },
    { label: 'Jum', income: 100, expense: 80 },
    { label: 'Sab', income: 30, expense: 95 },
    { label: 'Min', income: 20, expense: 40 },
  ];

  const monthlyData = [
    { label: 'M1', income: 75, expense: 50 },
    { label: 'M2', income: 90, expense: 65 },
    { label: 'M3', income: 60, expense: 45 },
    { label: 'M4', income: 100, expense: 80 },
  ];

  const activeBars = chartMode === 'weekly' ? weeklyData : monthlyData;

  // Hitung total saldo dinamis
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 10350000);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 2800000);
  const currentBalance = totalIncome - totalExpense;

  // Quick Action untuk menambahkan simulasi transaksi ke mockup
  const handleAddSampleTx = () => {
    const samples = [
      { title: 'Gaji Pokok Bulanan', category: 'Pemasukan Tetap', type: 'income' as const, amount: 6500000, iconName: 'briefcase' },
      { title: 'Langganan Internet & WiFi', category: 'Tagihan Rumah', type: 'expense' as const, amount: 375000, iconName: 'shopping-bag' },
      { title: 'Makan Malam Restoran', category: 'Hiburan & Kuliner', type: 'expense' as const, amount: 210000, iconName: 'coffee' },
      { title: 'Dividen Reksa Dana', category: 'Investasi', type: 'income' as const, amount: 840000, iconName: 'briefcase' },
    ];
    const pick = samples[Math.floor(Math.random() * samples.length)];
    const newTx: Transaction = {
      id: 'tx-' + Date.now(),
      title: pick.title,
      category: pick.category,
      type: pick.type,
      amount: pick.amount,
      date: 'Baru saja',
      iconName: pick.iconName
    };
    setTransactions(prev => [newTx, ...prev.slice(0, 4)]);
  };

  const filteredTransactions = transactions.filter(tx => {
    if (activeTxFilter === 'income') return tx.type === 'income';
    if (activeTxFilter === 'expense') return tx.type === 'expense';
    return true;
  });

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const getTxIcon = (name: string) => {
    switch (name) {
      case 'shopping-bag': return <ShoppingBag className="w-4 h-4 text-amber-600" />;
      case 'coffee': return <Coffee className="w-4 h-4 text-rose-600" />;
      case 'car': return <Car className="w-4 h-4 text-sky-600" />;
      default: return <Briefcase className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section id="beranda" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50">
      
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-teal-100/60 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Sisi Kiri: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Editorial Kicker (Zero-Pill Discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Aplikasi Pengelola Finansial #1 di Indonesia</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-medium lowercase">versi 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
              Kelola Keuanganmu Lebih Mudah & <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">Cerdas Bersama CatatUang</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Catat setiap pemasukan dan pengeluaran harian dalam hitungan detik. Nikmati visualisasi alur kas otomatis, peringatan anggaran cerdas, dan sinkronisasi awan terenkripsi agar tabungan impianmu lekas tercapai.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenLogin}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 whitespace-nowrap"
              >
                Mulai Sekarang, Gratis!
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenLogin}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs transition-colors whitespace-nowrap"
              >
                Masuk dengan Google
              </button>
            </div>

            {/* Trust Proof Points (Adjacency & Rigor) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/70 w-full text-xs text-slate-500">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Enkripsi 256-Bit</p>
                  <p>Privasi & data terjamin</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Cepat & Ringan</p>
                  <p>Input dalam 3 detik</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">45.000+ Pengguna</p>
                  <p>Rating 4.9/5 Indonesia</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sisi Kanan: Mockup Bingkai Smartphone Interaktif */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[380px]">
              
              {/* Outer Glow / Phone Shadow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/20 via-teal-400/20 to-emerald-600/30 rounded-[48px] blur-xl" />

              {/* Interactive Phone Frame */}
              <div className="relative bg-slate-900 p-3 sm:p-3.5 rounded-[46px] shadow-2xl ring-1 ring-slate-800 border-4 border-slate-800/90">
                
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-between px-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700/60" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* Smartphone Screen Canvas */}
                <div className="relative bg-slate-50 rounded-[36px] overflow-hidden text-slate-800 flex flex-col min-h-[580px] shadow-inner select-none">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold text-slate-600">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span>5G</span>
                      <div className="w-5 h-2.5 border border-slate-500 rounded-xs p-0.5 flex items-center">
                        <div className="w-3.5 h-full bg-slate-700 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* App In-Screen Header */}
                  <div className="px-5 pt-1 pb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        CU
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 leading-none">Selamat Datang</p>
                        <p className="text-xs font-bold text-slate-900">Budi Pratama</p>
                      </div>
                    </div>

                    <button 
                      onClick={handleAddSampleTx}
                      title="Klik untuk uji simulasi tambah transaksi"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 hover:bg-emerald-200 active:scale-95 rounded-lg transition-all"
                    >
                      <Plus className="w-3 h-3" />
                      <span>+ Simulasi</span>
                    </button>
                  </div>

                  {/* Screen Content Scrollable Area */}
                  <div className="px-4 pb-4 space-y-3.5 overflow-y-auto max-h-[510px]">
                    
                    {/* Card Ringkasan Saldo */}
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-4 shadow-md shadow-emerald-700/20 relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-sm pointer-events-none" />
                      
                      <div className="flex items-center justify-between mb-1 text-emerald-100 text-[11px]">
                        <span>Total Saldo Dompet</span>
                        <button 
                          onClick={() => setShowBalance(!showBalance)}
                          className="hover:text-white transition-colors p-0.5"
                          aria-label="Lihat atau sembunyikan saldo"
                        >
                          {showBalance ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="text-2xl font-extrabold font-heading tracking-tight mb-3 tabular-nums">
                        {showBalance ? formatRupiah(currentBalance) : 'Rp ••••••••'}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-emerald-500/40 text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/50 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-3 h-3 text-emerald-100" />
                          </div>
                          <div>
                            <span className="block text-[9px] text-emerald-200 uppercase tracking-wider">Masuk</span>
                            <span className="font-semibold tabular-nums">
                              {showBalance ? formatRupiah(totalIncome) : '••••••'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-rose-500/50 flex items-center justify-center shrink-0">
                            <TrendingDown className="w-3 h-3 text-rose-100" />
                          </div>
                          <div>
                            <span className="block text-[9px] text-rose-200 uppercase tracking-wider">Keluar</span>
                            <span className="font-semibold tabular-nums">
                              {showBalance ? formatRupiah(totalExpense) : '••••••'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Grafik Batang Interaktif */}
                    <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-800">Analisis Alur Kas</span>
                          <span className="text-[10px] text-slate-400">Pemasukan vs Pengeluaran</span>
                        </div>

                        {/* Interactive Tabs */}
                        <div className="flex items-center p-0.5 bg-slate-100 rounded-md text-[10px] font-medium">
                          <button
                            onClick={() => setChartMode('weekly')}
                            className={`px-2 py-0.5 rounded transition-all ${chartMode === 'weekly' ? 'bg-white text-emerald-700 shadow-2xs font-semibold' : 'text-slate-500 hover:text-slate-800'}`}
                          >
                            Minggu
                          </button>
                          <button
                            onClick={() => setChartMode('monthly')}
                            className={`px-2 py-0.5 rounded transition-all ${chartMode === 'monthly' ? 'bg-white text-emerald-700 shadow-2xs font-semibold' : 'text-slate-500 hover:text-slate-800'}`}
                          >
                            Bulan
                          </button>
                        </div>
                      </div>

                      {/* Bar Visualization */}
                      <div className="h-28 flex items-end justify-between gap-2 pt-2 px-1 border-b border-slate-100">
                        {activeBars.map((bar, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group cursor-pointer">
                            <div className="w-full flex items-end justify-center gap-1 h-20">
                              {/* Income Bar (Emerald) */}
                              <div
                                style={{ height: `${bar.income}%` }}
                                className="w-2 sm:w-2.5 bg-emerald-500 rounded-t-sm transition-all duration-300 group-hover:bg-emerald-600"
                                title={`Pemasukan: ${bar.income}%`}
                              />
                              {/* Expense Bar (Rose/Slate) */}
                              <div
                                style={{ height: `${bar.expense}%` }}
                                className="w-2 sm:w-2.5 bg-slate-300 rounded-t-sm transition-all duration-300 group-hover:bg-rose-400"
                                title={`Pengeluaran: ${bar.expense}%`}
                              />
                            </div>
                            <span className="text-[9px] font-medium text-slate-400">{bar.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-center gap-4 mt-2 text-[10px] text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-xs bg-emerald-500" />
                          <span>Pemasukan</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-xs bg-slate-300" />
                          <span>Pengeluaran</span>
                        </div>
                      </div>
                    </div>

                    {/* Riwayat Transaksi Terbaru */}
                    <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-800">Transaksi Terbaru</span>
                        
                        {/* Transaction Filter Segment */}
                        <div className="flex items-center gap-1 text-[10px]">
                          <button
                            onClick={() => setActiveTxFilter('all')}
                            className={`px-1.5 py-0.5 rounded ${activeTxFilter === 'all' ? 'text-emerald-700 font-bold' : 'text-slate-400 hover:text-slate-700'}`}
                          >
                            Semua
                          </button>
                          <span className="text-slate-200">|</span>
                          <button
                            onClick={() => setActiveTxFilter('expense')}
                            className={`px-1.5 py-0.5 rounded ${activeTxFilter === 'expense' ? 'text-rose-600 font-bold' : 'text-slate-400 hover:text-slate-700'}`}
                          >
                            Keluar
                          </button>
                          <span className="text-slate-200">|</span>
                          <button
                            onClick={() => setActiveTxFilter('income')}
                            className={`px-1.5 py-0.5 rounded ${activeTxFilter === 'income' ? 'text-emerald-700 font-bold' : 'text-slate-400 hover:text-slate-700'}`}
                          >
                            Masuk
                          </button>
                        </div>
                      </div>

                      {/* Transaction List */}
                      <div className="space-y-2">
                        {filteredTransactions.slice(0, 3).map((tx) => (
                          <div 
                            key={tx.id} 
                            className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                                {getTxIcon(tx.iconName)}
                              </div>
                              <div className="min-w-0">
                                <p className="text-[11px] font-semibold text-slate-800 truncate">{tx.title}</p>
                                <p className="text-[9px] text-slate-400">{tx.category} · {tx.date}</p>
                              </div>
                            </div>
                            
                            <span className={`text-[11px] font-bold shrink-0 ml-2 tabular-nums ${tx.type === 'income' ? 'text-emerald-600' : 'text-slate-900'}`}>
                              {tx.type === 'income' ? '+' : '-'} {formatRupiah(tx.amount)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Phone Home Bar */}
                  <div className="mt-auto py-2 flex justify-center bg-slate-50">
                    <div className="w-24 h-1 bg-slate-300 rounded-full" />
                  </div>

                </div>

              </div>

              {/* Interactive badge floating next to phone */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/90 items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Responsif & Multi-Platform</p>
                  <p className="text-[11px] text-slate-500">Akses cepat via Web & Ponsel</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
