"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Search, Filter, Download, ArrowLeft, MoreHorizontal } from "lucide-react";

// --- MOCK DATA ---
const certificateTypeDetails = {
    id: "type-001",
    name: "Saving the World 101",
    description: "A workshop for aspiring heroes to learn the basics of global defense.",
    totalIssued: 150,
    createdDate: "2023-01-15",
    image: "https://img.freepik.com/free-vector/gradient-certificate-template_23-2149436222.jpg",
};

const issuedCertificates = [
    { id: "cert-001", recipient: "Peter Parker", issueDate: "2024-10-01", status: "Active", txHash: "0x123...abc" },
    { id: "cert-002", recipient: "Tony Stark", issueDate: "2024-10-02", status: "Active", txHash: "0x456...def" },
    { id: "cert-003", recipient: "Bruce Banner", issueDate: "2024-10-05", status: "Active", txHash: "0x789...ghi" },
    { id: "cert-004", recipient: "Natasha Romanoff", issueDate: "2024-10-10", status: "Revoked", txHash: "0xabc...123" },
    { id: "cert-005", recipient: "Steve Rogers", issueDate: "2024-10-12", status: "Active", txHash: "0xdef...456" },
];

export default function CertificateTypeDetailPage() {
    const params = useParams();
    const id = params.id;

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Breadcrumb / Back Navigation */}
                <div className="mb-6">
                    <Link href="/institute/dashboard" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                    </Link>
                </div>

                {/* Page Header & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{certificateTypeDetails.name}</h1>
                        <p className="text-gray-500 mt-1">Manage issued certificates for this type.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" /> Export Data
                        </Button>
                        <Link href="/institute/create-certificate">
                            <Button className="bg-[#0092FF] hover:bg-[#007ACF] text-white">
                                Issue New Certificate
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stats / Info Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-48 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={certificateTypeDetails.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Total Issued</p>
                            <p className="text-2xl font-bold text-gray-900">{certificateTypeDetails.totalIssued}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Created Date</p>
                            <p className="text-lg font-medium text-gray-900">{certificateTypeDetails.createdDate}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Description</p>
                            <p className="text-sm text-gray-600 line-clamp-3">{certificateTypeDetails.description}</p>
                        </div>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-grow max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search by recipient name or wallet..." className="pl-10 bg-white" />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" /> Filter
                    </Button>
                </div>

                {/* Certificates Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Recipient</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Issue Date</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Transaction Hash</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {issuedCertificates.map((cert) => (
                                    <tr key={cert.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mr-3">
                                                    {cert.recipient.charAt(0)}
                                                </div>
                                                <span className="font-medium text-gray-900">{cert.recipient}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {cert.issueDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${cert.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                {cert.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                                            {cert.txHash}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link href={`/student/certificate/${cert.id}`}>
                                                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-900">
                                                    Details
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination (Mock) */}
                    <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                        <span className="text-sm text-gray-500">Showing 1 to 5 of 150 entries</span>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" disabled>Previous</Button>
                            <Button variant="outline" size="sm">Next</Button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
