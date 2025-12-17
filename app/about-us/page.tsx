"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Target, Lightbulb, Shield, Zap, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Immutability",
    description:
      "Certificates are stored on the blockchain, ensuring they cannot be tampered with or forged.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description:
      "Employers can verify credentials in seconds without intermediaries or background checks.",
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description:
      "A standardized, decentralized system that is recognized and accessible worldwide.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Users,
    title: "Student Ownership",
    description:
      "Students own their data and control who has access to their academic achievements.",
    gradient: "from-cyan-600 to-blue-700",
  },
];

const founders = [
  {
    name: "Leandro",
    role: "Smart Contract Developer",
    image:
      "https://i.pinimg.com/736x/98/e3/40/98e340a4c538cd056cd93aa4c30115e5.jpg",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Fazle",
    role: "UI/UX Designer",
    image:
      "https://i.pinimg.com/736x/33/4c/9d/334c9dea6110753f06842e99927c8012.jpg",
    gradient: "from-cyan-600 to-blue-700",
  },
  {
    name: "Leonardo",
    role: "Frontend Developer",
    image:
      "https://i.pinimg.com/736x/7d/f0/04/7df004f9885b3f12e7c20cd715a71763.jpg",
    gradient: "from-blue-700 to-cyan-700",
  },
  {
    name: "Stevina",
    role: "Business Development",
    image:
      "https://i.pinimg.com/736x/5b/09/28/5b092865c4a872192580603c49756a94.jpg",
    gradient: "from-cyan-700 to-blue-800",
  },
];

const partners = [
  "TechUniversity",
  "GlobalEd",
  "BlockAcademy",
  "FutureSkills",
  "EduChain",
  "CertifyNow",
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 font-sans">
      <Header />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            <div className="absolute left-0 right-0 top-0 m-auto h-[400px] w-[400px] rounded-full bg-blue-400 opacity-15 blur-[120px]"></div>
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400 opacity-15 blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-black text-sm mb-8 tracking-wider uppercase border-2 border-blue-200">
                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
                Redefining Trust in{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 blur-2xl opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Digital Credentials
                  </span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Chaintificate is building the future of academic verification.
                We empower institutions to issue tamper-proof certificates and
                enable students to truly own their achievements on the
                blockchain.
              </p>
              <div className="flex gap-4">
                <button className="relative group overflow-hidden px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black rounded-2xl hover:shadow-2xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 uppercase tracking-wider">
                    Get Started
                  </span>
                </button>
                <button className="px-10 py-4 bg-white text-gray-900 font-black border-2 border-blue-200 rounded-2xl hover:bg-blue-50 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 relative animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-2">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-cyan-900 relative flex items-center justify-center overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-30"></div>
                    <div className="text-center p-8 z-10">
                      <Shield
                        className="w-28 h-28 text-white mx-auto mb-4 opacity-90"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-3xl font-black text-white tracking-widest uppercase">
                        Secured by Blockchain
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500">
                  <div className="relative inline-block mb-8">
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center border-2 border-blue-200 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-6">
                    Our Vision
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">
                    To create a world where academic and professional
                    achievements are universally instantly verifiable,
                    permanently accessible, and completely owned by the
                    individual, eliminating credential fraud forever.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500">
                  <div className="relative inline-block mb-8">
                    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-blue-200 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">
                    We bridge the gap between education and employment by
                    providing a seamless, decentralized infrastructure that
                    connects universities, students, and employers through
                    trust-less blockchain technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Why Choose{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Chaintificate?
                  </span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                Built on advanced blockchain technology to solve real-world
                problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="group relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                  <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 h-full">
                    <div className="relative inline-block mb-8">
                      <div
                        className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-xl blur-lg opacity-30`}
                      ></div>
                      <feature.icon className="relative w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-24 border-y-2 border-blue-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-12">
              Trusted by Innovative Institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner, idx) => (
                <span
                  key={idx}
                  className="text-2xl font-black text-gray-800 flex items-center gap-3 hover:text-blue-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full animate-pulse border-2 border-blue-200"></div>
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Meet The{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Minds
                  </span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                The passionate team behind the revolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((founder, idx) => (
                <div key={idx} className="group relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${founder.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                  <div className="relative h-[450px] w-full overflow-hidden rounded-3xl border-2 border-blue-200 group-hover:border-blue-400 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-black text-white mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-cyan-100 font-bold text-sm uppercase tracking-wider">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
