import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, Calendar, User, X } from 'lucide-react';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'Metode 50/30/20: Cara Paling Masuk Akal Mengatur Gaji Bulanan Tanpa Tersiksa',
      excerpt: 'Bagi 50% pendapatan untuk kebutuhan pokok, 30% untuk keinginan, dan kunci minimal 20% untuk tabungan serta investasi jangka panjang.',
      category: 'Perencanaan Gaji',
      readTime: '4 menit baca',
      date: '24 September 2026',
      author: 'Finna Safitri, CFP'
    },
    {
      id: 'post-2',
      title: 'Stop Boncos! 7 Pos Pengeluaran Mikro yang Bikin Saldo Cepat Menguap',
      excerpt: 'Mulai dari biaya transfer antar-bank, biaya langganan aplikasi tak terpakai, hingga ongkos kirim jajanan harian yang membengkak.',
      category: 'Tips Hemat',
      readTime: '5 menit baca',
      date: '18 September 2026',
      author: 'Rian Hidayat'
    },
    {
      id: 'post-3',
      title: 'Panduan Membangun Dana Darurat 6 Bulan Gaji untuk Pekerja Indonesia',
      excerpt: 'Ketahui rumus menghitung kebutuhan minimum, tempat penyimpanan yang likuid dan aman, serta prioritas pengisian saat ada bonus.',
      category: 'Dana Darurat',
      readTime: '6 menit baca',
      date: '12 September 2026',
      author: 'Dr. Hendra Gunawan'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Edukasi & Blog CatatUang</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">Literasi Finansial Sehari-hari</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight text-balance">
              Wawasan Cerdas untuk Keputusan Finansial Lebih Baik
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-slate-500 font-medium">
            Diperbarui secara berkala oleh pakar keuangan tersertifikasi
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setSelectedArticle(post)}
            >
              <div className="p-6 sm:p-7">
                
                {/* Zero-Pill Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-emerald-700">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-emerald-600 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs mt-auto">
                <span className="text-slate-500 font-medium">Penulis: {post.author}</span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  Baca Artikel
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal Reader */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Tutup artikel"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
              <span className="font-semibold text-emerald-700">{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.date}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="text-2xl font-extrabold font-heading text-slate-900 mb-4 leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-500 pb-5 mb-5 border-b border-slate-100">
              <User className="w-3.5 h-3.5" />
              <span>Ditulis oleh <strong>{selectedArticle.author}</strong></span>
            </div>

            <div className="prose prose-slate text-sm text-slate-700 space-y-4 leading-relaxed">
              <p className="font-medium text-slate-900 text-base">
                {selectedArticle.excerpt}
              </p>
              <p>
                Kunci utama dari stabilitas finansial bukanlah seberapa besar gaji yang didapatkan setiap tanggal gajian, melainkan seberapa konsisten dan disiplin kita mencatat kemana dana tersebut dialirkan. Tanpa pencatatan berkala, "kebocoran halus" seperti langganan bulanan yang lupa dihentikan atau jajan kopi tiap sore bisa menghabiskan hingga 25% pendapatan bulanan.
              </p>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-medium">
                💡 <strong>Tips Cepat CatatUang:</strong> Buat 3 dompet terpisah: Rekening Pengeluaran Pokok, Rekening Jajan/Hobi, dan Rekening Dana Darurat yang tidak boleh disentuh.
              </div>
              <p>
                Dengan membiasakan diri mencatat dalam 3 detik menggunakan CatatUang, Anda tidak akan lagi kaget ketika melihat saldo rekening di akhir bulan.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
