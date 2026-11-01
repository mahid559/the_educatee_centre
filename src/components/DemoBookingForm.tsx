"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/content";
import { CheckCircle2, Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function DemoBookingForm() {
  const { programs, contact } = siteContent;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(programs[0]?.title || "SSC / Dakhil Spoken English");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Instant WhatsApp redirect with booking message
    const message = encodeURIComponent(
      `Hello The Educatee Centre, I would like to book a free trial demo class.\n\nName: ${fullName}\nPhone: ${phone}\nCourse: ${course}`
    );
    const whatsappUrl = `https://wa.me/8801874232272?text=${message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <section id="free-demo" className="py-20 md:py-28 bg-[#F5F7F9] relative scroll-mt-20 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Educeet it-contact-2-area Container */}
        <div className="bg-[#03594E] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glows */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#F8C62F]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Heading & Contact Info (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-[#F8C62F] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
                ONLINE REGISTRATIONS
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-[var(--font-jost)] mb-4">
                Admission Going on! Hurry Up To Reserve Your Seat
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg mb-8 font-[var(--font-dm-sans)]">
                Meet our certified instructors, step into our quiet 5th-floor classrooms,
                and discover how natural speaking English can be.
              </p>

              {/* Contact Information Cards in Educeet Style */}
              <div className="flex flex-col gap-3.5 w-full font-[var(--font-dm-sans)] text-left">
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <div className="w-10 h-10 rounded-lg bg-[#F8C62F] text-[#1F2432] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/70 uppercase block font-semibold">Direct Admission Call</span>
                    <span className="text-sm sm:text-base font-bold text-white">{contact.primaryPhone} / 01576-560505</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <div className="w-10 h-10 rounded-lg bg-[#F8C62F] text-[#1F2432] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/70 uppercase block font-semibold">Campus Address</span>
                    <span className="text-sm sm:text-base font-bold text-white">{contact.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <div className="w-10 h-10 rounded-lg bg-[#F8C62F] text-[#1F2432] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/70 uppercase block font-semibold">Reception Hours</span>
                    <span className="text-sm sm:text-base font-bold text-white">Sat – Thu: 9:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Query Submission Form (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-white text-[#1F2432] rounded-2xl p-7 sm:p-9 shadow-2xl border border-slate-100">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0C121D] mb-2 font-[var(--font-jost)]">
                        Demo Class Reserved!
                      </h3>
                      <p className="text-sm text-[#6C757D] leading-relaxed mb-6 font-[var(--font-dm-sans)]">
                        Thank you, <strong className="text-[#0C121D]">{fullName}</strong>! We have received your query for{" "}
                        <strong className="text-[#03594E]">{course}</strong>. Our admissions desk will WhatsApp / call you at{" "}
                        <strong className="text-[#0C121D]">{phone}</strong> shortly with your batch schedule.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFullName("");
                          setPhone("");
                        }}
                        className="text-xs font-bold text-[#03594E] hover:underline"
                      >
                        ← Submit another query
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4 text-left font-[var(--font-dm-sans)]"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0C121D] font-[var(--font-jost)]">
                          Submit Your Query
                        </h3>
                        <p className="text-xs text-[#6C757D] mt-1">
                          Takes 30 seconds. We will confirm your seat schedule.
                        </p>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Full Name <span className="text-[#03594E]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Full Name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#03594E] focus:border-[#03594E] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Phone / WhatsApp Number <span className="text-[#03594E]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="018XXXXXXXX or 017XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#03594E] focus:border-[#03594E] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                        />
                      </div>

                      {/* Course Select */}
                      <div>
                        <label
                          htmlFor="course"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Select Course / Reason <span className="text-[#03594E]">*</span>
                        </label>
                        <select
                          id="course"
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#03594E] focus:border-[#03594E] transition-all bg-slate-50 focus:bg-white text-slate-900"
                        >
                          {programs.map((p) => (
                            <option key={p.id} value={p.title}>
                              {p.title} ({p.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit Button in Educeet Warm Gold */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#F8C62F] hover:bg-[#eab308] disabled:opacity-60 text-[#1F2432] font-extrabold text-sm sm:text-base py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Submitting..." : "Submit Query Now →"}</span>
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#03594E]" />
                        <span>Zero commitment • Free classroom orientation trial</span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
