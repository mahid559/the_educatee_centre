import React from "react";
import type { Metadata } from "next";
import AboutClientView from "./AboutClientView";

export const metadata: Metadata = {
  title: "About Us | Our Story, Mission & Mentorship",
  description:
    "Learn about The Educatee Centre in Feni, founded in 2022 by Engr. Zahir Uddin Babar. Dedicated to removing the fear of spoken English and teaching practical IT skills.",
  openGraph: {
    title: "About The Educatee Centre | Feni's Friendly English & IT Institute",
    description:
      "Founded in 2022 in Feni. Discover our story, mission, founder mentorship, dedicated computer lab, and vibrant campus culture.",
    url: "https://theeducatee.com/about",
    images: [
      {
        url: "/images/about/about-community.jpg",
        width: 1200,
        height: 630,
        alt: "The Educatee Centre classroom and learning facilities in Feni",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClientView />;
}
