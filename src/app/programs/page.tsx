import React from "react";
import type { Metadata } from "next";
import ProgramsClientView from "./ProgramsClientView";

export const metadata: Metadata = {
  title: "Programs & Courses | Spoken English, IELTS & IT Training",
  description:
    "Explore our full curriculum at The Educatee Centre in Feni: SSC/Dakhil Spoken English (separate Girls batch), Spoken English for Professionals, IELTS Preparation (small groups of 16), Basic Computer & MS Office, Social Media Marketing, and Smart Handwriting.",
  openGraph: {
    title: "Our Programs | The Educatee Centre, Feni",
    description:
      "Skill-focused courses with zero fear. From spoken English fluency and target IELTS bands to hands-on computer training in Feni.",
    url: "https://theeducatee.com/programs",
    images: [
      {
        url: "/images/programs/ssc-dakhil-spoken-english.png",
        width: 1200,
        height: 630,
        alt: "Courses and programs at The Educatee Centre Feni",
      },
    ],
  },
};

export default function ProgramsPage() {
  return <ProgramsClientView />;
}
