// app/login/student/page.tsx
import React from "react";
import Link from "next/link";
import Header from "../../components/Header"; // Pastikan path impor Header sudah benar

// Ganti dengan path gambar Anda di folder public, misalnya: '/images/students.jpg'
const BACKGROUND_IMAGE_URL = "login.png";

export default function StudentLoginPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Biru */}
      <Header />

      <div className="flex min-h-[calc(100vh-69px)]">
        {/* Kolom Kiri: Background Image (50% lebar) */}
        <div className="hidden lg:block w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
          />

          {/* Gradient Lembut yang Menyatu dengan Sisi Kanan Putih */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white"></div>
        </div>

        {/* Kolom Kanan: Formulir Login (50% lebar) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-20 bg-white">
          <div className="w-full max-w-sm space-y-8">
            {" "}
            {/* Menggunakan max-w-sm agar form tidak terlalu lebar */}
            <h2 className="text-3xl font-bold text-gray-900 text-center lg:text-left">
              Login to your account
            </h2>
            <form className="mt-8 space-y-6">
              <div className="rounded-md -space-y-px">
                {/* Email/Address Input */}
                <div>
                  <input
                    type="email"
                    required
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#2979FF] focus:border-[#2979FF] focus:z-10 sm:text-base"
                    placeholder="Email Address"
                  />
                </div>
                {/* Password Input */}
                <div className="pt-4">
                  <input
                    type="password"
                    required
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#2979FF] focus:border-[#2979FF] focus:z-10 sm:text-base"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Tombol Login */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-[#2979FF] hover:bg-[#2563D0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2979FF]"
                >
                  Login
                </button>
              </div>

              {/* Link Create Account */}
              <div className="text-center text-sm pt-2">
                <Link
                  href="/register/student"
                  className="font-medium text-[#2979FF] hover:text-[#2563D0]"
                >
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
