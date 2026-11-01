import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteContent } from "@/data/content";
import CourseDetailClientView from "./CourseDetailClientView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteContent.programs.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = siteContent.programs.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | The Educatee Centre",
    };
  }

  return {
    title: `${course.title} | The Educatee Centre Feni`,
    description: `${course.description} Class batches strictly small in Feni. Book a free demo class today.`,
    openGraph: {
      title: `${course.title} | The Educatee Centre, Feni`,
      description: course.description,
      url: `https://theeducatee.com/programs/${course.slug}`,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.imageAlt,
        },
      ],
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = siteContent.programs.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Related courses (all except current)
  const relatedCourses = siteContent.programs
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  // Schema.org Course Structured Data
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteContent.brand.name,
      sameAs: "https://theeducatee.com",
    },
    educationalCredentialAwarded: "Certificate of Completion",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      location: {
        "@type": "Place",
        name: siteContent.brand.name,
        address: siteContent.contact.address,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <CourseDetailClientView course={course} relatedCourses={relatedCourses} />
    </>
  );
}
