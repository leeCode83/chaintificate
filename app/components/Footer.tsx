// components/Footer.tsx
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const LOGO_SRC = "/logo.png";

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-cyan-800 to-blue-900 border-t border-cyan-400/30 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo section */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              {/* Multi-layer glow */}
              <div className="absolute -inset-3 bg-white/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              <div className="absolute -inset-2 bg-white/20 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
              {/* Logo without background */}
              <Image
                src={LOGO_SRC}
                alt="Chaintificate Logo"
                width={50}
                height={50}
                className="relative z-10 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="relative group">
            <div className="text-cyan-100 text-sm text-center transition-colors duration-300 group-hover:text-white">
              © 2025 Chaintificate.{" "}
              <span className="text-white font-semibold">
                All rights reserved.
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-cyan-100 text-sm font-medium">
            {["Privacy", "Terms", "Contact"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="relative group/link transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{link}</span>
                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover/link:w-full transition-all duration-300"></div>
                {/* Hover glow */}
                <div className="absolute -inset-2 bg-white/20 rounded blur opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-12 pt-8 border-t border-cyan-400/20">
          <div className="flex items-center justify-center gap-2 text-cyan-200 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span>
              System Status:{" "}
              <span className="text-green-300 font-semibold">Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
