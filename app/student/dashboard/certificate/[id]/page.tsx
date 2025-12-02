"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "../../../../components/Header";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Share2, CheckCircle } from "lucide-react";

export default function CertificateDetailPage() {
    const params = useParams();
    const id = params.id;

    // Mock Data - In a real app, fetch based on ID
    const certificateData = {
        id: id,
        title: "Sertifikat Apalah",
        recipient: "Peter Parker",
        date: "2025-10-01",
        issuer: "Avengers",
        imageUrl: "https://img.freepik.com/free-vector/gradient-certificate-template_23-2149436222.jpg", // Using the same mock image
        description: "This certificate is awarded to participants who have successfully completed the 'Saving the World 101' workshop. It demonstrates proficiency in teamwork, strategy, and heroic deeds. Holders of this certificate have proven their ability to handle high-pressure situations and contribute to global safety.",
        issuerDescription: "The Avengers is a team of extraordinary individuals, either with superpowers or other special characteristics, assembled to protect Earth from threats too great for any one hero to handle. We are committed to recognizing and training the next generation of heroes."
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Certificate Detail</h1>
                    <p className="text-gray-500 mt-1">View and manage your blockchain certificate</p>
                </div>

                <div className="space-y-8">
                    {/* Main Content Card */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                        {/* Top Part: Image and Form */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

                            {/* Left Column: Certificate Image */}
                            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <div className="relative w-full aspect-[4/3] max-w-lg shadow-2xl rounded-md overflow-hidden">
                                    {/* Using an img tag for simplicity in this mockup, Next.js Image is better for prod */}
                                    <img
                                        src={certificateData.imageUrl}
                                        alt="Certificate Preview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Column: Details Form */}
                            <div className="flex flex-col justify-center space-y-6">

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Certificate Name</label>
                                    <Input
                                        value={certificateData.title}
                                        readOnly
                                        className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Recipient Name</label>
                                    <Input
                                        value={certificateData.recipient}
                                        readOnly
                                        className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Issue Date</label>
                                    <Input
                                        value={certificateData.date}
                                        readOnly
                                        className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Issuer Organization</label>
                                    <Input
                                        value={certificateData.issuer}
                                        readOnly
                                        className="bg-white border-gray-300 text-gray-800 font-medium h-12"
                                    />
                                </div>

                                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                    <Button className="flex-1 bg-[#007BFF] hover:bg-[#0056b3] text-white font-bold py-6 text-lg shadow-md transition-all">
                                        <Share2 className="mr-2 h-5 w-5" /> Share
                                    </Button>
                                    <Button className="flex-1 bg-[#007BFF] hover:bg-[#0056b3] text-white font-bold py-6 text-lg shadow-md transition-all">
                                        <CheckCircle className="mr-2 h-5 w-5" /> Verification
                                    </Button>
                                </div>

                            </div>
                        </div>

                        {/* Bottom Part: Descriptions */}
                        <div className="space-y-8 border-t pt-8">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3">About this Certificate</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {certificateData.description}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3">About the Issuer</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {certificateData.issuerDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
