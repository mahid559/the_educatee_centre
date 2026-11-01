import React from "react";
import type { Metadata } from "next";
import AdmissionsClientView from "./AdmissionsClientView";

export const metadata: Metadata = {
  title: "Admissions & Fees | How to Enroll & Batch Details",
  description:
    "Admissions guide, fee schedules, special 50% discount offers, and free demo booking at The Educatee Centre in Feni. Simple 4-step admission process.",
  openGraph: {
    title: "Admissions & Fees | The Educatee Centre, Feni",
    description:
      "Simple 4-step enrollment process, special discounts on Girls & IELTS batches, and 100% free demo classes in Feni.",
    url: "https://theeducatee.com/admissions",
    images: [
      {
        url: "/images/about/about-community.jpg",
        width: 1200,
        height: 630,
        alt: "Admissions at The Educatee Centre Feni",
      },
    ],
  },
};

export default function AdmissionsPage() {
  return <AdmissionsClientView />;
}
