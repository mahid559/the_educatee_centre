"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Heart, Check } from "lucide-react";
import { eventsData } from "@/data/events";

export const EventsShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C81E2B]" />
              <span>Campus Life & Milestones</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight leading-tight">
              Life at The Educatee Centre
            </h2>

            <p className="text-[#585552] text-base leading-relaxed">
              We celebrate every step of student courage. From lively interactive classroom debates to elaborate Graduation Days, student speech showcases, and honorary crest distributions.
            </p>
          </div>

          <Link
            href="/events"
            className="pill-btn-outline shrink-0"
          >
            <span>Explore All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Big Feature: Graduation Ceremony Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 rounded-[2.5rem] overflow-hidden relative shadow-md border border-[#E8E3D7] min-h-[380px] bg-[#121214] group">
            <Image
              src="/images/graduation_celebration.jpg"
              alt="SSC & Dakhil Spoken English Graduation & Farewell Ceremony"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

            <div className="absolute top-5 left-5 pill-badge bg-[#C81E2B] text-white border-none shadow-md">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Signature Tradition</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs font-semibold text-[#D0CBC0]">
                Cohort Farewell & Achievement Ceremony
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl">
                SSC & Dakhil Spoken English Graduation Day
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#D0CBC0] line-clamp-2 leading-relaxed">
                Celebrating the courageous journey of students who conquered English speaking hesitation. Featuring official certificate awards, speeches, and proud mentors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {eventsData.slice(1, 3).map((event) => (
              <div
                key={event.id}
                className="bright-card p-6 sm:p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="pill-badge pill-badge-crimson text-[10px] font-bold">
                      {event.category}
                    </span>
                    <span className="text-xs text-[#585552] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C81E2B]" />
                      <span>{event.status}</span>
                    </span>
                  </div>

                  <h4 className="font-heading font-extrabold text-lg text-[#121214] hover:text-[#C81E2B] transition-colors leading-snug">
                    {event.title}
                  </h4>

                  <p className="font-sans text-xs sm:text-sm text-[#585552] line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#E8E3D7]">
                  {event.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#121214]">
                      <Check className="w-3.5 h-3.5 text-[#C81E2B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
