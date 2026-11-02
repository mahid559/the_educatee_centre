"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Lock,
  ExternalLink,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { cardLiftProps } from "@/lib/motion";

export default function ContactClientView() {
  const { contact } = siteContent;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanPhone = phone.replace(/[\s-]/g, "");
    if (cleanPhone.length < 11) {
      setError("Please provide a valid 11-digit mobile number.");
      return;
    }

    if (!message.trim()) {
      setError("Please type your question or message.");
      return;
    }

    setIsSubmitting(true);

    // TODO: Connect this contact form to email webhook / WhatsApp API backend
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, phone, message }) })

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        accentText="&amp; Location"
        subtext="Have questions about courses, schedules, or admissions? Call, WhatsApp, or drop by our quiet 5th-floor campus in Feni."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* 2. Contact Cards Strip (4 Cards) */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              {...cardLiftProps}
              className="bg-white rounded-2xl p-7 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] border border-[#E51937]/20 text-[#E51937] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2432] font-[var(--font-jost)] mb-1">
                  Call Our Desk
                </h3>
                <p className="text-xs text-[#6C757D] mb-4 font-normal font-[var(--font-dm-sans)]">
                  Direct telephone assistance for admissions &amp; general inquiries.
                </p>
                <div className="flex flex-col gap-1 text-sm font-bold text-[#1F2432] font-[var(--font-jost)]">
                  <a href={`tel:${contact.primaryPhone.replace(/-/g, "")}`} className="hover:text-[#E51937] transition-colors">
                    {contact.primaryPhone}
                  </a>
                  <a href={`tel:${contact.secondaryPhone.replace(/-/g, "")}`} className="hover:text-[#E51937] text-xs text-[#6C757D] transition-colors">
                    {contact.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E2E9EB] text-xs font-semibold text-[#6C757D] font-[var(--font-jost)]">
                Sat - Thu: 9 AM - 8 PM
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              {...cardLiftProps}
              className="bg-white rounded-2xl p-7 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2432] font-[var(--font-jost)] mb-1">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-[#6C757D] mb-4 font-normal font-[var(--font-dm-sans)]">
                  Instant batch schedules, course syllabi, and quick orientation booking.
                </p>
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#E51937] hover:bg-[#C8132C] text-white px-4 py-2 rounded-full transition-all shadow-sm font-[var(--font-jost)]"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E2E9EB] text-xs font-semibold text-[#6C757D] font-[var(--font-jost)]">
                Fastest Response Channel
              </div>
            </motion.div>

            {/* Facebook Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              {...cardLiftProps}
              className="bg-white rounded-2xl p-7 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1F2432] font-[var(--font-jost)] mb-1">
                  Facebook Page
                </h3>
                <p className="text-xs text-[#6C757D] mb-4 font-normal font-[var(--font-dm-sans)]">
                  Follow batch announcements, student seminars, and campus events.
                </p>
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#1F2432] hover:bg-slate-800 text-white px-4 py-2 rounded-full transition-all shadow-sm font-[var(--font-jost)]"
                >
                  <span>Official Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E2E9EB] text-xs font-semibold text-[#6C757D] font-[var(--font-jost)]">
                Community Updates
              </div>
            </motion.div>

            {/* Campus Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              {...cardLiftProps}
              className="bg-white rounded-2xl p-7 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] border border-[#E51937]/20 text-[#E51937] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  <MapPin className="w-5 h-5 text-[#E51937]" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2432] font-[var(--font-jost)] mb-1">
                  Feni Campus
                </h3>
                <p className="text-xs font-medium text-[#6C757D] mb-2 leading-relaxed font-[var(--font-dm-sans)]">
                  {contact.address}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E2E9EB] text-xs font-semibold text-[#6C757D] font-[var(--font-jost)]">
                5th Floor • Lift Available
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Map Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9] relative border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Contact Form (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2E9EB] shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] block mb-1 font-[var(--font-jost)]">
                  SEND US AN INQUIRY
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-2">
                  How Can We Help You?
                </h2>
                <p className="text-xs sm:text-sm text-[#6C757D] mb-6 font-[var(--font-dm-sans)]">
                  Submit this form and our academic counselor will reply promptly via telephone or WhatsApp.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#FFF0F2] text-[#E51937] flex items-center justify-center mx-auto mb-4 border border-[#E51937]/20">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1F2432] mb-2 font-[var(--font-jost)]">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm text-[#6C757D] leading-relaxed mb-6 font-[var(--font-dm-sans)]">
                        Thank you, <strong className="text-[#1F2432]">{name}</strong>! We have received your inquiry. Our academic desk will reach out to you at{" "}
                        <strong className="text-[#E51937]">{phone}</strong> shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setPhone("");
                          setMessage("");
                        }}
                        className="text-xs font-bold text-[#E51937] hover:underline font-[var(--font-jost)]"
                      >
                        ← Send another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4 text-left"
                    >
                      {error && (
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                          {error}
                        </div>
                      )}

                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#1F2432] mb-1.5 font-[var(--font-jost)]"
                        >
                          Full Name <span className="text-[#E51937]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-all bg-[#F5F7F9] focus:bg-white text-[#1F2432] placeholder:text-[#6C757D]/60"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#1F2432] mb-1.5 font-[var(--font-jost)]"
                        >
                          Mobile / WhatsApp Number <span className="text-[#E51937]">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="018XXXXXXXX or 015XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-all bg-[#F5F7F9] focus:bg-white text-[#1F2432] placeholder:text-[#6C757D]/60"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="contact-msg"
                          className="block text-xs font-bold uppercase tracking-wider text-[#1F2432] mb-1.5 font-[var(--font-jost)]"
                        >
                          Your Message / Course Inquiry <span className="text-[#E51937]">*</span>
                        </label>
                        <textarea
                          id="contact-msg"
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us what course you are interested in, your preferred schedule, or any specific questions..."
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-all bg-[#F5F7F9] focus:bg-white text-[#1F2432] placeholder:text-[#6C757D]/60"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#E51937] hover:bg-[#C8132C] disabled:opacity-60 text-white font-bold text-sm sm:text-base py-4 rounded-full transition-all duration-200 shadow-md shadow-[#E51937]/20 hover:scale-[1.01] active:scale-[0.99] font-[var(--font-jost)]"
                      >
                        <Send className="w-4 h-4 text-[#F8C62F]" />
                        <span>{isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}</span>
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6C757D] font-[var(--font-dm-sans)]">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Your information is protected and used strictly for academic guidance.</span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Google Maps Embed & Campus Hours (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E9EB] shadow-sm overflow-hidden">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F2432] flex items-center gap-1.5 font-[var(--font-jost)]">
                    <MapPin className="w-4 h-4 text-[#E51937]" />
                    <span>Campus Location Map</span>
                  </span>
                  <a
                    href="https://maps.google.com/?q=College+Road,+Feni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#E51937] hover:underline inline-flex items-center gap-1 font-[var(--font-jost)]"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="relative w-full h-[320px] sm:h-[360px] rounded-xl overflow-hidden border border-[#E2E9EB]">
                  <iframe
                    title="The Educatee Centre Feni Campus Map"
                    src={contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Opening Hours & Lift Instructions Card */}
              <div className="bg-white rounded-2xl p-7 border border-[#E2E9EB] shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F2] text-[#E51937] flex items-center justify-center flex-shrink-0 border border-[#E51937]/20">
                    <Clock className="w-5 h-5 text-[#E51937]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2432] font-[var(--font-jost)]">
                      Campus Reception Hours
                    </h3>
                    <p className="text-xs text-[#6C757D] font-[var(--font-dm-sans)]">
                      {contact.openingHours}
                    </p>
                  </div>
                </div>

                {/* Campus Location Callout */}
                <div className="bg-[#F5F7F9] border border-[#E2E9EB] rounded-xl p-4 text-xs sm:text-sm text-[#1F2432] leading-relaxed font-[var(--font-dm-sans)]">
                  <strong className="text-[#1F2432] block uppercase tracking-wider mb-1 font-bold font-[var(--font-jost)]">
                    Campus Location &amp; Access:
                  </strong>
                  The Educatee Centre is on the <strong>5th floor</strong> of Appayan Afroz Tower, College Road, Feni, with full elevator access directly to our reception and executive classrooms.
                </div>

                {/* Direct quick buttons */}
                <div className="pt-2 flex flex-wrap gap-3 font-[var(--font-jost)]">
                  <a
                    href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-xs py-3 px-4 rounded-full transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>

                  <a
                    href={contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F5F7F9] hover:bg-[#FFF0F2] text-[#1F2432] border border-[#E2E9EB] font-bold text-xs py-3 px-4 rounded-full transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E51937]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
