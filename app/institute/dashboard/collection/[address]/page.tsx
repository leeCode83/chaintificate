"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "../../../../components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { useGetCollectionDetail } from "../../../../../hooks/useCertificate";
import { Calendar, FileText, Hash, ArrowLeft, Copy, Plus } from "lucide-react";
import Link from "next/link";

export default function CollectionDetailPage() {
    const params = useParams();
    const address = params.address as string;
    const { collection, isLoading, error } = useGetCollectionDetail(address);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // You might want to add a toast notification here
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
                <Header />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex items-center justify-center h-64">
                        <p className="text-gray-500">Loading collection details...</p>
                    </div>
                </main>
            </div>
        );
    }

    if (error || !collection) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
                <Header />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col items-center justify-center h-64 gap-4">
                        <p className="text-red-500">Error: {error || "Collection not found"}</p>
                        <Link href="/institute/dashboard">
                            <Button variant="outline">Back to Dashboard</Button>
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/institute/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Dashboard
                    </Link>
                </div>

                {/* Header Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{collection.name}</h1>
                            <p className="text-gray-500 max-w-2xl">{collection.description}</p>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-blue-900">
                                {collection.certificates?.length || 0} Certificates Issued
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Link href={`/institute/create/collection/${address}`}>
                            <Button className="bg-[#0092FF] hover:bg-[#007ACF] text-white font-semibold px-6 py-2 rounded-lg shadow-md flex items-center gap-2">
                                <Plus className="h-5 w-5" /> Mint New Certificate
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contract Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                <Hash className="h-5 w-5 text-gray-500" />
                                Contract Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500 block mb-1">Contract Address</label>
                                <div className="flex items-center gap-2">
                                    <code className="bg-gray-100 px-3 py-1.5 rounded text-sm font-mono text-gray-800 break-all">
                                        {collection.address}
                                    </code>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-gray-500 hover:text-gray-700"
                                        onClick={() => copyToClipboard(collection.address)}
                                    >
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Metadata */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-gray-500" />
                                Collection Metadata
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500 block mb-1">Created At</label>
                                <p className="text-gray-900">
                                    {new Date(collection.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 block mb-1">Collection ID</label>
                                <p className="text-gray-900 font-mono text-sm">{collection.id}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
