// components/FAQSection.tsx
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const FAQSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Complex background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                10 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6">
            <HelpCircle className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">
              FAQ
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 blur-2xl opacity-50 animate-pulse"></span>
              <span className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Questions
              </span>
            </span>
          </h2>
          <p className="text-2xl text-gray-600 font-light">
            Temukan jawaban untuk pertanyaan Chaintificate
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {[
            {
              q: "Apa Itu Chaintificate?",
              a: "Chaintificate adalah platform manajemen sertifikat dan ijazah berbasis NFT yang mempermudah institusi pendidikan & siswa dalam proses penerbitan serta penyimpanan sertifikat dalam bentuk NFT.",
            },
            {
              q: "Bagaimana Cara kerja Chaintificate?",
              a: "Chaintificate menggunakan teknologi blockchain untuk mencatat dan mengelola sertifikat sebagai NFT. Setiap sertifikat memiliki identitas unik yang diverifikasi di blockchain, memastikan keaslian dan mencegah pemalsuan.",
            },
            {
              q: "Apa keuntungan menggunakan Chaintificate?",
              a: "Keuntungan termasuk keamanan data yang tinggi, verifikasi instan, penghapusan perantara, dan kepemilikan digital yang tidak dapat disangkal atas sertifikat Anda.",
            },
            {
              q: "Apakah Chaintificate aman?",
              a: "Ya, Chaintificate dibangun di atas teknologi blockchain yang aman dan terdesentralisasi, membuatnya sangat sulit untuk dimanipulasi atau diretas.",
            },
            {
              q: "Bagaimana cara memverifikasi sertifikat di Chaintificate?",
              a: "Anda dapat memverifikasi sertifikat dengan memasukkan tautan unik sertifikat ke dalam kolom pencarian di situs web Chaintificate. Sistem akan secara otomatis mengambil dan menampilkan detail sertifikat dari blockchain.",
            },
          ].map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i + 1}`}
              className="relative group border-none"
            >
              {/* Multi-layer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative bg-white/90 backdrop-blur-2xl border-2 border-blue-400/40 hover:border-blue-500/60 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-3xl"></div>

                <AccordionTrigger className="p-8 text-xl font-black text-gray-900 hover:no-underline transition-all duration-300 group/trigger">
                  <div className="flex items-center gap-4 w-full">
                    {/* Icon indicator */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-blue-500 rounded-lg blur-lg opacity-0 group-hover/trigger:opacity-40 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    <span className="flex-grow text-left group-hover/trigger:text-transparent group-hover/trigger:bg-gradient-to-r group-hover/trigger:bg-clip-text group-hover/trigger:from-blue-600 group-hover/trigger:to-cyan-600 transition-all duration-300">
                      {faq.q}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-8 pb-8 pl-24 text-gray-700 text-lg leading-relaxed">
                  <div className="relative">
                    {/* Accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-600 rounded-full"></div>
                    <div className="pl-6">{faq.a}</div>
                  </div>
                </AccordionContent>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block group">
            {/* Multi-layer button glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>

            <div className="relative bg-white/90 backdrop-blur-2xl border-2 border-blue-500/30 rounded-3xl px-12 py-8 shadow-2xl">
              <p className="text-gray-700 mb-6 text-xl font-light">
                Still have questions?{" "}
                <span className="font-bold text-gray-900">
                  We're here to help!
                </span>
              </p>
              <button className="relative group/btn overflow-hidden px-10 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105">
                {/* Button backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                {/* Button glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-40 group-hover/btn:opacity-80 transition-opacity duration-300"></div>

                <span className="relative z-10 text-white">
                  Contact Support
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
