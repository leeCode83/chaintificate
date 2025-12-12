"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Copy,
  Check,
  Building2,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { useGetCertificateById } from "@/hooks/useStudent";

export default function CertificateDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: certificate, isLoading, error } = useGetCertificateById(id);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (certificate?.tokenUri) {
      navigator.clipboard.writeText(certificate.tokenUri);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
        <Header />
        <div className="pt-24 pb-20 flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
            </div>
            <p className="mt-6 text-lg font-semibold text-gray-700">
              Loading certificate...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
        <Header />
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="relative group inline-block mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-red-100 to-pink-100 rounded-full h-24 w-24 flex items-center justify-center mx-auto border-2 border-red-200">
                <ShieldCheck className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Certificate Not Found
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Failed to load certificate details.
            </p>
            <Link href="/dashboard/student">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl transition-all">
                Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
      <Header />

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        {/* Back Button */}
        <Link
          href="/dashboard/student"
          className="group inline-flex items-center text-gray-700 hover:text-blue-600 mb-10 transition-colors font-bold"
        >
          <div className="mr-2 p-2 rounded-lg bg-white/80 backdrop-blur-xl border border-blue-200 group-hover:border-blue-400 transition-all shadow-sm group-hover:shadow-md">
            <ArrowLeft className="h-5 w-5" />
          </div>
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Image */}
          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Card className="relative overflow-hidden border-2 border-blue-200 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl">
                <CardContent className="p-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 flex items-center justify-center min-h-[500px]">
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full h-full object-contain max-h-[700px] p-8 transition-transform hover:scale-105 duration-500"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="relative inline-block mb-4">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-20"></div>
                        <ShieldCheck className="relative h-32 w-32 text-blue-300" />
                      </div>
                      <span className="text-lg font-bold text-blue-400">
                        No Preview Available
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg
                  ${
                    certificate.collection.type === "Degree"
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  }`}
                >
                  {certificate.collection.type || "Certificate"}
                </span>
                <span className="flex items-center text-sm font-bold text-gray-600 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-full border-2 border-blue-200 shadow-md">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  Issued {new Date(certificate.createdAt).toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
                {certificate.name}
              </h1>

              <div className="flex items-center gap-3 text-xl text-gray-700 font-bold bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border-2 border-blue-200">
                <Building2 className="w-6 h-6 text-blue-600" />
                Issued by{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                  {certificate.collection.institution?.name ||
                    certificate.collection.name}
                </span>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-10 rounded-3xl border-2 border-blue-200 shadow-xl space-y-4">
                <h3 className="font-black text-gray-900 text-xl flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  {certificate.collection.description ||
                    "No description provided."}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 p-10 rounded-3xl text-white shadow-2xl space-y-8 overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h3 className="font-black text-white text-2xl flex items-center gap-3 mb-8">
                    <ShieldCheck className="w-8 h-8 text-cyan-400" />
                    Blockchain Verification
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <p className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                        Token ID
                      </p>
                      <div className="font-mono text-base text-white bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                        {certificate.tokenId}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                        Collection Address
                      </p>
                      <div
                        className="font-mono text-sm text-white bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 truncate shadow-lg"
                        title={certificate.collection.address}
                      >
                        {certificate.collection.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/20">
                    <button
                      onClick={handleCopy}
                      className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
                    >
                      {copied ? (
                        <>
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-5 w-5" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://base-sepolia.blockscout.com/address/${certificate.collection.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Verify on Blockscout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
