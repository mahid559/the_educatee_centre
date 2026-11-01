import type { Metadata, Viewport } from "next";
import { Jost, DM_Sans, Open_Sans, Ubuntu, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { siteContent } from "@/data/content";

const jost = Jost({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

const nunito = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C81E2B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://theeducatee.com"),
  title: {
    default: "The Educatee Centre | Spoken English, IELTS & IT Training in Feni",
    template: "%s | The Educatee Centre",
  },
  description:
    "Feni's premier English language & IT institute. Master Spoken English (separate Girls batch & evening Professional batch), IELTS preparation with free mock tests (max 16 students), and practical computer training.",
  keywords: [
    "The Educatee Centre",
    "Educatee Feni",
    "Spoken English Feni",
    "IELTS Feni",
    "Computer Training Feni",
    "Zahir Uddin Babar",
    "English language institute Feni",
    "Girls spoken english batch Feni",
    "IT training Feni",
  ],
  authors: [{ name: "Engr. Zahir Uddin Babar" }],
  creator: "The Educatee Centre",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theeducatee.com",
    title: "The Educatee Centre | Spoken English, IELTS & IT Training in Feni",
    description:
      "Overcome Your Fear of English. Build Your Global Future with friendly mentorship, small batches, and practical learning.",
    siteName: "The Educatee Centre",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Students learning at The Educatee Centre, Feni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Educatee Centre | Spoken English, IELTS & IT Training in Feni",
    description:
      "Overcome Your Fear of English. Build Your Global Future with friendly mentorship, small batches, and practical learning.",
    images: ["/images/hero/hero.jpg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteContent.brand.name,
    alternateName: "Educatee Feni",
    url: "https://theeducatee.com",
    logo: "https://theeducatee.com/logo.png",
    description: siteContent.brand.subtext,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.contact.address,
      addressLocality: "Feni",
      addressRegion: "Chittagong",
      addressCountry: "BD",
    },
    telephone: siteContent.contact.primaryPhone,
    founder: {
      "@type": "Person",
      name: siteContent.founder.name,
      jobTitle: siteContent.founder.title,
    },
    sameAs: [
      siteContent.contact.facebookUrl,
      siteContent.contact.whatsappLink,
    ],
  };

  return (
    <html
      lang="en"
      className={`${jost.variable} ${dmSans.variable} ${ubuntu.variable} ${nunito.variable} ${openSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#54595F] selection:bg-[#C81E2B] selection:text-white">
        {/* Global Site Header - Sits directly at top */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1">{children}</main>

        {/* Global Site Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Connect Button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
