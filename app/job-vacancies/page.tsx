"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Search,
  MapPin,
  Bookmark,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useJobVacancy } from "@/hooks/useJobVacancy";

const FilterSection = ({
  title,
  options,
  selectedOption,
  onSelect,
}: {
  title: string;
  options: string[];
  selectedOption: string | undefined;
  onSelect: (option: string) => void;
}) => (
  <div className="mb-6">
    <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
      {title}
    </h3>
    <div className="space-y-3">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div
            className={`relative w-5 h-5 border-2 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-all duration-300 ${
              selectedOption === option
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-600 shadow-lg shadow-blue-500/30"
                : "border-gray-300 bg-white"
            }`}
            onClick={() => onSelect(option === selectedOption ? "" : option)}
          >
            {selectedOption === option && (
              <div className="w-2 h-2 bg-white rounded-full" />
            )}
          </div>
          <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors">
            {option}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default function JobMarketPage() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const { data, isLoading, isError } = useJobVacancy(
    page,
    selectedCategory,
    selectedType
  );

  const handlePrevPage = () => setPage((prev) => Math.max(1, prev - 1));
  const handleNextPage = () => {
    if (data?.meta && page < data.meta.lastPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === "" ? undefined : category);
    setPage(1);
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type === "" ? undefined : type);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans pb-20">
      <Header />

      {/* Search Bar Section */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 border-b border-cyan-400/30 sticky top-[73px] z-40 shadow-xl">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow group">
              <div className="absolute -inset-0.5 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-600 z-10" />
              <Input
                placeholder="Cari Nama Pekerjaan, Skill, dan Perusahaan"
                className="relative pl-12 bg-white/95 backdrop-blur-xl border-2 border-blue-200 h-14 text-base font-medium rounded-2xl focus:border-cyan-400 transition-all shadow-lg"
              />
            </div>
            <div className="relative flex-grow md:max-w-md group">
              <div className="absolute -inset-0.5 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-600 z-10" />
              <Input
                placeholder="All Cities/Provinces"
                className="relative pl-12 bg-white/95 backdrop-blur-xl border-2 border-blue-200 h-14 text-base font-medium rounded-2xl focus:border-cyan-400 transition-all shadow-lg"
              />
            </div>
            <Button className="relative group overflow-hidden bg-white text-blue-700 hover:text-white font-black px-10 h-14 text-base rounded-2xl shadow-xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 uppercase tracking-wider">
                CARI
              </span>
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black text-gray-900 mb-8">
          Lowongan Kerja{" "}
          <span className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-50"></span>
            <span className="relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Terbaru
            </span>
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar: Filters */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-blue-200 p-8 shadow-xl sticky top-32">
              <h2 className="text-xl font-black text-gray-900 mb-6 pb-4 border-b-2 border-blue-100">
                Filters
              </h2>
              <FilterSection
                title="Kategori"
                options={[
                  "Technology",
                  "Business",
                  "Health",
                  "Education",
                  "Entertainment",
                ]}
                selectedOption={selectedCategory}
                onSelect={handleCategorySelect}
              />
              <hr className="my-6 border-blue-100" />
              <FilterSection
                title="Tipe Pekerjaan"
                options={["FullTime", "PartTime"]}
                selectedOption={selectedType}
                onSelect={handleTypeSelect}
              />
            </div>
          </div>

          {/* Right Content: Job List */}
          <div className="lg:col-span-3 space-y-6">
            {isLoading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
                <p className="mt-4 text-gray-700 font-semibold">
                  Loading jobs...
                </p>
              </div>
            ) : isError ? (
              <div className="text-center py-20 bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-red-200 shadow-xl">
                <p className="text-red-600 font-bold text-lg">
                  Error loading jobs.
                </p>
              </div>
            ) : (
              <>
                {data?.data.map((job) => (
                  <div
                    key={job.id}
                    className="group relative bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-blue-200 hover:border-blue-400 p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                          {job.position}
                        </h2>
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full font-black text-sm whitespace-nowrap shadow-lg">
                          {job.salary || "Negotiable"}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-200">
                          {job.category}
                        </span>
                        <span className="bg-cyan-100 text-cyan-700 px-3 py-1.5 rounded-full text-xs font-bold border border-cyan-200">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-200">
                        <CheckSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-black text-blue-900 uppercase tracking-wider mb-1">
                            Syarat Sertifikat / Ijazah
                          </p>
                          <p className="text-sm text-gray-700 font-medium">
                            Lihat detail untuk persyaratan
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur opacity-40"></div>
                          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center border-2 border-blue-200">
                            <span className="text-xs font-bold text-blue-600">
                              Logo
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-blue-600 hover:underline">
                            {job.companyName}
                          </p>
                          <p className="text-xs text-gray-600 flex items-center gap-1 font-medium">
                            <MapPin className="h-3 w-3" /> {job.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-6 pt-6 border-t-2 border-blue-100">
                        <p className="text-xs text-blue-600 font-bold">
                          Posted: {new Date(job.createdAt).toLocaleDateString()}
                        </p>
                        <Bookmark className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className="flex items-center gap-2 rounded-xl border-2 border-blue-400 text-blue-700 hover:bg-blue-50 font-bold px-6 py-3"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </Button>
                  <span className="text-sm font-bold text-gray-700 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-xl border-2 border-blue-200">
                    Page {page} of {data?.meta.lastPage || 1}
                  </span>
                  <Button
                    variant="outline"
                    onClick={handleNextPage}
                    disabled={!data?.meta || page >= data.meta.lastPage}
                    className="flex items-center gap-2 rounded-xl border-2 border-blue-400 text-blue-700 hover:bg-blue-50 font-bold px-6 py-3"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
