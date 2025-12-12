// app/page.tsx
"use client";
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { Shield, Zap, Globe, Lock, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Chaintificate has revolutionized how we issue and verify academic credentials. The security and ease of use are unparalleled.",
    author: "Jane Doe",
    title: "University Registrar",
    avatar: "JD",
  },
  {
    quote:
      "As a student, having my certificates on the blockchain gives me peace of mind. Verification is instant, no more waiting!",
    author: "John Smith",
    title: "Graduate Student",
    avatar: "JS",
  },
  {
    quote:
      "The implementation process was seamless, and the support from the Chaintificate team has been outstanding. Highly recommended!",
    author: "Dr. Emily White",
    title: "Head of Certifications",
    avatar: "EW",
  },
  {
    quote:
      "A truly innovative solution that brings much-needed trust and efficiency to the world of digital credentials.",
    author: "Michael Brown",
    title: "Tech Entrepreneur",
    avatar: "MB",
  },
  {
    quote:
      "Managing thousands of certificates used to be a nightmare. Now, it's a simple, secure, and automated process.",
    author: "Sarah Green",
    title: "IT Director, Technical College",
    avatar: "SG",
  },
  {
    quote:
      "The best part is the ownership. I truly own my achievements, and I can share them with anyone, anywhere.",
    author: "David Lee",
    title: "Alumnus",
    avatar: "DL",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans flex flex-col antialiased">
      {/* Keyframes for animations */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 50s linear infinite;
        }
        .group:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Features Section - Ultra Advanced */}
        <section className="relative py-32 bg-white overflow-hidden">
          {/* Complex background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">
                Core Features
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Next-Gen{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 blur-2xl opacity-50"></span>
                <span className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  Features
                </span>
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-20 font-light">
              Powered by cutting-edge blockchain infrastructure
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Blockchain Security",
                  description:
                    "Military-grade encryption with immutable records stored across decentralized networks, ensuring absolute data integrity.",
                  gradient: "from-blue-500 to-cyan-600",
                  accent: "blue",
                },
                {
                  icon: Zap,
                  title: "Instant Verification",
                  description:
                    "Lightning-fast validation through smart contracts with sub-second response times for immediate authentication.",
                  gradient: "from-cyan-500 to-blue-700",
                  accent: "cyan",
                },
                {
                  icon: Globe,
                  title: "Global Standard",
                  description:
                    "Universally recognized NFT credentials accepted worldwide, breaking down geographical barriers.",
                  gradient: "from-blue-600 to-cyan-600",
                  accent: "blue",
                },
              ].map((feature, i) => (
                <div key={i} className="group relative">
                  {/* Multiple glow layers */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}
                  ></div>
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                  ></div>

                  <div className="relative bg-white/90 backdrop-blur-2xl p-10 rounded-3xl border-2 border-blue-400/40 hover:border-blue-500/60 transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2 shadow-2xl">
                    {/* Corner accents */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full`}
                    ></div>
                    <div
                      className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${feature.gradient} opacity-5 rounded-tr-full`}
                    ></div>

                    {/* Animated icon */}
                    <div className="relative mb-8">
                      <div
                        className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                      <div
                        className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                      >
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Futuristic */}
        <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">
                Testimonials
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Trusted by{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 blur-2xl opacity-50"></span>
                <span className="relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Innovators
                </span>
              </span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-infinite-scroll group">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-96 mx-4">
                  <div className="group/card relative h-full">
                    {/* Card glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover/card:opacity-40 transition-opacity duration-700"></div>

                    <div className="relative bg-white/90 backdrop-blur-2xl p-8 rounded-2xl border-2 border-blue-400/40 hover:border-blue-500/60 transition-all duration-500 h-full shadow-2xl">
                      {/* Quote mark */}
                      <div className="text-blue-500 text-6xl font-serif leading-none mb-4 opacity-30">
                        "
                      </div>

                      <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                        {testimonial.quote}
                      </p>

                      <div className="flex items-center gap-4 border-t border-blue-400/30 pt-6">
                        {/* Avatar with gradient */}
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-60"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-black text-lg border-2 border-white">
                            {testimonial.avatar}
                          </div>
                        </div>

                        <div className="text-left">
                          <p className="font-bold text-gray-900 text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
