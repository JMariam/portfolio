import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = "https://mariamjubril.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Otolorin Jubril | Frontend Developer & Creative Technologist",
    template: "%s | Otolorin Jubril",
  },
  description:
    "Otolorin Jubril is a Frontend Developer and Creative Technologist specializing in Next.js, React, Angular, and TypeScript — building scalable, high-performance web experiences that merge design precision with engineering excellence.",
  keywords: [
    "Otolorin Jubril",
    "Otolorin Jubril portfolio",
    "Otolorin Jubril frontend developer",
    "Frontend Developer",
    "Creative Technologist",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript Developer",
    "Web Developer",
    "UI Developer",
    "Software Engineer",
    "portfolio",
    "web development",
    "modern web interfaces",
  ],
  authors: [{ name: "Otolorin Jubril", url: siteUrl }],
  creator: "Otolorin Jubril",
  publisher: "Otolorin Jubril",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Otolorin Jubril | Frontend Developer & Creative Technologist",
    description:
      "Otolorin Jubril is a Frontend Developer and Creative Technologist crafting scalable, high-performance web experiences with Next.js, React, Angular, and TypeScript.",
    url: siteUrl,
    siteName: "Otolorin Jubril",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Otolorin Jubril — Frontend Developer & Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otolorin Jubril | Frontend Developer & Creative Technologist",
    description:
      "Otolorin Jubril is a Frontend Developer and Creative Technologist crafting scalable, high-performance web experiences with Next.js, React, Angular, and TypeScript.",
    images: ["/og-image.png"],
    creator: "@MariamJubril7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Otolorin Jubril",
  url: siteUrl,
  jobTitle: "Frontend Developer & Creative Technologist",
  description:
    "Otolorin Jubril is a Frontend Developer and Creative Technologist specializing in Next.js, React, Angular, and TypeScript, building scalable and high-performance web applications.",
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    "https://www.linkedin.com/in/mariam-jubril",
    "https://github.com/JMariam",
    "https://twitter.com/MariamJubril7",
  ],
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "UI/UX Design",
    "Web Performance",
    "Accessibility",
    "Responsive Design",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Otolorin Jubril Portfolio",
  url: siteUrl,
  description:
    "The professional portfolio of Otolorin Jubril, Frontend Developer and Creative Technologist.",
  author: {
    "@type": "Person",
    name: "Otolorin Jubril",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Otolorin Jubril?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otolorin Jubril is a Frontend Developer and Creative Technologist who builds scalable, responsive, and high-performance web applications. She specializes in Next.js, React, Angular, and TypeScript, with a strong focus on intuitive user interfaces, web accessibility, and design-driven engineering.",
      },
    },
    {
      "@type": "Question",
      name: "What does Otolorin Jubril do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otolorin Jubril designs and builds modern web applications, working across the full frontend stack. Her work includes component-based architecture, responsive design systems, API integration, performance optimization, and crafting seamless user experiences using React, Next.js, and Angular.",
      },
    },
    {
      "@type": "Question",
      name: "What is Otolorin Jubril's tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otolorin Jubril's core tech stack includes: React, Next.js, Angular, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, Zod, REST APIs, Git, and modern frontend tooling. She is proficient in building accessible, performance-optimized web interfaces.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I see Otolorin Jubril's work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can view Otolorin Jubril's portfolio and projects at https://mariamjubril.vercel.app. Her GitHub profile at https://github.com/JMariam contains open-source projects and code samples.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Otolorin Jubril?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Otolorin Jubril via email at mariamjubril29@gmail.com, or connect on LinkedIn at https://www.linkedin.com/in/mariam-jubril.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
