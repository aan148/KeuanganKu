import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
  signOut, 
  User, 
  Auth 
} from 'firebase/auth';

/**
 * Konfigurasi Firebase resmi untuk Project ID: catatankeuangan-c7a98
 * Sesuai Firebase Console (KelolaKeuangan Web App).
 */
export const defaultFirebaseConfig = {
  apiKey: "AIzaSyC0id_aaS5JZc_dVZx7-7bpeKoqKBeDJEI",
  authDomain: "catatankeuangan-c7a98.firebaseapp.com",
  projectId: "catatankeuangan-c7a98",
  storageBucket: "catatankeuangan-c7a98.firebasestorage.app",
  messagingSenderId: "13395960526",
  appId: "1:13395960526:web:9cd221226ca27052d5669f",
  measurementId: "G-ZZYMSH7XYP"
};

// Pastikan selalu menggunakan konfigurasi catatankeuangan-c7a98
export const getActiveFirebaseConfig = () => {
  if (typeof window !== 'undefined') {
    // Bersihkan key lama jika ada
    const oldKey = localStorage.getItem('catatuang_firebase_api_key');
    if (oldKey && oldKey !== defaultFirebaseConfig.apiKey) {
      localStorage.removeItem('catatuang_firebase_api_key');
    }
  }
  return defaultFirebaseConfig;
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

export const isFirebaseConfigured = (): boolean => {
  const cfg = getActiveFirebaseConfig();
  return Boolean(cfg.apiKey && cfg.apiKey !== 'PASTE_YOUR_API_KEY_HERE' && cfg.apiKey.trim().length > 10);
};

export const initFirebase = (): { app: FirebaseApp | null; auth: Auth | null } => {
  try {
    const config = getActiveFirebaseConfig();
    
    // Jangan inisialisasi jika API key masih placeholder
    if (!isFirebaseConfigured()) {
      return { app: null, auth: null };
    }

    if (!getApps().length) {
      app = initializeApp(config);
    } else {
      app = getApp();
    }
    auth = getAuth(app);
    return { app, auth };
  } catch (error) {
    console.warn("Firebase initialization notice:", error);
    return { app: null, auth: null };
  }
};

/**
 * Autentikasi Google Sign-In menggunakan signInWithPopup
 */
export const signInWithGoogle = async (): Promise<User | { demo: true; displayName: string; email: string; photoURL: string; uid: string }> => {
  const { auth: currentAuth } = initFirebase();

  // Jika belum ada API key asli, lemparkan error terstruktur agar modal menampilkan panduan atau demo mode
  if (!currentAuth || !isFirebaseConfigured()) {
    throw new Error('CONFIG_REQUIRED');
  }

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  const result = await signInWithPopup(currentAuth, provider);
  return result.user;
};

/**
 * Logout pengguna
 */
export const logoutFromFirebase = async (): Promise<void> => {
  const { auth: currentAuth } = initFirebase();
  if (currentAuth) {
    await signOut(currentAuth);
  }
  if (typeof window !== 'undefined') {
    localStorage.removeItem('catatuang_demo_user');
  }
};

/**
 * Menyimpan API Key ke localStorage
 */
export const saveCustomApiKey = (apiKey: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('catatuang_firebase_api_key', apiKey.trim());
    // Reset instance app
    app = null;
    auth = null;
    initFirebase();
  }
};

/**
 * Menghapus API Key dan session tersimpan
 */
export const clearFirebaseStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('catatuang_firebase_api_key');
    localStorage.removeItem('catatuang_demo_user');
    app = null;
    auth = null;
  }
};

/**
 * Listen perubahan status autentikasi
 */
export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  const { auth: currentAuth } = initFirebase();
  if (currentAuth) {
    return onAuthStateChanged(currentAuth, callback);
  }
  callback(null);
  return () => {};
};
