"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Laptop,
  UserCheck,
  PartyPopper,
  Award,
  CheckCircle,
  Eye,
  Maximize2,
  ArrowRight,
  Mic,
  Monitor,
  Sparkles,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import { Lightbox, LightboxImage } from "@/components/Lightbox";
import { cardLiftProps } from "@/lib/motion";

export default function AboutClientView() {
  const { about, founder, facultyPlaceholders, facilities, cultureGallery } = siteContent;
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const getWhyLoveIcon = (id: string) => {
    switch (id) {
      case "love-1":
        return <Heart className="w-7 h-7 text-[#03594E]" />;
      case "love-2":
        return <Laptop className="w-7 h-7 text-[#03594E]" />;
      case "love-3":
        return <UserCheck className="w-7 h-7 text-[#03594E]" />;
      case "love-4":
      default:
        return <PartyPopper className="w-7 h-7 text-[#F8C62F]" />;
    }
  };

  const lightboxImages: LightboxImage[] = cultureGallery.map((item) => ({
    src: item.image,
    alt: item.imageAlt,
  }));

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ABOUT OUR INSTITUTION"
        title="About The Educatee Centre"
        accentText="Feni"
        subtext="Established in 2022. We are Feni's friendly learning sanctuary dedicated to removing the fear of English and building practical digital competencies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Our Story Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Image Frame (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-[420px]">
                {/* Subtle soft ambient glow */}
                <div
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#03594E]/15 to-[#F8C62F]/15 blur-xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="group relative w-full aspect-[978/1018] rounded-2xl overflow-hidden border border-[#E2E9EB] shadow-2xl bg-slate-900 z-10">
                  <Image
                    src={about.story.image}
                    alt={about.story.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-4 right-2 sm:right-4 bg-[#1F2432] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-xl border border-white/10 z-20 flex items-center gap-2 font-[var(--font-jost)] select-none">
                  <span className="w-2 h-2 rounded-full bg-[#F8C62F]" />
                  <span>Est. 2022 • College Road, Feni</span>
                </div>
              </div>
            </motion.div>

            {/* Story Text (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <span className="text-[#03594E] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 font-[var(--font-jost)]">
                {about.story.tag}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-6 font-[var(--font-jost)] leading-tight">
                {about.story.title}
              </h2>

              <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed mb-4 font-normal font-[var(--font-dm-sans)]">
                {about.story.paragraph1}
              </p>

              <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed mb-6 font-normal font-[var(--font-dm-sans)]">
                {about.story.paragraph2}
              </p>

              <div className="p-3.5 bg-[#F5F7F9] rounded-xl border border-[#E2E9EB] text-xs text-[#1F2432] flex items-center gap-2 mb-6 font-[var(--font-jost)]">
                <span className="w-2 h-2 rounded-full bg-[#03594E]" />
                <span>
                  Founded in 2022 at Appayan Afroz Tower, College Road, Feni.
                </span>
              </div>

              <Link
                href="/admissions#free-demo"
                className="inline-flex items-center justify-center bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md shadow-[#03594E]/20 hover:scale-[1.02] active:scale-[0.98] font-[var(--font-jost)]"
              >
                Experience a Free Demo Class →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="py-20 md:py-24 bg-[#F5F7F9] relative border-y border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="PURPOSE &amp; DIRECTION"
            tagColor="red"
            title="Our Guiding Mission &amp; Vision"
            subtext="We believe fluency in English and mastery of IT are not privileges — they are practical tools every adult learner in Feni can achieve with structured guidance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              {...cardLiftProps}
              className="bg-white text-[#1F2432] rounded-2xl p-8 sm:p-10 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#E7F3F1] border border-[#03594E]/20 text-[#03594E] flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] mb-3 font-[var(--font-jost)] leading-tight">
                  {about.mission.title}
                </h3>
                <p className="text-base text-[#6C757D] leading-relaxed font-normal font-[var(--font-dm-sans)]">
                  {about.mission.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E2E9EB] text-xs font-bold text-[#6C757D] uppercase tracking-wider flex items-center gap-2 font-[var(--font-jost)]">
                <span className="w-2 h-2 rounded-full bg-[#03594E]" />
                <span>Outcome-Driven Academic Standards</span>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              {...cardLiftProps}
              className="bg-white text-[#1F2432] rounded-2xl p-8 sm:p-10 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#F5F7F9] border border-[#E2E9EB] text-[#03594E] flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Eye className="w-7 h-7 text-[#03594E]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] mb-3 font-[var(--font-jost)] leading-tight">
                  {about.vision.title}
                </h3>
                <p className="text-base text-[#6C757D] leading-relaxed font-normal font-[var(--font-dm-sans)]">
                  {about.vision.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E2E9EB] text-xs font-bold text-[#6C757D] uppercase tracking-wider flex items-center gap-2 font-[var(--font-jost)]">
                <span className="w-2 h-2 rounded-full bg-[#F8C62F]" />
                <span>Long-Term Community &amp; Career Impact</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Students Love Us (4 Feature Cards) */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="WHY STUDENTS LOVE US"
            title="Four Pillars That Make Educatee Different"
            subtext="From quiet, focused classrooms to personal founder mentorship, here is why students thrive at The Educatee Centre."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {about.whyLoveUs.map((card, idx) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={card.description}
                accent={card.accent}
                icon={getWhyLoveIcon(card.id)}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Founder Section (Engr. Zahir Uddin Babar) */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-[#F5F7F9] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E2E9EB] shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Founder Photo (5 cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative">
                  <div className="relative w-72 h-88 sm:w-80 sm:h-96 md:w-92 md:h-[420px] rounded-2xl overflow-hidden border border-[#E2E9EB] shadow-2xl bg-slate-900 z-10">
                    <Image
                      src={founder.image}
                      alt={founder.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-4 right-4 z-20 bg-[#1F2432] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-xl border border-white/10 inline-flex items-center gap-2 font-[var(--font-jost)]">
                    <Award className="w-3.5 h-3.5 text-[#F8C62F]" />
                    <span>Founder, CEO &amp; Lead Mentor</span>
                  </div>
                </div>
              </motion.div>

              {/* Founder Details & Teaching Style (7 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-7 flex flex-col items-start"
              >
                <span className="text-[#03594E] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 font-[var(--font-jost)]">
                  FOUNDER &amp; LEAD MENTOR
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight font-[var(--font-jost)] mb-2">
                  {founder.name}
                </h2>

                <p className="text-sm sm:text-base font-bold text-[#03594E] mb-1 font-[var(--font-jost)]">
                  {founder.title}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#6C757D] mb-6 font-[var(--font-dm-sans)]">
                  {founder.credentials}
                </p>

                {/* Founder Message Quote */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E9EB] relative mb-6 shadow-sm">
                  <p className="text-sm sm:text-base text-[#1F2432] leading-relaxed italic font-[var(--font-dm-sans)]">
                    &ldquo;{founder.message}&rdquo;
                  </p>
                </div>

                {/* Teaching Style Box */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2E9EB] text-xs sm:text-sm text-[#6C757D] leading-relaxed mb-6 shadow-sm font-[var(--font-dm-sans)]">
                  <strong className="text-[#1F2432] block uppercase tracking-wider mb-1 font-bold font-[var(--font-jost)]">
                    Teaching Style &amp; Mentorship Philosophy:
                  </strong>
                  {founder.teachingStyle}
                </div>

                <Link
                  href="/admissions#free-demo"
                  className="inline-flex items-center justify-center bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#03594E]/20 hover:scale-[1.02] font-[var(--font-jost)]"
                >
                  Join Engr. Zahir Sir&apos;s Free Demo Class
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Faculty Section */}
      <section className="py-20 md:py-24 bg-white relative border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="OUR INSTRUCTORS"
            title="Dedicated Faculty &amp; Academic Team"
            subtext="Our teaching faculty is personally trained and guided under Engr. Zahir Uddin Babar to maintain high standards of clarity, structured practice, and interactive training."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {facultyPlaceholders.map((fac, idx) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                {...cardLiftProps}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-dashed border-[#E2E9EB] text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#F5F7F9] bg-[#F5F7F9] shadow-md mb-4 mx-auto">
                    <Image
                      src={fac.image}
                      alt={fac.imageAlt}
                      fill
                      sizes="128px"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F2432] font-[var(--font-jost)]">
                    {fac.name}
                  </h3>
                  <p className="text-xs font-bold text-[#03594E] mt-1 font-[var(--font-jost)]">
                    {fac.role}
                  </p>
                  <p className="text-xs text-[#6C757D] mt-1 font-[var(--font-dm-sans)]">
                    Specialty: {fac.specialty}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E2E9EB] w-full font-[var(--font-jost)]">
                  <span className="text-[11px] font-semibold text-[#6C757D] bg-[#F5F7F9] border border-[#E2E9EB] px-3 py-1 rounded-full inline-block">
                    Faculty Profile (To be updated)
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Facilities Showcase */}
      <section className="py-20 md:py-28 bg-[#F5F7F9] relative border-y border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="CAMPUS FACILITIES"
            title="Designed for Deep Focus &amp; Practical Mastery"
            subtext="Step into our comfortable, modern 5th-floor campus at Appayan Afroz Tower. Every classroom is built for real interaction and distraction-free learning."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => {
              const facConfigs = [
                {
                  badgeText: "Spoken Studio",
                  statText: "Max 16 / Cohort",
                  icon: <Mic className="w-6 h-6 text-[#03594E]" strokeWidth={2.2} />,
                },
                {
                  badgeText: "IT Training Lab",
                  statText: "1 Student : 1 PC",
                  icon: <Monitor className="w-6 h-6 text-[#03594E]" strokeWidth={2.2} />,
                },
                {
                  badgeText: "Campus Focus",
                  statText: "5th Floor Sanctuary",
                  icon: <Sparkles className="w-6 h-6 text-[#03594E]" strokeWidth={2.2} />,
                },
              ];
              const config = facConfigs[idx % facConfigs.length];

              return (
                <motion.article
                  key={fac.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  {...cardLiftProps}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Top Bar: Icon Badge & Stat Pill */}
                    <div className="flex items-center justify-between gap-3 mb-6 font-[var(--font-jost)]">
                      <div className="w-12 h-12 rounded-xl bg-[#E7F3F1] border border-[#03594E]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {config.icon}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E7F3F1] text-[#03594E] border border-[#03594E]/20">
                          {config.badgeText}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#E2E9EB] bg-[#F5F7F9] text-[#6C757D]">
                          {config.statText}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 font-[var(--font-jost)] leading-tight text-[#1F2432]">
                        {fac.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6C757D] leading-relaxed mb-6 font-normal font-[var(--font-dm-sans)]">
                        {fac.description}
                      </p>

                      <ul className="flex flex-col gap-2.5 mb-6 font-[var(--font-jost)]">
                        {fac.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs font-medium px-3 py-2 rounded-xl border border-[#E2E9EB] bg-[#F5F7F9] text-[#1F2432] leading-snug">
                            <CheckCircle className="w-3.5 h-3.5 text-[#03594E] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Our Culture Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="OUR CULTURE &amp; CELEBRATIONS"
            title="Celebrations, Seminars &amp; Community Honors"
            subtext="Learning at Educatee is vibrant and celebratory. From our proud Graduation Day and Farewell Ceremonies to free educational seminars and the prestigious CEO Award, we honor every milestone."
          />

          {/* Quick Culture Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 font-[var(--font-jost)]">
            <div className="bg-[#F5F7F9] rounded-2xl p-5 text-center border border-[#E2E9EB] hover:bg-white hover:shadow-md transition-all">
              <span className="text-xs font-bold text-[#03594E] uppercase block mb-1">
                Highest Honor
              </span>
              <h4 className="text-lg font-bold text-[#1F2432]">
                CEO Award
              </h4>
              <p className="text-xs text-[#6C757D] mt-1 font-[var(--font-dm-sans)]">
                Top student honor presented by Engr. Zahir sir
              </p>
            </div>

            <div className="bg-[#F5F7F9] rounded-2xl p-5 text-center border border-[#E2E9EB] hover:bg-white hover:shadow-md transition-all">
              <span className="text-xs font-bold text-[#6C757D] uppercase block mb-1">
                Celebration
              </span>
              <h4 className="text-lg font-bold text-[#1F2432]">
                Graduation Day
              </h4>
              <p className="text-xs text-[#6C757D] mt-1 font-[var(--font-dm-sans)]">
                Certificates, speeches &amp; course completion
              </p>
            </div>

            <div className="bg-[#F5F7F9] rounded-2xl p-5 text-center border border-[#E2E9EB] hover:bg-white hover:shadow-md transition-all">
              <span className="text-xs font-bold text-[#6C757D] uppercase block mb-1">
                Community
              </span>
              <h4 className="text-lg font-bold text-[#1F2432]">
                Free Seminars
              </h4>
              <p className="text-xs text-[#6C757D] mt-1 font-[var(--font-dm-sans)]">
                Public workshops on IELTS &amp; career communication
              </p>
            </div>

            <div className="bg-[#F5F7F9] rounded-2xl p-5 text-center border border-[#E2E9EB] hover:bg-white hover:shadow-md transition-all">
              <span className="text-xs font-bold text-[#6C757D] uppercase block mb-1">
                Fellowship
              </span>
              <h4 className="text-lg font-bold text-[#1F2432]">
                Farewell Ceremony
              </h4>
              <p className="text-xs text-[#6C757D] mt-1 font-[var(--font-dm-sans)]">
                Tea, heartfelt memories &amp; lifelong network
              </p>
            </div>
          </div>

          {/* Interactive Lightbox Image Strip (Clean real photos — Zero Cropping) */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 [column-fill:_balance]">
            {cultureGallery.slice(0, 8).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setActiveLightboxIndex(index)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2E9EB]/80 bg-slate-100"
              >
                <div className="relative overflow-hidden w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                    className="w-full h-auto block object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />

                  {/* Subtle Hover Scrim with Center Enlarge Icon */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white border border-white/40 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to Full Photo Gallery */}
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md shadow-[#03594E]/20 hover:scale-[1.02] active:scale-[0.98] group font-[var(--font-jost)]"
            >
              <span>Explore Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Culture Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <Lightbox
            images={lightboxImages}
            currentIndex={activeLightboxIndex}
            onClose={() => setActiveLightboxIndex(null)}
            onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
          />
        )}
      </section>

      {/* 9. Final CTA Banner */}
      <CTABanner
        title="Ready to Experience Our Inspiring Atmosphere?"
        subtext="Meet Engr. Zahir sir and our team in a 100% free, no-obligation demo class on the 5th floor of Appayan Afroz Tower, Feni."
        primaryCtaText="Book a Free Demo Class"
        primaryCtaLink="/admissions#free-demo"
        badge="ACADEMIC EXCELLENCE"
      />
    </>
  );
}
