"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "../../../components/Header";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Share2, ExternalLink } from "lucide-react";
import { useGetCertificateById } from "@/hooks/useStudent";

export default function CertificateDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: certificate, isLoading, error } = useGetCertificateById(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
        <Header />
        {/* Layout Fix applied to loading state */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </main>
      </div>
    );
  }

  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
        <Header />
        {/* Layout Fix applied to error state */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex flex-col justify-center items-center">
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-4">
            <span className="font-bold block mb-1">
              Error loading certificate
            </span>
            <span>
              {error ? (error as Error).message : "Certificate not found"}
            </span>
          </div>
        </main>
      </div>
    );
  }

  const studentName = (certificate as any).student?.name || "Unknown Recipient";
  const issuerName =
    certificate.collection?.institution?.name || "Unknown Issuer";
  const blockscoutUrl = `https://base-sepolia.blockscout.com/address/${certificate.collection.address}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
      <Header />

      {/* Layout Fix: pt-24 pb-20 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Certificate Detail
          </h1>
          <p className="text-gray-500 mt-1">
            View blockchain certificate details
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            {/* Top Part: Image and Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column: Certificate Image */}
              <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="relative w-full aspect-[4/3] max-w-lg shadow-2xl rounded-md overflow-hidden">
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                      No Image Available
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Details Form */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Certificate Name
                  </label>
                  <Input
                    value={certificate.name}
                    readOnly
                    className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Recipient Name
                  </label>
                  <Input
                    value={studentName}
                    readOnly
                    className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Issue Date
                  </label>
                  <Input
                    value={new Date(certificate.createdAt).toLocaleDateString()}
                    readOnly
                    className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Issuer Organization
                  </label>
                  <Input
                    value={issuerName}
                    readOnly
                    className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                  />
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open(blockscoutUrl, "_blank")}
                    className="flex-1 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold py-6 text-lg shadow-md transition-all"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" /> View on Blockscout
                  </Button>
                  {/* Share button placeholder */}
                  <Button className="flex-1 bg-[#007BFF] hover:bg-[#0056b3] text-white font-bold py-6 text-lg shadow-md transition-all">
                    <Share2 className="mr-2 h-5 w-5" /> Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Part: Descriptions */}
            <div className="space-y-8 border-t pt-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  About this Certificate
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {certificate.collection?.description ||
                    "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
