import React from 'react';
import { Wallet, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Kolom 1: Brand & Info Ringkas */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                Catat<span className="text-emerald-400">Uang</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Platform manajemen dan pencatatan keuangan modern untuk individu dan UMKM Indonesia. Membantu Anda mencapai tujuan finansial lewat kebiasaan pencatatan yang mudah, cepat, dan presisi.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sertifikasi Enkripsi Data Cloud & Privasi 100% Terjaga</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigasi Cepat
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="hover:text-emerald-400 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-emerald-400 transition-colors">Fitur Aplikasi</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-emerald-400 transition-colors">Mengapa CatatUang</a>
              </li>
              <li>
                <a href="#harga" className="hover:text-emerald-400 transition-colors">Pilihan Paket Harga</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-emerald-400 transition-colors">Edukasi Finansial & Blog</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Pusat Bantuan & FAQ</a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Dukungan */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Kontak & Bantuan
            </p>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>halo@catatuang.id</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+62 821-8899-7722 (WhatsApp)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jakarta Selatan, DKI Jakarta 12190, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Kolom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 CatatUang Technologies Inc. Hak cipta dilindungi undang-undang.</p>
          
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-slate-400 transition-colors">Kebijakan Privasi</a>
            <a href="#faq" className="hover:text-slate-400 transition-colors">Syarat Penggunaan</a>
            <a href="#faq" className="hover:text-slate-400 transition-colors">Keamanan Sistem</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
