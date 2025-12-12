"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import { Loader2 } from "lucide-react";

export default function DashboardRedirect() {
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      if (!isConnected) {
        setIsLoading(false);
        return;
      }

      if (address) {
        try {
          const response = await fetch(`/api/check-wallet?wallet=${address}`);
          const data = await response.json();

          if (data.exists) {
            if (data.role === "student") {
              router.push("/dashboard/student");
            } else if (data.role === "institute") {
              router.push("/dashboard/institute");
            }
          } else {
            router.push("/roles");
          }
        } catch (error) {
          console.error("Error checking user role:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkUser();
  }, [address, isConnected, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <Header />
        {/* Added mt-20 to push content below the fixed header */}
        <div className="flex items-center justify-center h-[calc(100vh-80px)] relative mt-20">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Loader2 className="relative h-12 w-12 animate-spin text-blue-600" />
            </div>
            <p className="mt-6 text-lg font-semibold text-gray-700">
              Loading your dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <Header />
        {/* Added mt-20 here as well */}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] relative mt-20">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-md mx-auto px-4">
            <div className="relative group mb-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl font-black text-gray-900 mb-4">
              Wallet Connection Required
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Please connect your wallet to access the dashboard and manage your
              credentials.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
