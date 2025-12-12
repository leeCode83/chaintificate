"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import {
  FileText,
  Award,
  Calendar,
  TrendingUp,
  ExternalLink,
  Plus,
  Users,
  Activity,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { useGetAllCertificateCollection } from "../../../hooks/useCertificate";

const CollectionCard: React.FC<{
  address: string;
  name: string;
  description: string;
  count: number;
  createdAt: string;
  type: string;
  index: number;
}> = ({ address, name, description, count, createdAt, type, index }) => {
  return (
    <Card
      className="group relative overflow-hidden border-2 border-blue-400/30 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <CardContent className="p-0 relative z-10">
        <div className="flex flex-col sm:flex-row h-full">
          {/* Icon/Image Section */}
          <div className="sm:w-32 h-32 sm:h-auto relative bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-blue-100">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-lg opacity-30"></div>
              <div className="relative p-4 rounded-full bg-white shadow-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {type === "Degree" ? (
                  <Award className="w-8 h-8" />
                ) : (
                  <FileText className="w-8 h-8" />
                )}
              </div>
            </div>
            <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {type}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all line-clamp-2">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium flex items-center mt-1 line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  Created {new Date(createdAt).toLocaleDateString()}
                </span>
                <span className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1.5 rounded-full font-bold shadow-md">
                  <Users className="w-4 h-4 mr-2" />
                  {count} Issued
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-100 flex justify-end">
              <Link href={`/collection/${address}`}>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors group/btn">
                  View Details
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ReactNode;
  subtitle?: string;
  gradient: string;
  delay?: number;
}> = ({ title, value, icon, subtitle, gradient, delay = 0 }) => (
  <div
    className={`relative group animate-fade-in-up rounded-3xl p-8 text-white shadow-xl transform transition-all hover:scale-105 duration-500 overflow-hidden ${gradient}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute -inset-1 bg-white/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg">
          {icon}
        </div>
        {subtitle && (
          <span className="bg-white/20 backdrop-blur-xl px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
            {subtitle}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-4xl font-black mb-2">{value}</h3>
        <p className="text-white/90 text-sm font-semibold uppercase tracking-wider">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default function InstituteDashboardPage() {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState<"All" | "Certificate" | "Degree">(
    "All"
  );

  const { collections, pagination, isLoading, error } =
    useGetAllCertificateCollection(page, 10, activeTab);

  const totalIssued = useMemo(() => {
    if (!collections) return 0;
    return collections.reduce(
      (acc: number, curr: any) => acc + (curr._count?.certificates || 0),
      0
    );
  }, [collections]);

  const activeTypes = pagination?.total || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans pb-20">
      <Header />

      {/* Added mt-20 to push content below the fixed header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 animate-fade-in-down gap-4">
          <div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-3">
              Institute{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-50"></span>
                <span className="relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl">
              Manage your academic collections, issue credentials, and track
              institutional performance on the blockchain.
            </p>
          </div>
          <Link href="/collection/create">
            <Button className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 transform hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <Plus className="h-5 w-5 relative z-10" />
              <span className="relative z-10 uppercase tracking-wider">
                Create Collection
              </span>
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <StatCard
            title="Total Certificates Issued"
            value={totalIssued}
            icon={<FileText className="h-7 w-7 text-white" />}
            gradient="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700"
            delay={0}
            subtitle="All Collections"
          />
          <StatCard
            title="Active Collections"
            value={activeTypes}
            icon={<Activity className="h-7 w-7 text-white" />}
            gradient="bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700"
            delay={100}
            subtitle="Total Types"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Collection List */}
          <div
            className="lg:col-span-2 space-y-8 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
              <h2 className="text-3xl font-black text-gray-900">
                My Collections
              </h2>

              <div className="flex p-1 bg-white/80 backdrop-blur-xl rounded-2xl border border-blue-200 shadow-lg self-start sm:self-auto">
                {(["All", "Certificate", "Degree"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setPage(1);
                    }}
                    className={`
                                                                    px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                                                                    ${
                                                                      activeTab ===
                                                                      tab
                                                                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                                                                        : "text-gray-600 hover:text-gray-900 hover:bg-blue-50"
                                                                    }
                                                                  `}
                  >
                    {tab === "All" ? "All" : tab + "s"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {isLoading ? (
                [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl animate-pulse"
                  />
                ))
              ) : error ? (
                <div className="text-center py-12 bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-red-200 shadow-xl">
                  <p className="text-red-600 font-bold text-lg">
                    Error: {error}
                  </p>
                </div>
              ) : collections.length > 0 ? (
                <>
                  {collections.map((collection: any, index: number) => (
                    <CollectionCard
                      key={collection.address}
                      address={collection.address}
                      name={collection.name}
                      description={collection.description}
                      count={collection._count?.certificates || 0}
                      createdAt={collection.createdAt}
                      type={collection.type}
                      index={index}
                    />
                  ))}

                  {pagination && pagination.totalPages > 1 && (
                    <div className="flex justify-center mt-6 gap-3">
                      <Button
                        variant="outline"
                        disabled={pagination.page <= 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className="rounded-xl border-2 border-blue-400 text-blue-700 hover:bg-blue-50 font-bold"
                      >
                        Previous
                      </Button>
                      <span className="flex items-center px-6 text-sm font-bold text-gray-700 bg-white/80 backdrop-blur-xl rounded-xl border-2 border-blue-200">
                        Page {pagination.page} of {pagination.totalPages}
                      </span>
                      <Button
                        variant="outline"
                        disabled={pagination.page >= pagination.totalPages}
                        onClick={() => setPage((p) => p + 1)}
                        className="rounded-xl border-2 border-blue-400 text-blue-700 hover:bg-blue-50 font-bold"
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20 bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-dashed border-blue-300 shadow-xl">
                  <div className="relative inline-block mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full h-24 w-24 flex items-center justify-center mx-auto">
                      <FileText className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    No collections found
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {activeTab !== "All"
                      ? `No ${activeTab.toLowerCase()} collections found.`
                      : "Create your first collection to get started."}
                  </p>
                  {activeTab === "All" && (
                    <Link href="/collection/create">
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-3 rounded-xl hover:shadow-xl transition-all">
                        Create Collection
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative group bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 rounded-3xl p-8 text-white shadow-xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-3">Verified Issuer</h3>
                <p className="text-cyan-100 text-sm mb-4 leading-relaxed">
                  As a verified institute, all certificates you issue are
                  cryptographically signed and permanently recorded on the
                  blockchain.
                </p>
                <button className="text-xs font-bold text-cyan-300 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2">
                  Learn More <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400 rounded-full opacity-20 blur-3xl" />
            </div>

            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-blue-200">
              <h3 className="font-black text-gray-900 text-lg mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Quick Tips
              </h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="font-medium">
                    Use clear, descriptive names for your collections.
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="font-medium">
                    Certificates are immutable once issued. Double check
                    details.
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="font-medium">
                    You can verify any certificate using the public verification
                    tool.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
