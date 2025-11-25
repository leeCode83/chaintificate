"use client";

import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Plus, FileText, Users, Activity, ArrowRight } from "lucide-react";

// --- MOCK DATA ---
const statsData = [
    {
        title: "Total Certificates Issued",
        value: "1,234",
        icon: <FileText className="h-6 w-6 text-blue-600" />,
        trend: "+12% from last month",
    },
    {
        title: "Active Certificate Types",
        value: "8",
        icon: <Activity className="h-6 w-6 text-green-600" />,
        trend: "2 new types added",
    },
    {
        title: "Total Recipients",
        value: "850",
        icon: <Users className="h-6 w-6 text-purple-600" />,
        trend: "+45 this week",
    },
];

const certificateTypes = [
    {
        id: "type-001",
        name: "Saving the World 101",
        description: "A workshop for aspiring heroes to learn the basics of global defense.",
        totalIssued: 150,
        lastIssued: "2024-10-01",
        image: "https://img.freepik.com/free-vector/gradient-certificate-template_23-2149436222.jpg",
    },
    {
        id: "type-002",
        name: "Advanced Shield Throwing",
        description: "Master class on aerodynamics and vibranium physics.",
        totalIssued: 45,
        lastIssued: "2024-09-20",
        image: "https://img.freepik.com/free-vector/diploma-template-design_1017-19725.jpg",
    },
    {
        id: "type-003",
        name: "Web3 Development Bootcamp",
        description: "Intensive training on blockchain, smart contracts, and dApps.",
        totalIssued: 300,
        lastIssued: "2024-11-15",
        image: "https://img.freepik.com/free-vector/modern-certificate-template_23-2149204899.jpg",
    },
];

const StatCard: React.FC<{
    title: string;
    value: string;
    icon: React.ReactNode;
    trend: string;
}> = ({ title, value, icon, trend }) => (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6 flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
                <p className="text-xs text-green-600 mt-1 font-medium">{trend}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-full">
                {icon}
            </div>
        </CardContent>
    </Card>
);

export default function InstituteDashboardPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Institute Dashboard</h1>
                        <p className="text-gray-500 mt-1">Manage your issued certificates and track performance.</p>
                    </div>
                    <Link href="/institute/create-certificate">
                        <Button className="bg-[#0092FF] hover:bg-[#007ACF] text-white font-semibold px-6 py-6 rounded-lg shadow-md flex items-center gap-2">
                            <Plus className="h-5 w-5" /> Create New Certificate
                        </Button>
                    </Link>
                </div>

                {/* Monitoring Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Certificate Types List */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Certificate Types</h2>
                        <Link href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                            View All <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {certificateTypes.map((type) => (
                            <Card key={type.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="w-full md:w-48 h-48 md:h-auto relative bg-gray-100">
                                        <img
                                            src={type.image}
                                            alt={type.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                                                    {type.totalIssued} Issued
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-4 line-clamp-2">{type.description}</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-4 md:mt-0">
                                            <p className="text-sm text-gray-500">
                                                Last issued: <span className="font-medium text-gray-700">{type.lastIssued}</span>
                                            </p>
                                            <Link href={`/institute/certificate-type/${type.id}`}>
                                                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}
