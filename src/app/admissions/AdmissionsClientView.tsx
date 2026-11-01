"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  GraduationCap,
  Compass,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { DemoForm } from "@/components/DemoForm";
import { AdmissionSteps } from "@/components/AdmissionSteps";
import { cardLiftProps } from "@/lib/motion";

export default function AdmissionsClientView() {
  const {
    admissionSteps,
    offers,
    programs,
    targetAudiences,
    testimonials,
    faqs,
    contact,
  } = siteContent;

  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const getAudienceIcon = (icon: string) => {
    switch (icon) {
      case "graduation-cap":
        return <GraduationCap className="w-7 h-7 text-[#C81E2B]" />;
      case "compass":
        return <Compass className="w-7 h-7 text-slate-700" />;
      case "briefcase":
        return <Briefcase className="w-7 h-7 text-slate-800" />;
      case "sparkles":
      default:
        return <Sparkles className="w-7 h-7 text-[#C81E2B]" />;
    }
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ENROLLMENT & TUITION"
        title="Admissions &amp; Fees"
        accentText="Guide"
        subtext="Clear 4-step admission process, special 50% discount offers, fee overview, and 100% free demo classes before every batch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions & Fees" },
        ]}
      />

      {/* 2. How to Enroll (Serpentine Timeline matching reference) */}
      <AdmissionSteps />

      {/* 3. Current Offers Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9] relative border-y border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="COMMUNITY &amp; SCHOLARSHIP"
            title="Intake Initiatives &amp; Fee Concessions"
            subtext="Special incentives established to encourage female education and career-oriented early enrollments in Feni."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offers.map((offer, idx) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                {...cardLiftProps}
                className="bg-white rounded-2xl p-7 border border-[#E2E9EB] shadow-[0_2px_12px_-2px_rgba(3,89,78,0.06)] hover:shadow-xl hover:border-[#03594E]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#E7F3F1] text-[#03594E] border border-[#03594E]/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full font-[var(--font-jost)]">
                      {offer.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 font-[var(--font-jost)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active for Next Cohort
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-[var(--font-jost)] text-[#1F2432] group-hover:text-[#03594E] transition-colors mb-2.5 leading-snug">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6C757D] leading-relaxed mb-6 font-[var(--font-dm-sans)]">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E9EB] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#6C757D] font-[var(--font-dm-sans)]">
                    {offer.note}
                  </span>
                  <Link
                    href="#free-demo"
                    className="inline-flex items-center gap-1.5 bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-xs px-4 py-2 rounded-full shadow-xs transition-all font-[var(--font-jost)]"
                  >
                    <span>Claim Offer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#6C757D] font-[var(--font-dm-sans)]">
            * Note: Offers are applied upon formal batch registration at our Feni office. Seats are limited.
          </div>
        </div>
      </section>

      {/* 4. Course Fees & Schedules Table */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="TUITION &amp; TIMELINE"
            title="Course Fees &amp; Batch Schedules"
            subtext="Official fee schedules and upcoming batch timelines are confirmed before each intake. Contact us or attend a demo class for current details."
          />

          <div className="overflow-x-auto bg-white rounded-3xl border border-[#E2E9EB] shadow-xl shadow-[#03594E]/5">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#03594E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-[var(--font-jost)]">
                  <th className="py-4 px-6 rounded-tl-3xl">Course Name</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Fee</th>
                  <th className="py-4 px-6">Duration</th>
                  <th className="py-4 px-6">Batch Schedule</th>
                  <th className="py-4 px-6 rounded-tr-3xl text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E9EB] text-sm text-[#1F2432]">
                {programs.map((p, idx) => (
                  <tr
                    key={p.id}
                    className={`hover:bg-[#F5F7F9] transition-colors ${
                      idx % 2 === 1 ? "bg-[#F5F7F9]/50" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="font-bold text-[#1F2432] font-[var(--font-jost)]">
                        {p.title}
                      </div>
                      <div className="text-xs text-[#6C757D] font-[var(--font-dm-sans)]">
                        {p.subtitle}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#03594E] font-[var(--font-jost)]">
                      {p.category}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#1F2432] font-[var(--font-jost)]">
                      {p.fee}
                    </td>
                    <td className="py-4 px-6 font-medium text-[#6C757D] font-[var(--font-dm-sans)]">
                      {p.duration}
                    </td>
                    <td className="py-4 px-6 font-medium text-[#6C757D] font-[var(--font-dm-sans)]">
                      {p.schedule}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/programs/${p.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#03594E] hover:underline font-[var(--font-jost)]"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-[#E7F3F1] border border-[#03594E]/20 text-xs text-[#03594E] text-center font-[var(--font-dm-sans)]">
            Fee and schedule details are updated periodically before intake dates. Call our admissions desk at 01874-232272 for exact current batch allocations.
          </div>
        </div>
      </section>

      {/* 5. Who Can Join Section */}
      <section className="py-20 md:py-24 bg-[#F5F7F9] relative border-y border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="STUDENT PROFILES"
            title="Who Enrolls at The Educatee Centre?"
            subtext="Structured learning tracks designed specifically for adult professionals, SSC/Dakhil students, and career aspirants."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                {...cardLiftProps}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E9EB] shadow-[0_2px_12px_-2px_rgba(3,89,78,0.06)] hover:shadow-xl hover:border-[#03594E]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E7F3F1] border border-[#03594E]/20 flex items-center justify-center mb-5 text-[#03594E] shadow-xs">
                    {getAudienceIcon(group.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2432] group-hover:text-[#03594E] transition-colors mb-2 font-[var(--font-jost)] leading-snug">
                    {group.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6C757D] leading-relaxed font-[var(--font-dm-sans)]">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E9EB] flex items-center gap-2 text-xs font-semibold text-[#6C757D] font-[var(--font-jost)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#03594E]" />
                  <span>Eligible for all batches</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What Students Say */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="STUDENT VOICES"
            title="What Students Say"
            subtext="Real experiences and honest feedback from students who achieved confidence and fluency at The Educatee Centre."
          />

          {(() => {
            const admissionsReviews = [
              testimonials.find((t) => t.id === "fb-5"),
              testimonials.find((t) => t.id === "fb-6"),
              testimonials.find((t) => t.id === "fb-3"),
            ].filter(Boolean) as typeof testimonials;

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                  {admissionsReviews.map((item, idx) => (
                    <div key={item.id} className="h-[190px]">
                      <TestimonialCard
                        item={item}
                        index={idx}
                        animate
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <a
                    href="https://www.facebook.com/TheEducatee.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:text-[#166FE5] transition-colors group px-4 py-2 rounded-full hover:bg-[#1877F2]/10 font-[var(--font-jost)]"
                  >
                    <span>See what students say on Facebook</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* 7. Admission FAQ Accordion */}
      <section className="py-20 md:py-24 bg-[#F5F7F9] relative border-t border-[#E2E9EB]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="HAVE QUESTIONS?"
            title="Admission FAQs"
            subtext="Quick answers to common questions about admission requirements, batch timings, and demo classes."
          />

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "border-[#03594E] bg-white shadow-md shadow-[#03594E]/5"
                      : "border-[#E2E9EB] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#1F2432] font-[var(--font-jost)]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#03594E] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#6C757D] leading-relaxed border-t border-[#E2E9EB]/60 pt-4 font-[var(--font-dm-sans)]">
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
      </section>

      {/* 8. Free Demo Class Booking Form */}
      <section id="free-demo" className="py-20 md:py-28 bg-white relative scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-[#03594E] rounded-3xl md:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Educeet accents */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#F8C62F]/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-[#1F2432] bg-[#F8C62F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-sm font-[var(--font-jost)]">
                  START YOUR ADMISSION HERE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-[var(--font-jost)] mb-4">
                  Book Your Free Demo Class
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6 max-w-lg font-[var(--font-dm-sans)]">
                  Submit the form in 30 seconds. We will contact you via WhatsApp / phone to schedule your free demo class at Appayan Afroz Tower.
                </p>

                <div className="flex flex-col gap-3 text-sm text-white/90 font-[var(--font-jost)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F8C62F]" />
                    <span>No registration fee required for the demo orientation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F8C62F]" />
                    <span>Dedicated female &amp; professional cohorts available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F8C62F]" />
                    <span>Cohorts strictly capped at 16 candidates</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Visit Us / Call Us Strip */}
      <section className="py-12 bg-[#F5F7F9] border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-[#1F2432]">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E9EB] text-[#03594E] flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base text-[#1F2432] font-[var(--font-jost)]">
                  {contact.address}
                </p>
                <p className="text-xs text-[#6C757D] font-[var(--font-dm-sans)]">5th Floor, Appayan Afroz Tower (Elevator Access)</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-[var(--font-jost)]">
              <a
                href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#1F2432] border border-[#E2E9EB] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-sm hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-[#03594E]" />
                <span>Call {contact.primaryPhone}</span>
              </a>

              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#F8C62F]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
