"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import {
  FileText,
  Award,
  Building2,
  Calendar,
  TrendingUp,
  PieChart as PieChartIcon,
  ExternalLink,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useAccount } from "wagmi";
import { useGetStudentCertificates } from "../../../hooks/useStudent";

const COLORS = ["#3B82F6", "#06B6D4", "#6366F1", "#0EA5E9", "#2563EB"];

const CertificateCard: React.FC<{
  id: string;
  imageUrl?: string;
  title: string;
  institute: string;
  date: string;
  category: string;
  index: number;
}> = ({ id, imageUrl, title, institute, date, category, index }) => {
  return (
    <Card
      className="group relative overflow-hidden border-2 border-blue-200 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <CardContent className="p-0 relative z-10">
        <div className="flex flex-col sm:flex-row h-full">
          {/* Image Section */}
          <div className="sm:w-48 h-48 sm:h-auto relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-lg opacity-30"></div>
                  <FileText className="relative w-16 h-16 text-blue-400" />
                </div>
              </div>
            )}
            <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-black shadow-lg">
              {category}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 font-bold flex items-center mt-2">
                    <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                    {institute}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-700 bg-blue-50 w-fit px-4 py-2 rounded-full border border-blue-200 font-semibold">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                Issued on {date}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-100 flex justify-end">
              <Link href={`/dashboard/student/certificate/${id}`}>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors group/btn">
                  View Credential
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

export default function StudentDashboardPage() {
  const { address } = useAccount();
  const { data, isLoading } = useGetStudentCertificates(address);

  const allCredentials = useMemo(() => {
    if (!data) return [];
    const certs = (data.certificates || []).map((c) => ({
      ...c,
      type: "Certificate",
    }));
    const degrees = (data.degrees || []).map((d) => ({ ...d, type: "Degree" }));
    return [...certs, ...degrees];
  }, [data]);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "certificate" | "degree">(
    "all"
  );

  const stats = useMemo(() => {
    if (allCredentials.length === 0)
      return { total: 0, institutions: 0, latest: "N/A" };
    const uniqueInsts = new Set(allCredentials.map((c) => c.institution)).size;
    const sortedCerts = [...allCredentials].sort(
      (a, b) =>
        new Date(b.mintingDate).getTime() - new Date(a.mintingDate).getTime()
    );
    const latestDate =
      sortedCerts.length > 0
        ? new Date(sortedCerts[0].mintingDate).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "N/A";
    return {
      total: allCredentials.length,
      institutions: uniqueInsts,
      latest: latestDate,
    };
  }, [allCredentials]);

  const chartData = useMemo(() => {
    if (allCredentials.length === 0) return [];
    const distribution: Record<string, number> = {};
    allCredentials.forEach((cert) => {
      const type = cert.type || "General";
      distribution[type] = (distribution[type] || 0) + 1;
    });
    return Object.entries(distribution).map(([name, value], index) => ({
      name,
      value,
      color: COLORS[index % COLORS.length],
    }));
  }, [allCredentials]);

  const filteredCertificates = useMemo(() => {
    if (!data) return [];
    let sourceList: typeof allCredentials = [];
    if (activeTab === "all") {
      sourceList = allCredentials;
    } else if (activeTab === "certificate") {
      sourceList = (data.certificates || []).map((c) => ({
        ...c,
        type: "Certificate",
      }));
    } else if (activeTab === "degree") {
      sourceList = (data.degrees || []).map((d) => ({ ...d, type: "Degree" }));
    }
    return sourceList
      .filter((item) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.institution.toLowerCase().includes(searchLower)
        );
      })
      .map((item) => ({
        id: item.id,
        title: item.name,
        institute: item.institution,
        date: new Date(item.mintingDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        imageUrl: item.image || item.tokenUri,
        category: item.type,
      }));
  }, [data, allCredentials, activeTab, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
      <Header />

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-3">
            Student{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-50"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Track your academic achievements, manage your digital credentials,
            and showcase your verified success on the blockchain.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            title="Total Certificates"
            value={stats.total}
            icon={<Award className="h-7 w-7 text-white" />}
            gradient="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700"
            delay={0}
            subtitle={stats.total > 0 ? "Growing" : "Start"}
          />
          <StatCard
            title="Issuing Institutions"
            value={stats.institutions}
            icon={<Building2 className="h-7 w-7 text-white" />}
            gradient="bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700"
            delay={100}
          />
          <StatCard
            title="Latest Achievement"
            value={stats.latest}
            icon={<TrendingUp className="h-7 w-7 text-white" />}
            gradient="bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-800"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div
            className="lg:col-span-2 space-y-8 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
              <h2 className="text-3xl font-black text-gray-900">
                My Credentials
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
                <div className="flex p-1 bg-white/80 backdrop-blur-xl rounded-2xl border border-blue-200 shadow-lg self-start sm:self-auto">
                  {(["all", "certificate", "degree"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 capitalize
                        ${
                          activeTab === tab
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                            : "text-gray-600 hover:text-gray-900 hover:bg-blue-50"
                        }`}
                    >
                      {tab === "all" ? "All" : tab + "s"}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64 group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-12 pr-4 py-3 border-2 border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full transition-all bg-white/90 backdrop-blur-xl font-medium shadow-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
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
              ) : filteredCertificates.length > 0 ? (
                filteredCertificates.map((cert, index) => (
                  <CertificateCard key={cert.id} {...cert} index={index} />
                ))
              ) : (
                <div className="text-center py-20 bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-dashed border-blue-300 shadow-xl">
                  <div className="relative inline-block mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full h-24 w-24 flex items-center justify-center mx-auto">
                      <FileText className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    No certificates found
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {searchTerm
                      ? "Try adjusting your search terms."
                      : "You haven't earned any certificates yet."}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Card className="border-2 border-blue-200 shadow-xl bg-white/90 backdrop-blur-xl overflow-hidden rounded-3xl">
              <CardHeader className="border-b-2 border-blue-100 pb-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-xl font-black text-gray-900 flex items-center">
                  <PieChartIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Credential Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {chartData.length > 0 ? (
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            borderRadius: "16px",
                            border: "2px solid #DBEAFE",
                            boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)",
                          }}
                        />
                        <Legend
                          verticalAlign="bottom"
                          height={36}
                          iconType="circle"
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-64 flex items-center justify-center text-gray-400 text-sm font-semibold">
                    No data to display
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="relative group bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 rounded-3xl p-8 text-white shadow-xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-3">Blockchain Verified</h3>
                <p className="text-cyan-100 text-sm mb-4 leading-relaxed">
                  Your certificates are secured on the blockchain, ensuring they
                  are tamper-proof and verifiable instantly.
                </p>
                <button className="text-xs font-bold text-cyan-300 hover:text-white transition-colors uppercase tracking-wider">
                  Learn more →
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400 rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
