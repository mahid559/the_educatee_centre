"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { instructors } from "@/data/instructors";

export const FounderSpotlight: React.FC = () => {
  const founder = instructors[0];
  const advisor = instructors[1];
  const handwriting = instructors[2];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C81E2B]" />
              <span>Mentors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight leading-tight">
              Meet the mentors
            </h2>
            <p className="text-[#585552] text-base leading-relaxed">
              Real educators, vetted twice, trained in conversational immersion. Led by Founder & CEO Engineer Zahir Uddin Babar in Feni.
            </p>
          </div>

          <Link
            href="/about"
            className="pill-btn-outline shrink-0"
          >
            <span>Read Academic Story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Mentor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bright-card p-5 flex flex-col justify-between space-y-5"
          >
            <div className="relative h-72 w-full rounded-[1.5rem] overflow-hidden bg-[#121214]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/85 via-transparent to-transparent" />
              <div className="absolute top-3.5 left-3.5 pill-badge pill-badge-crimson text-[11px] font-bold">
                Founder & Lead Mentor
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-heading font-extrabold text-xl">{founder.name}</h3>
                <p className="font-sans text-xs text-[#EFEBE2]/90">Founder & Lead English Instructor</p>
              </div>
            </div>

            <div className="space-y-3 px-1">
              <p className="font-sans text-xs sm:text-sm text-[#121214] leading-relaxed italic bg-[#EFEBE2]/50 p-3.5 rounded-2xl border border-[#E8E3D7]">
                "{founder.quote}"
              </p>
              <p className="font-sans text-xs text-[#585552] line-clamp-3 leading-relaxed">
                {founder.bio}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#585552] border-t border-[#E8E3D7]">
                <span>Specialization:</span>
                <span className="font-bold text-[#C81E2B]">Spoken & IELTS</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Senior Advisor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bright-card p-5 flex flex-col justify-between space-y-5"
          >
            <div className="relative h-72 w-full rounded-[1.5rem] overflow-hidden bg-[#121214]">
              <Image
                src={advisor.image}
                alt={advisor.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/85 via-transparent to-transparent" />
              <div className="absolute top-3.5 left-3.5 pill-badge pill-badge-crimson text-[11px] font-bold">
                Senior Academic Advisor
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-heading font-extrabold text-xl">{advisor.name}</h3>
                <p className="font-sans text-xs text-[#EFEBE2]/90">Senior Faculty Advisor</p>
              </div>
            </div>

            <div className="space-y-3 px-1">
              <p className="font-sans text-xs sm:text-sm text-[#121214] leading-relaxed italic bg-[#EFEBE2]/50 p-3.5 rounded-2xl border border-[#E8E3D7]">
                "{advisor.philosophy}"
              </p>
              <p className="font-sans text-xs text-[#585552] line-clamp-3 leading-relaxed">
                {advisor.bio}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#585552] border-t border-[#E8E3D7]">
                <span>Role:</span>
                <span className="font-bold text-[#121214]">Academic Strategy</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Trainer Misbah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bright-card p-5 flex flex-col justify-between space-y-5"
          >
            <div className="relative h-72 w-full rounded-[1.5rem] overflow-hidden bg-[#121214]">
              <Image
                src={handwriting.image}
                alt={handwriting.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/85 via-transparent to-transparent" />
              <div className="absolute top-3.5 left-3.5 pill-badge pill-badge-sage text-[11px] font-bold">
                Specialist Trainer
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-heading font-extrabold text-xl">{handwriting.name}</h3>
                <p className="font-sans text-xs text-[#EFEBE2]/90">Handwriting Specialist Trainer</p>
              </div>
            </div>

            <div className="space-y-3 px-1">
              <p className="font-sans text-xs sm:text-sm text-[#121214] leading-relaxed italic bg-[#EFEBE2]/50 p-3.5 rounded-2xl border border-[#E8E3D7]">
                "{handwriting.philosophy}"
              </p>
              <p className="font-sans text-xs text-[#585552] line-clamp-3 leading-relaxed">
                {handwriting.bio}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#585552] border-t border-[#E8E3D7]">
                <span>Focus:</span>
                <span className="font-bold text-[#121214]">Smart Handwriting</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The CEO Award Callout */}
        <div className="bright-card-warm p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#E8E3D7]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C81E2B] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C81E2B]">
                The Institute's Highest Honor
              </span>
              <h4 className="font-heading font-extrabold text-xl text-[#121214] mt-0.5">
                The Annual "CEO Award" for Student Character & Fluency Transformation
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#585552] mt-1 max-w-2xl">
                Conferred directly by Engr. Zahir Uddin Babar during cohort graduation days to recognize students showing exceptional dedication and speaking progress.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/success-stories"
              className="pill-btn-outline !py-3"
            >
              <span>View Awardees</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
