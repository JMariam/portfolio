import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: {
    default: "Mariam Jubril – Frontend Developer",
    template: "%s | Mariam Jubril",
  },
  description:
    "Mariam Jubril is a Frontend Developer specializing in Next.js, Angular, TypeScript, and modern web interfaces.",
  keywords: [
    "Mariam Jubril",
    "Mariam Jubril Frontend Developer",
    "Frontend Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Mariam Jubril" }],
  creator: "Mariam Jubril",
  metadataBase: new URL("https://mariamjubril.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mariam Jubril – Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js, Angular, and TypeScript.",
    url: "https://mariamjubril.vercel.app",
    siteName: "Mariam Jubril Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mariam Jubril",
              url: "https://mariamjubril.vercel.app",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://www.linkedin.com/in/mariam-jubril",
                "https://github.com/JMariam",
                "https://twitter.com/MariamJubril7",
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
