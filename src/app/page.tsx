import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { HighlightsStrip } from "@/components/HighlightsStrip";
import { AboutPreview } from "@/components/AboutPreview";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FounderSection } from "@/components/FounderSection";
import { AdmissionSteps } from "@/components/AdmissionSteps";
import { FacilitiesGallery } from "@/components/FacilitiesGallery";

const SuccessStories = dynamic(
  () => import("@/components/SuccessStories").then((mod) => mod.SuccessStories)
);
const EventsPreview = dynamic(
  () => import("@/components/EventsPreview").then((mod) => mod.EventsPreview)
);
const FAQAccordion = dynamic(
  () => import("@/components/FAQAccordion").then((mod) => mod.FAQAccordion)
);
const DemoBookingForm = dynamic(
  () => import("@/components/DemoBookingForm").then((mod) => mod.DemoBookingForm)
);

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Highlights Strip */}
      <HighlightsStrip />

      {/* 5. About Preview */}
      <AboutPreview />

      {/* 6. Programs Grid */}
      <ProgramsGrid />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Founder Section (Engr. Zahir Uddin Babar) */}
      <FounderSection />

      {/* 9. How Admission Works */}
      <AdmissionSteps />

      {/* 10. Facilities Showcase */}
      <FacilitiesGallery />

      {/* 11. Success Stories & Testimonials */}
      <SuccessStories />

      {/* 12. Events & Gallery Preview */}
      <EventsPreview />

      {/* 13. FAQ Accordion */}
      <FAQAccordion />

      {/* 14. Final CTA Demo Booking Form */}
      <DemoBookingForm />
    </>
  );
}
