"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Check,
  ArrowRight,
  ShieldCheck,
  Building,
  Calendar,
} from "lucide-react";
import { facilitiesData } from "@/data/facilities";

export const FacilitiesShowcase: React.FC = () => {
  const scheduleSlots = [
    "After-school slots",
    "Weekend groups",
    "Corporate evening batches",
    "Dedicated Girls batches",
  ];

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C81E2B]" />
              <span>In-center & online</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight leading-tight">
              Learn where you learn best
            </h2>
            <p className="text-[#585552] text-base leading-relaxed">
              Drop in at our sanctuary at Appayan Afroz Tower in central Feni. Purpose-built spaces insulated from street noise, equipped with practical workstations and supportive speaking circles.
            </p>
          </div>

          <Link
            href="/facilities"
            className="pill-btn-outline shrink-0"
          >
            <span>Explore Campus Tour</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Schedule Slots Strip */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {scheduleSlots.map((slot, i) => (
            <span
              key={i}
              className="pill-badge !bg-white !border-[#E8E3D7] text-xs font-semibold text-[#121214] py-2 px-4 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C81E2B]" />
              <span>{slot}</span>
            </span>
          ))}
        </div>

        {/* 2 Big Facilities Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facilitiesData.slice(0, 2).map((fac) => (
            <div
              key={fac.id}
              className="bright-card overflow-hidden p-4 sm:p-5 flex flex-col justify-between space-y-5"
            >
              <div className="relative h-64 sm:h-72 w-full rounded-[1.5rem] overflow-hidden bg-[#121214]">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/85 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 pill-badge !bg-white/95 !border-none text-[#121214] text-xs font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C81E2B]" />
                  <span>Verified Campus Space</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl">{fac.title}</h3>
                  <p className="font-sans text-xs text-[#D0CBC0] font-medium">{fac.subtitle}</p>
                </div>
              </div>

              <div className="p-2 space-y-4">
                <p className="font-sans text-xs sm:text-sm text-[#585552] leading-relaxed">
                  {fac.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8E3D7]">
                  {fac.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#121214]">
                      <Check className="w-3.5 h-3.5 text-[#C81E2B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Elevator Guidance Card in BrightPath Bento Style */}
        <div className="bright-card-warm p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#E8E3D7]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#C81E2B] border border-[#E8E3D7] flex items-center justify-center shrink-0 shadow-xs">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C81E2B]">
                Visiting Logistics • College Road, Feni
              </span>
              <h4 className="font-heading font-extrabold text-xl text-[#121214] mt-0.5">
                Elevator Instruction: Press Lift 4th Floor Button
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#585552] mt-1 max-w-2xl leading-relaxed">
                Appayan Afroz Tower is located right near Pourashava Gate. Our academy occupies the 5th floor. In the building's elevator, press the <b>4th Floor button</b> to arrive directly at our counseling desk.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="pill-btn-outline !py-3"
            >
              <MapPin className="w-4 h-4 text-[#C81E2B]" />
              <span>Campus Map & Directions</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
