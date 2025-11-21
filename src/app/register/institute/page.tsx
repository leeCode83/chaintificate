// app/login/institute/page.tsx
import React from "react";
import Header from "../../components/Header";

// Ganti dengan URL gambar institusi yang sebenarnya
const BACKGROUND_IMAGE_URL = "/institute.png";

export default function InstituteRegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Biru Solid */}
      <Header />

      {/* 2. Container utama untuk layout 2 kolom */}
      <div className="flex min-h-[calc(100vh-69px)]">
        {/* Kiri: Bagian Form Registrasi Institute */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            {/* Judul dan Teks harus Gelap */}
            <h1 className="text-3xl font-bold mb-8 text-gray-800 text-left">
              Register your Institute
            </h1>

            <form>
              <input
                type="text"
                placeholder="Institute Name"
                className="w-full p-3 border border-gray-300 placeholder-gray-600 text-gray-800 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              />

              <textarea
                placeholder="Description"
                rows={3}
                className="w-full p-3 border border-gray-300 placeholder-gray-600 text-gray-800 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 resize-none"
              ></textarea>

              <input
                type="text"
                placeholder="Wallet"
                className="w-full p-3 border border-gray-300 placeholder-gray-600 text-gray-800 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              />

              <input
                type="text"
                placeholder="Contact"
                className="w-full p-3 border border-gray-300 placeholder-gray-600 text-gray-800 rounded-lg mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold p-3 rounded-lg hover:bg-blue-600 transition duration-150"
              >
                Create
              </button>
            </form>
          </div>
        </div>

        {/* Kanan: Bagian Gambar Latar Belakang (50% lebar) */}
        <div className="hidden lg:block w-1/2 relative">
          {" "}
          {/* Hapus bg-gray-100 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
          ></div>
          {/*
            REVISI GRADIENT: Menggunakan gradasi yang lebih soft (via-transparent) 
            dan hanya memudar dari kanan ke tengah (left).
          */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-transparent to-white"></div>
        </div>
      </div>
    </div>
  );
}
