// components/HeroSection.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Link2, ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { useVerify } from "@/hooks/useCertificate";

// Seeded random number generator for consistent values
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface Particle {
  left: string;
  top: string;
  duration: string;
  delay: string;
}

const HeroSection: React.FC = () => {
  const [tokenUri, setTokenUri] = useState("");
  const { verifyCertificate, isLoading } = useVerify();
  const [isMounted, setIsMounted] = useState(false);

  // Generate particles only on client-side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate consistent particle positions using a seeded approach
  const particles = useMemo<Particle[]>(() => {
    return [...Array(30)].map((_, i) => ({
      left: `${seededRandom(i * 1.1) * 100}%`,
      top: `${seededRandom(i * 2.2) * 100}%`,
      duration: `${5 + seededRandom(i * 3.3) * 15}s`,
      delay: `${seededRandom(i * 4.4) * 5}s`,
    }));
  }, []);

  const handleVerify = async () => {
    if (!tokenUri) return;
    try {
      await verifyCertificate(tokenUri);
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 pt-20">
      {/* Complex Animated Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_40%_20%,rgba(147,197,253,0.1),transparent_40%)]"></div>

        {/* Multiple layered orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[20px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-300/15 rounded-full blur-[20px] animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Advanced grid pattern with perspective */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.08)_2px,transparent_2px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent)] opacity-40"></div>

        {/* Floating particles - only render on client to avoid hydration mismatch */}
        <div className="absolute inset-0">
          {isMounted && particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-30"
              style={{
                left: particle.left,
                top: particle.top,
                animation: `float ${particle.duration} ease-in-out infinite`,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Scanlines effect */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(59,130,246,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Advanced Badge */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            {/* Multiple glow layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-50"></div>

            <div className="relative inline-flex items-center gap-3 px-8 py-3 bg-white/90 border-2 border-blue-400/50 rounded-full backdrop-blur-2xl shadow-2xl">
              <div className="relative flex items-center">
                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 text-blue-600 blur-md"></div>
              </div>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent text-sm font-black tracking-widest uppercase">
                Next-Gen Blockchain
              </span>
              <Zap className="w-4 h-4 text-cyan-600" />
            </div>
          </div>
        </div>

        {/* Futuristic Headline */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
            <span className="block text-gray-900">
              Secure &
            </span>
            <span className="relative inline-block my-4">
              {/* Multiple gradient layers */}
              <span className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Verifiable
              </span>
              {/* Underline effect */}
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </span>
            <span className="block text-gray-900">
              Credentials
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
            Revolutionizing credential verification with{" "}
            <span className="text-blue-600 font-bold relative">
              cutting-edge blockchain
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
            </span>{" "}
            technology
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Instant Verification",
              "Immutable Records",
              "Global Standard",
            ].map((feature, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative px-6 py-2 bg-white/90 border border-blue-400/30 rounded-full backdrop-blur-sm shadow-lg">
                  <span className="text-blue-700 text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ultra-Advanced Search Bar */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative group">
            {/* Outer glow - multiple layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Search container with complex styling */}
            <div className="relative">
              {/* Inner gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/15 to-blue-500/20 rounded-3xl blur-md"></div>

              {/* Border gradient animation */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-white/95"></div>

              <div className="relative bg-transparent backdrop-blur-2xl rounded-3xl p-3 flex items-center shadow-2xl">
                {/* Icon section */}
                <div className="pl-6 pr-4">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-blue-500 rounded-lg blur-lg opacity-40"></div>
                    <Link2 className="w-7 h-7 text-blue-600 relative z-10" />
                  </div>
                </div>

                {/* Input */}
                <input
                  type="text"
                  placeholder="Enter blockchain certificate link..."
                  className="flex-grow bg-transparent text-gray-900 placeholder-gray-500 text-xl font-medium focus:outline-none px-6 py-4"
                  value={tokenUri}
                  onChange={(e) => setTokenUri(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                  suppressHydrationWarning
                />

                {/* Verify Button */}
                <button
                  onClick={handleVerify}
                  disabled={isLoading}
                  className="relative group/btn overflow-hidden flex items-center gap-3 rounded-2xl px-12 py-5 font-black text-xl transition-all duration-300 disabled:opacity-50 hover:scale-105"
                >
                  {/* Button gradient backgrounds */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                  {/* Button glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-40 group-hover/btn:opacity-80 transition-opacity duration-300"></div>

                  {isLoading ? (
                    <span className="relative z-10 text-white uppercase tracking-wider">
                      Verifying...
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10 text-white uppercase tracking-wider">
                        Verify Now
                      </span>
                      <ArrowUpRight className="w-6 h-6 relative z-10 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Stats with 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              value: "10K+",
              label: "Certificates Issued",
              icon: "🎓",
              color: "from-blue-500 to-cyan-500",
            },
            {
              value: "50+",
              label: "Partner Institutions",
              icon: "🏛️",
              color: "from-cyan-500 to-blue-600",
            },
            {
              value: "99.9%",
              label: "Uptime Guarantee",
              icon: "⚡",
              color: "from-blue-600 to-cyan-600",
            },
          ].map((stat, i) => (
            <div key={i} className="relative group">
              {/* Card glow - multiple layers */}


              <div className="relative text-center p-10 bg-white/90 backdrop-blur-2xl rounded-3xl border-2 border-blue-400/40 hover:border-blue-500/60 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl">
                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Value with glow */}
                <div className="relative mb-3">

                  <div
                    className={`text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}
                  >
                    {stat.value}
                  </div>
                </div>

                <div className="text-gray-700 text-sm font-bold uppercase tracking-widest">
                  {stat.label}
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
