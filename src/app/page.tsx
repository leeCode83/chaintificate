// app/page.tsx
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";

export default function HomePage() {
  return (
    // Background keseluruhan halaman (sesuai bagian bawah gambar)
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* 1. Header (Navigation Bar) */}
      <Header />

      <main>
        {/* 2. Hero Section (Welcome & Search) */}
        {/* Catatan: Karena Header tidak memiliki border-bottom di gambar, biarkan HeroSection 
           mengambil background light gray untuk memisahkannya secara visual. */}
        <HeroSection />

        {/* 3. FAQ Section */}
        <FAQSection />
      </main>
    </div>
  );
}
