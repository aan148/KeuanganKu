import React, { useState } from 'react';
import { 
  X, 
  Wallet, 
  CheckCircle2, 
  AlertCircle, 
  Key, 
  ExternalLink, 
  Code2, 
  Loader2, 
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { 
  signInWithGoogle, 
  saveCustomApiKey, 
  clearFirebaseStorage,
  getActiveFirebaseConfig, 
  isFirebaseConfigured,
  defaultFirebaseConfig
} from '../services/firebase';
import { AuthUserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AuthUserProfile | null;
  onLoginSuccess: (user: AuthUserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showConfigHelper, setShowConfigHelper] = useState(false);
  const [inputApiKey, setInputApiKey] = useState('');
  const [apiKeySavedSuccess, setApiKeySavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'config'>('login');

  const APP_URL = "https://project-sync-assistant.ai.studio";

  if (!isOpen) return null;

  const currentConfig = getActiveFirebaseConfig();
  const configured = isFirebaseConfigured();

  // Handler Masuk Google
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      if (!configured) {
        // Jika API key masih placeholder, tunjukkan tab konfigurasi atau tawarkan login demo
        setShowConfigHelper(true);
        setActiveTab('config');
        setErrorMessage('Konfigurasi API Key Firebase diperlukan untuk popup Google resmi.');
        setLoading(false);
        return;
      }

      const user = await signInWithGoogle();
      if (user) {
        const userProfile: AuthUserProfile = {
          uid: user.uid,
          displayName: user.displayName || 'Pengguna CatatUang',
          email: user.email || 'user@catatuang.id',
          photoURL: user.photoURL || null
        };
        onLoginSuccess(userProfile);
      }
    } catch (err: any) {
      console.error('Google Sign-In Error:', err);
      if (err.message === 'CONFIG_REQUIRED') {
        setShowConfigHelper(true);
        setActiveTab('config');
        setErrorMessage('Silakan lengkapi Firebase API Key untuk Project ID catatankeuangan-c7a98 atau gunakan mode simulasi cepat.');
      } else if (err.code === 'auth/popup-closed-by-user') {
        setErrorMessage('Proses login dibatalkan karena jendela popup ditutup.');
      } else if (err.code === 'auth/operation-not-allowed') {
        setErrorMessage('Metode Google Sign-In belum diaktifkan di Firebase Console. Buka Firebase Console > Authentication > Sign-in method > aktifkan Google.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setErrorMessage('Domain aplikasi ini belum didaftarkan di Firebase Console. Buka Firebase Console > Authentication > Settings > Authorized domains, lalu tambahkan domain ini.');
      } else {
        setErrorMessage(err.message || 'Gagal masuk dengan Google. Silakan coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Simpan custom API key jika diinput oleh user
  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputApiKey.trim()) return;
    saveCustomApiKey(inputApiKey.trim());
    setApiKeySavedSuccess(true);
    setErrorMessage(null);
    setTimeout(() => {
      setApiKeySavedSuccess(false);
      setActiveTab('login');
    }, 1200);
  };

  // Quick Demo Login for instant testing without API key setup
  const handleDemoSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      const demoProfile: AuthUserProfile = {
        uid: 'demo-google-user-77',
        displayName: 'Budi Pratama (Google Account)',
        email: 'budi.pratama@gmail.com',
        photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
      };
      onLoginSuccess(demoProfile);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          aria-label="Tutup jendela login"
        >
          <X className="w-4 h-4" />
        </button>

        {/* State 1: Sudah Berhasil Login */}
        {currentUser ? (
          <div className="text-center py-4 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Autentikasi Berhasil
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-slate-900 mt-3">
                Selamat Datang Kembali!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Anda telah terautentikasi dengan Firebase Google Auth.
              </p>
            </div>

            {/* User Session Info Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center gap-3 text-left">
              {currentUser.photoURL ? (
                <img 
                  src={currentUser.photoURL} 
                  alt={currentUser.displayName || 'Akun'} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-base">
                  {currentUser.displayName ? currentUser.displayName[0] : 'U'}
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">
                  {currentUser.displayName || 'Pengguna Terdaftar'}
                </p>
                <p className="text-xs text-slate-500 truncate">
                  {currentUser.email}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Project: catatankeuangan-c7a98</span>
                </div>
              </div>
            </div>

            {/* Direct App Link Button */}
            <div className="pt-2">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/25 transition-all"
              >
                <span>Buka Dashboard Aplikasi CatatUang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-slate-400 mt-2">
                Mengarahkan ke <code>{APP_URL}</code>
              </p>
            </div>
          </div>
        ) : (
          /* State 2: Form Login / Google Auth */
          <div>
            {/* Header Brand */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold font-heading text-slate-900 leading-none">
                  Catat<span className="text-emerald-600">Uang</span>
                </span>
                <p className="text-[11px] text-slate-500">Masuk Akun Finansial Pribadi</p>
              </div>
            </div>

            {/* Tabs (Login vs Firebase Config Code) */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-semibold mb-6">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-2 text-center rounded-lg transition-all ${activeTab === 'login' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Masuk Cepat
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`flex-1 py-2 text-center rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeTab === 'config' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Info Firebase</span>
              </button>
            </div>

            {activeTab === 'login' ? (
              <div className="space-y-4">
                <div className="text-left mb-4">
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    Masuk ke Akun Anda
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Gunakan Akun Google untuk sinkronisasi otomatis multi-perangkat.
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 text-left">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Informasi Login</p>
                      <p className="mt-0.5 text-amber-800">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Tombol Utama: Masuk Cepat dengan Akun Google */}
                <button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-emerald-500 rounded-xl text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:shadow transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
                  ) : (
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  )}
                  <span>Masuk Cepat dengan Akun Google</span>
                </button>

                {/* Fallback One-Click Demo Mode button for instant preview */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span>Uji Coba Langsung:</span>
                    <span>Tanpa Setup API Key</span>
                  </div>
                  <button
                    onClick={handleDemoSignIn}
                    disabled={loading}
                    className="w-full py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Uji Masuk dengan Akun Contoh (Demo)</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-slate-400">
                    Dengan masuk, Anda menyetujui Kebijakan Privasi & Syarat Layanan CatatUang.
                  </p>
                </div>
              </div>
            ) : (
              /* Tab 2: Konfigurasi Firebase Project ID: catatankeuangan-c7a98 */
              <div className="space-y-4 text-left">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center justify-between font-semibold text-slate-700 mb-1">
                    <span>Firebase Project Terkonfigurasi:</span>
                    <span className="font-mono text-emerald-700">catatankeuangan-c7a98</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Auth Domain: <code>catatankeuangan-c7a98.firebaseapp.com</code>
                  </p>
                </div>

                {/* Struktur Kode Sesuai Firebase Console */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold uppercase text-slate-500">
                      Konfigurasi Firebase Aktif:
                    </label>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Terkoneksi ke catatankeuangan-c7a98
                    </span>
                  </div>
                  <pre className="p-3 bg-slate-900 text-emerald-400 text-[10px] font-mono rounded-xl overflow-x-auto leading-relaxed">
{`const firebaseConfig = {
  apiKey: "${currentConfig.apiKey}",
  authDomain: "catatankeuangan-c7a98.firebaseapp.com",
  projectId: "catatankeuangan-c7a98",
  storageBucket: "catatankeuangan-c7a98.firebasestorage.app",
  messagingSenderId: "13395960526",
  appId: "1:13395960526:web:9cd221226ca27052d5669f",
  measurementId: "G-ZZYMSH7XYP"
};`}
                  </pre>
                </div>

                {/* Form Input Custom API Key */}
                <form onSubmit={handleSaveApiKey} className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    Masukkan Web API Key Project catatankeuangan-c7a98:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="AIzaSy..."
                      value={inputApiKey}
                      onChange={(e) => setInputApiKey(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg whitespace-nowrap transition-colors"
                    >
                      Simpan
                    </button>
                  </div>
                  {apiKeySavedSuccess && (
                    <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      API Key tersimpan! Mengalihkan ke menu masuk...
                    </p>
                  )}
                </form>

                {/* Penjelasan Kenapa Masuk ke Firebase Lama */}
                <div className="p-3 bg-amber-50/80 border border-amber-200/90 rounded-xl text-xs space-y-1.5 text-slate-700">
                  <p className="font-bold text-amber-900 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Kenapa muncul catatankeuangankeluarga-1cc0d?
                  </p>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    1. <strong>Tautan Luar:</strong> Tombol CTA mengarah ke <code>project-sync-assistant.ai.studio</code> yang masih menggunakan konfigurasi Firebase project lama.
                  </p>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    2. <strong>Asal API Key:</strong> Setiap API Key terikat ke satu project di Google Cloud. Jika API key yang disalin berasal dari project <code>catatankeuangankeluarga-1cc0d</code>, Google OAuth otomatis menampilkan nama project tersebut.
                  </p>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        clearFirebaseStorage();
                        setInputApiKey('');
                        setErrorMessage('Cache dan API key tersimpan berhasil direset.');
                      }}
                      className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 underline"
                    >
                      Hapus / Reset API Key Tersimpan
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                  <button
                    onClick={() => setActiveTab('login')}
                    className="text-xs font-semibold text-emerald-600 hover:underline"
                  >
                    ← Kembali ke Masuk Cepat
                  </button>
                  
                  <a
                    href="https://console.firebase.google.com/project/catatankeuangan-c7a98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                  >
                    <span>Buka Firebase Console</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
