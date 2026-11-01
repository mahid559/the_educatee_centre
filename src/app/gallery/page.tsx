import React, { Suspense } from "react";
import type { Metadata } from "next";
import GalleryClientView from "./GalleryClientView";

export const metadata: Metadata = {
  title: "Life at The Educatee Centre | Photo Gallery",
  description:
    "Explore authentic photo archives of Graduation Day, Certificates, Awards, interactive Classroom sessions, and Outdoor & Fun moments at The Educatee Centre in Feni.",
  keywords: [
    "The Educatee Centre Gallery",
    "Life at Educatee Feni",
    "Graduation Day Educatee",
    "Certificates Educatee Centre",
    "Awards Educatee Feni",
    "Classroom photos Educatee",
    "Appayan Afroz Tower student moments",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Life at The Educatee Centre | Photo Gallery",
    description:
      "Explore authentic photo archives of Graduation Day, Certificates, Awards, interactive Classroom sessions, and Outdoor & Fun moments at The Educatee Centre in Feni.",
    url: "https://theeducatee.com/gallery",
    siteName: "The Educatee Centre",
    images: [
      {
        url: "/images/gallery/graduation/featured.jpg",
        width: 1200,
        height: 630,
        alt: "Life at The Educatee Centre",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#C81E2B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <GalleryClientView />
    </Suspense>
  );
}
