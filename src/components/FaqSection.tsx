import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Apakah CatatUang benar-benar gratis untuk digunakan?',
      answer: 'Ya! Paket dasar CatatUang 100% gratis selamanya tanpa batasan jumlah transaksi yang dicatat. Anda dapat mencatat pengeluaran dan pemasukan harian sepuasnya tanpa biaya tersembunyi.'
    },
    {
      question: 'Bagaimana keamanan data transaksi finansial saya?',
      answer: 'Kami mengutamakan privasi dan keamanan Anda. Seluruh transmisi data dilindungi enkripsi SSL 256-bit dan database cloud terisolasi. Kami tidak pernah membagikan atau menjual data finansial Anda kepada pihak ketiga atau pengiklan.'
    },
    {
      question: 'Bagaimana cara masuk menggunakan Akun Google?',
      answer: 'Sangat mudah! Cukup klik tombol "Masuk" di pojok kanan atas, lalu pilih "Masuk Cepat dengan Akun Google". Anda tidak perlu menghafal kata sandi baru. Akun Anda langsung tersambung dan disinkronkan secara aman.'
    },
    {
      question: 'Apakah data saya tetap aman jika saya berganti perangkat?',
      answer: 'Tentu saja. Karena seluruh data tersinkronisasi di cloud CatatUang, Anda cukup masuk kembali menggunakan email/akun Google Anda di smartphone atau laptop baru, dan seluruh riwayat catatan akan langsung muncul utuh.'
    },
    {
      question: 'Dapatkah CatatUang dipakai untuk pembukuan UMKM atau toko kecil?',
      answer: 'Bisa! CatatUang memiliki fitur pemisahan dompet multi-kategori sehingga Anda dapat membuat dompet terpisah untuk kas toko/usaha dan kas pribadi, lengkap dengan laporan keuntungan bulanan.'
    },
    {
      question: 'Bagaimana cara mengekspor laporan keuangan ke format Excel atau PDF?',
      answer: 'Di menu Laporan pada aplikasi, Anda cukup memilih rentang tanggal yang diinginkan (harian, mingguan, bulanan, atau tahunan), lalu klik tombol "Ekspor PDF" atau "Unduh Excel (XLSX)".'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan yang Sering Diajukan</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">Pusat Bantuan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight text-balance">
            Jawaban Jelas untuk Segala Keraguan Anda
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Ada pertanyaan lain? Tim dukungan kami selalu siap membantu setiap hari kerja.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''}`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
