// app/register/student/page.tsx
import React from "react";
import Link from "next/link";
import Header from "../../components/Header"; // Sesuaikan path jika perlu

const BACKGROUND_IMAGE_URL = "login.png";

export default function StudentRegisterPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-69px)]">
        <h1 className="text-3xl font-bold text-gray-800">
          Student Registration
        </h1>
        <p className="text-gray-600 mt-4">
          Halaman ini masih dalam tahap pengembangan.
        </p>
        <div className="mt-8">
          <Link
            href="/login/student"
            className="text-[#2979FF] hover:underline"
          >
            Kembali ke Login
          </Link>
        </div>
      </div>
    </div>
  );
}
