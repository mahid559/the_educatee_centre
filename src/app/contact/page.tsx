import React from "react";
import type { Metadata } from "next";
import ContactClientView from "./ContactClientView";

export const metadata: Metadata = {
  title: "Contact Us & Campus Location | Feni",
  description:
    "Get in touch with The Educatee Centre in Feni. Location: Appayan Afroz Tower, College Road, 5th floor. Phone: 01874-232272, WhatsApp, Facebook, and Google Maps direction.",
  openGraph: {
    title: "Contact The Educatee Centre | Feni Campus & Phone Details",
    description:
      "Visit us at Appayan Afroz Tower, College Road, Feni. Call 01874-232272 or message us on WhatsApp.",
    url: "https://theeducatee.com/contact",
    images: [
      {
        url: "/images/about/about-community.jpg",
        width: 1200,
        height: 630,
        alt: "The Educatee Centre location and campus in Feni",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
