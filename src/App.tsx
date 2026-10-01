import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Pricing } from './components/Pricing';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { AuthUserProfile } from './types';
import { subscribeToAuthChanges, logoutFromFirebase } from './services/firebase';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AuthUserProfile | null>(null);

  // Periksa status autentikasi dari Firebase onAuthStateChanged & local storage
  useEffect(() => {
    // Cek jika ada demo user yang tersimpan
    const savedDemoUser = localStorage.getItem('catatuang_demo_user');
    if (savedDemoUser) {
      try {
        setCurrentUser(JSON.parse(savedDemoUser));
      } catch (e) {
        // Abaikan jika parsing gagal
      }
    }

    // Subscribe ke Firebase Auth
    const unsubscribe = subscribeToAuthChanges((firebaseUser) => {
      if (firebaseUser) {
        const profile: AuthUserProfile = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL
        };
        setCurrentUser(profile);
      }
    });

    // Otomatis buka modal login jika hash URL mengandung #login
    if (window.location.hash === '#login') {
      setIsLoginModalOpen(true);
    }

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLoginSuccess = (user: AuthUserProfile) => {
    setCurrentUser(user);
    localStorage.setItem('catatuang_demo_user', JSON.stringify(user));
  };

  const handleLogout = async () => {
    await logoutFromFirebase();
    setCurrentUser(null);
    localStorage.removeItem('catatuang_demo_user');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-200 selection:text-emerald-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header & Navigasi */}
      <Navbar
        onOpenLogin={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section dengan Mockup Smartphone Interaktif */}
        <Hero onOpenLogin={() => setIsLoginModalOpen(true)} />

        {/* Section Fitur Utama */}
        <Features onOpenLogin={() => setIsLoginModalOpen(true)} />

        {/* Section Mengapa Memilih CatatUang & Laporan Visual */}
        <WhyChooseUs />

        {/* Section Paket Harga */}
        <Pricing onOpenLogin={() => setIsLoginModalOpen(true)} />

        {/* Section Edukasi & Blog */}
        <BlogSection />

        {/* Section FAQ */}
        <FaqSection />

        {/* Section CTA Penutup */}
        <CtaBanner onOpenLogin={() => setIsLoginModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Autentikasi Firebase Google Sign-In */}
      <AuthModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
