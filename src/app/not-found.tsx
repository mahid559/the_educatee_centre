import React from "react";
import Link from "next/link";
import { BookOpen, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-32 pb-20 sm:pt-40 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Padora Blobs */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#C81E2B]/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#FFC73B]/20 blur-3xl" />
      </div>

      <div className="max-w-xl w-full text-center relative z-10">
        {/* 404 Graphic Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#FEE2E2] text-[#C81E2B] font-black text-4xl mb-6 shadow-md border-2 border-[#C81E2B]/20 font-[var(--font-nunito)]">
          404
        </div>

        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C81E2B] block mb-2 font-[var(--font-nunito)]">
          PAGE NOT FOUND
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight font-[var(--font-ubuntu)] mb-4">
          Looking for Something Else?
        </h1>

        <p className="text-base sm:text-lg text-[#54595F] leading-relaxed mb-8 max-w-md mx-auto">
          The page you requested may have moved or doesn&apos;t exist. Let&apos;s get you back on track to your learning goals.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C81E2B] hover:bg-[#83121A] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-red-500/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FEE2E2] hover:bg-[#E2E9EB] text-[#C81E2B] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 border border-[#E2E9EB]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Programs</span>
          </Link>
        </div>

        {/* Quick Nav Links */}
        <div className="pt-8 border-t border-[#E2E9EB] flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#54595F]">
          <Link href="/about" className="hover:text-[#C81E2B] transition-colors">
            About Educatee
          </Link>
          <span>•</span>
          <Link href="/admissions" className="hover:text-[#C81E2B] transition-colors">
            Admissions &amp; Fees
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-[#C81E2B] transition-colors">
            Campus Location
          </Link>
        </div>
      </div>
    </div>
  );
}
