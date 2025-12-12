// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WalletRedirect from "./WalletRedirect";

const Header: React.FC = () => {
  const LOGO_SRC = "/logo.png";

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 border-b border-blue-400/30 shadow-2xl shadow-blue-500/20">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></div>

      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Left Side: Logo + Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center relative group">
            {/* Multi-layer glow */}
            <div className="absolute -inset-3 bg-white/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute -inset-2 bg-white/20 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
            {/* Logo without background */}
            <Image
              src={LOGO_SRC}
              alt="Chaintificate Logo"
              width={50}
              height={50}
              className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-2 text-sm font-bold">
            {[
              { href: "/", label: "Home" },
              { href: "/dashboard", label: "Dashboard" },
              { href: "/job-vacancies", label: "Job Vacancies" },
              { href: "/about-us", label: "About Us" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="relative px-5 py-2.5 text-white hover:text-cyan-100 transition-colors duration-300 group/link"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border border-white/0 group-hover/link:border-white/30 rounded-xl transition-all duration-300"></div>

                <span className="relative z-10 uppercase tracking-wider">
                  {link.label}
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover/link:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            {/* Button glow effects */}
            <div className="absolute -inset-2 bg-white/30 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-white/20 rounded-full blur opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative">
              <ConnectButton />
            </div>
          </div>
          <WalletRedirect />
        </div>
      </div>
    </header>
  );
};

export default Header;
