// components/Header.tsx (HEADER UTAMA UNTUK SEMUA HALAMAN)
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  // Tentukan path logo Anda di folder public
  const LOGO_SRC = "/logo.png"; // Path yang telah kita koreksi

  // Warna Biru Header: #2979FF
  // Warna Hijau Connect: #00CC44

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 bg-[#2979FF] shadow-lg">
      {/* Logo Chaintificate */}
      <Link href="/" className="flex items-center space-x-2">
        {/* Logo Gambar */}
        <Image
          src={LOGO_SRC}
          alt="Chaintificate Logo"
          width={60}
          height={60}
          // Hapus background putih dan padding
          className="rounded-md"
        />

        <span className="text-white text-lg font-bold">Chaintificate</span>
      </Link>

      {/* Menu Navigasi (Teks Putih) */}
      <nav className="hidden md:flex space-x-10 text-white text-[16px] font-medium">
        <Link
          href="/"
          className="opacity-90 hover:opacity-100 transition-opacity duration-150"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="opacity-90 hover:opacity-100 transition-opacity duration-150"
        >
          Dashboard
        </Link>
        <Link
          href="/about-us"
          className="opacity-90 hover:opacity-100 transition-opacity duration-150"
        >
          About Us
        </Link>
      </nav>

      {/* Tombol Connect Wallet (Hijau Terang) */}
      <button className="flex items-center space-x-2 bg-[#00CC44] hover:bg-[#00B33A] text-white font-semibold text-sm py-2 px-4 rounded-full transition-colors duration-150 shadow-md">
        <div className="relative flex items-center justify-center">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </div>
        <span>Connect Wallet</span>
      </button>
    </header>
  );
};

export default Header;
