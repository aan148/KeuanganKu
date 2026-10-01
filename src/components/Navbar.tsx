import React, { useState } from 'react';
import { Wallet, Menu, X, ArrowUpRight, LogOut, CheckCircle2 } from 'lucide-react';
import { AuthUserProfile } from '../types';

interface NavbarProps {
  onOpenLogin: () => void;
  currentUser: AuthUserProfile | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, currentUser, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const APP_URL = "https://project-sync-assistant.ai.studio";

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Fitur', href: '#fitur' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Harga', href: '#harga' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Zone 1: Brand Wordmark & Icon */}
          <a href="#beranda" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1 px-1.5 -ml-1.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Wallet className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading tracking-tight text-slate-900 flex items-center gap-1">
                Catat<span className="text-emerald-600">Uang</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                  {currentUser.photoURL ? (
                    <img 
                      src={currentUser.photoURL} 
                      alt={currentUser.displayName || 'User'} 
                      className="w-5 h-5 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  )}
                  <span className="max-w-[110px] truncate">{currentUser.displayName || currentUser.email || 'Pengguna'}</span>
                  <button 
                    onClick={onLogout}
                    title="Keluar"
                    className="text-slate-400 hover:text-rose-600 transition-colors ml-1 p-0.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={onOpenLogin}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-sm shadow-emerald-600/20 whitespace-nowrap"
                >
                  Akun Aktif
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onOpenLogin}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-100/70 rounded-lg transition-colors whitespace-nowrap"
                >
                  Masuk
                </button>
                <button
                  onClick={onOpenLogin}
                  className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-sm shadow-emerald-600/20 whitespace-nowrap"
                >
                  Coba Gratis
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenLogin}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              {currentUser ? 'Akun' : 'Coba Gratis'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {currentUser ? (
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="truncate">{currentUser.displayName || currentUser.email}</span>
                </div>
                <button 
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                  className="text-xs text-rose-600 font-semibold px-2 py-1 hover:bg-rose-50 rounded"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <button
                onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Masuk ke Akun
              </button>
            )}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
            >
              Mulai Sekarang, Gratis!
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
