"use client";

import React from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const SuccessSection: React.FC = () => {
  const ieltsHero = testimonials[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex justify-center">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C81E2B]" />
              <span>Reviews</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight">
            What families say
          </h2>

          <div className="flex items-center justify-center gap-2 text-sm text-[#585552]">
            <div className="flex items-center gap-0.5 text-[#E51937]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E51937] text-[#E51937]" />
              ))}
            </div>
            <span className="font-bold text-[#121214]">4.9 / 5</span>
            <span className="text-[#A09D98]">•</span>
            <span>Based on 200+ verified student reviews in Feni</span>
          </div>
        </div>

        {/* IELTS Top Achiever Bento Card */}
        <div className="bright-card p-7 sm:p-11 border-[#E8E3D7] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <span className="pill-badge pill-badge-crimson text-xs font-bold">
                  Official IELTS Band 6.0 Scorecard
                </span>
                <span className="pill-badge !bg-[#EFEBE2] !border-[#E8E3D7] text-[#121214] text-xs font-semibold">
                  Post-HSC Cohort
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#121214] leading-tight">
                Congratulations to <span className="text-[#C81E2B]">Jamshed Hossain</span> on His IELTS Achievement!
              </h3>

              <div className="p-5 rounded-[1.5rem] bg-[#F7F5F0] border border-[#E8E3D7] text-[#121214] font-sans text-sm sm:text-base italic leading-relaxed">
                "{ieltsHero.quote}"
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-[#585552]">
                <ShieldCheck className="w-4 h-4 text-[#C81E2B]" />
                <span>Verified achievement broadcasted on The Educatee Centre Official Facebook Page</span>
              </div>
            </div>

            {/* Score Band Metric Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[#EFEBE2] rounded-[2rem] border border-[#E8E3D7] text-center shadow-xs">
              <div className="w-20 h-20 rounded-full bg-white text-[#C81E2B] flex items-center justify-center font-heading font-extrabold text-3xl mb-3 shadow-xs">
                6.0
              </div>
              <div className="font-heading font-extrabold text-[#121214] text-lg">
                Official IELTS Score
              </div>
              <div className="font-sans text-xs text-[#585552] mt-0.5">
                Jamshed Hossain • Alumni
              </div>
              <div className="flex items-center gap-1 text-[#E51937] mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E51937] text-[#E51937]" />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(1, 4).map((t) => (
            <div
              key={t.id}
              className="bright-card p-7 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E51937]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E51937] text-[#E51937]" />
                    ))}
                  </div>
                  <span className="pill-badge pill-badge-crimson text-[10px] font-bold">
                    {t.highlightTag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#C81E2B]/20" />

                <p className="font-sans text-xs sm:text-sm text-[#585552] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E3D7] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#121214] text-white font-heading font-extrabold text-xs flex items-center justify-center shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-[#121214]">
                    {t.name}
                  </h4>
                  <p className="font-sans text-[11px] text-[#585552]">
                    {t.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all stories CTA */}
        <div className="text-center">
          <Link
            href="/success-stories"
            className="pill-btn-outline inline-flex items-center gap-2"
          >
            <span>Read All Student Transformations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
