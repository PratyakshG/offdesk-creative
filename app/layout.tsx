import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import { Bebas_Neue, Figtree } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Offdesk Creative Studio",
    template: "%s | Offdesk Creative Studio",
  },
  description:
    "Photography, Videography, Graphic Design & Post Production. We bring your brand to life through stunning visuals.",
  keywords: [
    "creative agency",
    "photography",
    "videography",
    "graphic design",
    "photo studio",
  ],
  openGraph: {
    type: "website",
    siteName: "Offdesk Creative Studio",
    title: "Offdesk Creative Studio",
    description: "Photography, Videography, Graphic Design & Post Production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${figtree.variable}`}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
