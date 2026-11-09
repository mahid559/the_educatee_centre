"use client";

import React, { useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Calendar,
  DollarSign,
  Users,
  MessageCircle,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { Course, siteContent } from "@/data/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { CTABanner } from "@/components/CTABanner";
import { DemoForm } from "@/components/DemoForm";
import { cardLiftProps } from "@/lib/motion";

let isPopStateNavigation = false;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    isPopStateNavigation = true;
    window.requestAnimationFrame(() => {
      isPopStateNavigation = false;
    });
  });
}

interface CourseDetailClientViewProps {
  course: Course;
  relatedCourses: Course[];
}

export function CourseDetailClientView({
  course,
  relatedCourses,
}: CourseDetailClientViewProps) {
  const { contact } = siteContent;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useLayoutEffect(() => {
    if (!window.location.hash && !isPopStateNavigation) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [course.slug]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* 1. Course Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#12161E] via-[#181D26] to-[#1F2432] text-white pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        {/* Background Decorative Accents */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E51937]/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E51937]/15 blur-3xl" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Programs", href: "/programs" },
                { label: course.title },
              ]}
              variant="light"
            />

            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase text-white shadow-sm font-[var(--font-jost)]">
              <span className="w-2 h-2 rounded-full bg-[#E51937] animate-pulse" />
              <span>{course.category} Specialization</span>
              {course.badge && (
                <>
                  <span className="text-white/40">•</span>
                  <span className="text-white font-bold">{course.badge}</span>
                </>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.14] tracking-tight !text-white mb-4 font-[var(--font-jost)]">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-2 font-semibold font-[var(--font-jost)]">
              {course.subtitle}
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal mb-8 max-w-2xl font-[var(--font-dm-sans)]">
              {course.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 font-[var(--font-jost)]">
              <Link
                href="#demo-form"
                className="inline-flex items-center justify-center bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Free Demo Class
              </Link>

              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Admission Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Body with Sticky Quick Info Card */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Overview & Feature Highlights */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] block mb-2 font-[var(--font-jost)]">
                  COURSE OVERVIEW
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-4">
                  Why Take This Course at Educatee?
                </h2>
                <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed mb-6 font-[var(--font-dm-sans)]">
                  {course.description} Classes are conducted in our modern, air-conditioned campus on the 5th floor of Appayan Afroz Tower, College Road, Feni. We emphasize practical repetition, patient mentorship, and immediate feedback over rigid memorization.
                </p>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {course.keyHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFF0F2] p-4 rounded-2xl border border-[#E51937]/15 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#E51937] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#1F2432] font-[var(--font-jost)]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Tier Comparison Cards for IELTS */}
              {course.slug === "ielts-preparation" && course.tiers && (
                <div className="pt-6 border-t border-[#E2E9EB]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] block mb-2 font-[var(--font-jost)]">
                    SPECIALIZED TRACKS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-3">
                    Choose Your IELTS Preparation Tier
                  </h2>
                  <p className="text-sm sm:text-base text-[#6C757D] leading-relaxed mb-8 font-[var(--font-dm-sans)]">
                    Strictly small batches with a maximum of 16 students per class. Free Cambridge authentic mock tests are included across all tracks.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {course.tiers.map((tier) => (
                      <motion.div
                        key={tier.id}
                        {...cardLiftProps}
                        className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border shadow-[0_2px_12px_-2px_rgba(229,25,55,0.06)] hover:shadow-xl hover:border-[#E51937]/40 transition-all duration-300 relative group ${
                          tier.popular ? "border-2 border-[#E51937] ring-4 ring-[#E51937]/5" : "border-[#E2E9EB]"
                        }`}
                      >
                        <div>
                          {tier.badge && (
                            <span className="inline-block bg-[#FFF0F2] text-[#E51937] border border-[#E51937]/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3.5 font-[var(--font-jost)]">
                              {tier.badge}
                            </span>
                          )}

                          <h3 className="text-xl font-bold font-[var(--font-jost)] text-[#1F2432] group-hover:text-[#E51937] transition-colors mb-1">
                            {tier.name}
                          </h3>
                          <p className="text-xs font-semibold text-[#6C757D] mb-3 font-[var(--font-jost)]">
                            Target: {tier.target}
                          </p>
                          <p className="text-xs sm:text-sm text-[#6C757D] leading-relaxed mb-6 font-normal font-[var(--font-dm-sans)]">
                            {tier.description}
                          </p>

                          <ul className="flex flex-col gap-2 mb-6">
                            {tier.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-semibold text-[#1F2432] bg-[#F5F7F9] p-2.5 rounded-xl border border-[#E2E9EB]">
                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#E51937]" />
                                <span className="font-[var(--font-jost)]">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-slate-100 text-center">
                          <span className="text-xs font-semibold text-[#6C757D] block mb-3 font-[var(--font-jost)]">
                            Cohort Capped at 16 Students
                          </span>
                          <Link
                            href="#demo-form"
                            className="w-full inline-flex items-center justify-center font-bold text-xs sm:text-sm py-3 px-4 rounded-full shadow-xs transition-all bg-[#E51937] hover:bg-[#C8132C] text-white font-[var(--font-jost)]"
                          >
                            Select Track &amp; Book Demo
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Who is this course for? */}
              <div className="pt-6 border-t border-[#E2E9EB]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] block mb-2 font-[var(--font-jost)]">
                  TARGET AUDIENCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-6">
                  Who is This Course For?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.targetAudience.map((audience, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-[#E2E9EB] shadow-sm flex items-start gap-3.5"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#FFF0F2] text-[#E51937] border border-[#E51937]/20 flex items-center justify-center flex-shrink-0 font-bold text-xs font-[var(--font-jost)]">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-[#1F2432] leading-snug font-[var(--font-jost)]">
                        {audience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Will Learn (Curriculum Outline) */}
              <div className="pt-6 border-t border-[#E2E9EB]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] block mb-2 font-[var(--font-jost)]">
                  CURRICULUM MODULES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-2">
                  What You Will Learn
                </h2>
                <p className="text-sm text-[#6C757D] mb-6 font-[var(--font-dm-sans)]">
                  Editable placeholder syllabus designed for fast practical competence:
                </p>

                <div className="flex flex-col gap-3 font-[var(--font-jost)]">
                  {course.curriculumOutline.map((moduleItem, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#F5F7F9] border border-[#E2E9EB] flex items-center gap-4 transition-colors hover:bg-[#FFF0F2]"
                    >
                      <span className="w-8 h-8 rounded-xl bg-[#E51937] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#1F2432]">
                        {moduleItem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course-Specific FAQ */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="pt-6 border-t border-[#E2E9EB]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] block mb-2 font-[var(--font-jost)]">
                    COMMON QUESTIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-6">
                    Frequently Asked Questions About This Course
                  </h2>

                  <div className="flex flex-col gap-3">
                    {course.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;

                      return (
                        <div
                          key={idx}
                          className={`rounded-2xl border transition-all overflow-hidden ${
                            isOpen
                              ? "border-[#E51937] bg-white shadow-md shadow-[#E51937]/5"
                              : "border-[#E2E9EB] bg-[#F5F7F9]"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => toggleFaq(idx)}
                            aria-expanded={isOpen}
                            className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                          >
                            <span className="text-base font-bold text-[#1F2432] font-[var(--font-jost)]">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#E51937] transition-transform duration-200 flex-shrink-0 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#6C757D] leading-relaxed border-t border-[#E2E9EB]/60 pt-3 font-[var(--font-dm-sans)]">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Free Demo Form Section */}
              <div id="demo-form" className="pt-6 border-t border-[#E2E9EB] scroll-mt-24">
                <DemoForm defaultCourse={course.title} />
              </div>
            </div>

            {/* Right Column: Sticky Quick Info Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 flex flex-col gap-6">
                {/* Quick Info Box */}
                <div className="bg-white rounded-3xl p-7 border-2 border-[#E51937] shadow-xl shadow-[#E51937]/8">
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      sizes="350px"
                      className="object-cover"
                    />
                    {course.badge && (
                      <span className="absolute top-3 left-3 bg-[#E51937] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow font-[var(--font-jost)]">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-4">
                    Course Summary
                  </h3>

                  <div className="flex flex-col gap-4 text-sm pb-6 border-b border-[#E2E9EB] font-[var(--font-jost)]">
                    {/* Duration */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#6C757D]">
                        <Clock className="w-4 h-4 text-[#E51937]" />
                        <span>Duration</span>
                      </span>
                      <strong className="text-[#1F2432] text-right">
                        {course.duration}
                      </strong>
                    </div>

                    {/* Schedule */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#6C757D]">
                        <Calendar className="w-4 h-4 text-[#E51937]" />
                        <span>Schedule</span>
                      </span>
                      <strong className="text-[#1F2432] text-right">
                        {course.schedule}
                      </strong>
                    </div>

                    {/* Fee */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#6C757D]">
                        <DollarSign className="w-4 h-4 text-[#E51937]" />
                        <span>Course Fee</span>
                      </span>
                      <strong className="text-[#1F2432] text-right font-bold">
                        {course.fee}
                      </strong>
                    </div>

                    {/* Batch Type */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#6C757D]">
                        <Users className="w-4 h-4 text-[#E51937]" />
                        <span>Cohort Structure</span>
                      </span>
                      <strong className="text-[#1F2432] text-right text-xs font-bold">
                        {course.batchType}
                      </strong>
                    </div>
                  </div>

                  <div className="pt-6 flex flex-col gap-3 font-[var(--font-jost)]">
                    <Link
                      href="#demo-form"
                      className="w-full inline-flex items-center justify-center bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-md shadow-[#E51937]/20 hover:scale-[1.01]"
                    >
                      Book Free Demo Class
                    </Link>

                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F7F9] hover:bg-[#FFF0F2] text-[#1F2432] font-bold text-xs py-3 rounded-full transition-colors border border-[#E2E9EB]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E51937]" />
                      <span>WhatsApp Inquiries</span>
                    </a>
                  </div>

                  <div className="mt-4 text-[11px] text-[#6C757D] flex items-center justify-center gap-1.5 font-[var(--font-dm-sans)]">
                    <MapPin className="w-3.5 h-3.5 text-[#E51937] flex-shrink-0" />
                    <span>Appayan Afroz Tower, College Road, Feni (5th Floor)</span>
                  </div>
                </div>

                {/* Trust guarantee card */}
                <div className="bg-[#F5F7F9] p-5 rounded-2xl border border-[#E2E9EB] text-xs text-[#6C757D] font-[var(--font-dm-sans)]">
                  <strong className="text-[#1F2432] block mb-1 font-bold font-[var(--font-jost)]">
                    Zero-Cost Demo Guarantee:
                  </strong>
                  Sit in an actual lecture, meet your instructor, and evaluate our curriculum before paying any enrollment fee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Free Demo Class Booking Form for this Course */}
      <section id="demo-form" className="py-20 md:py-24 bg-[#F5F7F9] relative scroll-mt-24 border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-[#181D26] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
            {/* Educeet decorative accents */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#E51937]/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm font-[var(--font-jost)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E51937]" />
                  RESERVE YOUR ORIENTATION SEAT
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-[var(--font-jost)] mb-4">
                  Experience a Free Demo Class
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6 max-w-lg font-[var(--font-dm-sans)]">
                  Sit in an actual class for <strong className="text-white font-bold">{course.title}</strong>, meet the instructor, and experience our teaching methodology before enrolling.
                </p>

                <div className="flex flex-col gap-3 text-sm text-white/90 font-[var(--font-jost)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>100% Free — Zero obligation to register</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Structured interactive practice in capped cohorts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Morning, afternoon &amp; working professional batch slots</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 w-full">
                <DemoForm defaultCourse={course.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Courses */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] relative border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="EXPLORE MORE"
            tagColor="red"
            title="Related Programs You Might Like"
            subtext="Discover more courses designed to accelerate your career and communication skills in Feni."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCourses.map((relCourse, idx) => (
              <CourseCard key={relCourse.id} course={relCourse} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner
        title={`Ready to Master ${course.title}?`}
        subtext="Seats are strictly limited to maintain personal mentorship and high engagement. Reserve your free demo seat today."
        primaryCtaText="Book a Free Demo Class"
        primaryCtaLink="#demo-form"
        badge="START YOUR JOURNEY"
      />
    </>
  );
}

export default CourseDetailClientView;
