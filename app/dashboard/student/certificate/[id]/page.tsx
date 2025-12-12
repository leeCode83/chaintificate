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
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans pb-20">
        <Header />
        {/* Added mt-20 to clear header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans pb-20">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20 text-center">
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl inline-block">
            Failed to load certificate details.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans pb-20">
      <Header />

      {/* Added mt-20 to push content below fixed header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20 animate-fade-in-up">
        {/* Back Button */}
        <Link
          href="/dashboard/student"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Image */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-2 border-blue-100 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-0 bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center min-h-[400px] relative">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full h-full object-contain max-h-[600px] p-4 transition-transform hover:scale-105 duration-500"
                  />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <ShieldCheck className="h-24 w-24 mb-4 text-blue-200" />
                    <span className="font-medium text-blue-300">
                      No Preview Available
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Details */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm
                                    ${
                                      certificate.collection.type === "Degree"
                                        ? "bg-amber-100 text-amber-700 border border-amber-200"
                                        : "bg-blue-100 text-blue-700 border border-blue-200"
                                    }`}
                >
                  {certificate.collection.type || "Certificate"}
                </span>
                <span className="flex items-center text-sm font-medium text-gray-500 bg-white/60 px-3 py-1 rounded-full border border-gray-100">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  Issued {new Date(certificate.createdAt).toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-4xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
                {certificate.name}
              </h1>

              <div className="flex items-center gap-2 text-lg text-gray-600 font-medium">
                <Building2 className="w-5 h-5 text-blue-500" />
                Issued by{" "}
                <span className="text-gray-900 font-bold">
                  {certificate.collection.institution?.name ||
                    certificate.collection.name}
                </span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-blue-100 shadow-lg space-y-4">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {certificate.collection.description ||
                  "No description provided."}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl space-y-6 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

              <div className="relative z-10">
                <h3 className="font-bold text-white text-lg flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                  Blockchain Verification
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Token ID
                    </p>
                    <div className="font-mono text-sm text-blue-100 bg-white/10 p-3 rounded-xl border border-white/5">
                      {certificate.tokenId}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Collection Address
                    </p>
                    <div
                      className="font-mono text-sm text-blue-100 bg-white/10 p-3 rounded-xl border border-white/5 truncate"
                      title={certificate.collection.address}
                    >
                      {certificate.collection.address}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={handleCopy}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 border border-white/5 backdrop-blur-sm"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copied ? "Copied!" : "Copy Link"}
                  </button>

                  <a
                    href={`https://base-sepolia.blockscout.com/address/${certificate.collection.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Verify on Blockscout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
