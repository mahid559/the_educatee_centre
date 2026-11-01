"use client";

import React from "react";
import { Sparkles, CheckCircle2, MapPin, Phone } from "lucide-react";
import { DemoBookingForm } from "./DemoBookingForm";
import { siteConfig } from "@/data/siteConfig";

export const ClosingCTA: React.FC = () => {
  return (
    <section id="book-demo" className="py-20 lg:py-28 bg-[#F7F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BrightPath-Inspired Dark Bento Container */}
        <div className="bg-[#121214] text-[#F7F5F0] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-[#242428] shadow-[0_20px_50px_rgba(18,18,20,0.25)] relative overflow-hidden">
          
          {/* Subtle brand crimson glow in background */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C81E2B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex justify-center lg:justify-start">
                <div className="pill-badge bg-white/10 border-white/20 text-[#FEE2E2] text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#C81E2B]" />
                  <span>Free Intro Session • Zero Commitment</span>
                </div>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Start learning with confidence
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#D0CBC0] leading-relaxed max-w-xl">
                Meet a mentor, find your level, and get a personal learning plan — no commitment, no card required. Join Engr. Zahir Uddin Babar on the 5th floor of Appayan Afroz Tower in Feni.
              </p>

              {/* Guarantees List */}
              <div className="space-y-3 pt-2 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1C1C22] text-[#C81E2B] flex items-center justify-center shrink-0 mt-0.5 border border-[#33333C]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#D0CBC0]">
                    <b className="text-white">100% Free Demo Session:</b> Experience our interactive speaking circle before any enrollment.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1C1C22] text-[#C81E2B] flex items-center justify-center shrink-0 mt-0.5 border border-[#33333C]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#D0CBC0]">
                    <b className="text-white">Strictly Capped Batches:</b> Never more than 16 students per group.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1C1C22] text-[#C81E2B] flex items-center justify-center shrink-0 mt-0.5 border border-[#33333C]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#D0CBC0]">
                    <b className="text-white">Appayan Afroz Tower:</b> Quiet 5th-floor sanctuary (Press Lift 4th Floor button).
                  </div>
                </div>
              </div>

              {/* Direct helpline */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#A09D98]">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#C81E2B]" />
                  <span>Helpline: <b className="text-white">{siteConfig.phones[0].display}</b></span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C81E2B]" />
                  <span>College Road, Feni</span>
                </div>
              </div>
            </div>

            {/* Right: Lead Capture Form (6 cols) */}
            <div className="lg:col-span-6">
              <DemoBookingForm />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
