import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      className={`${bebasNeue.variable} ${dmSans.variable}`}
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
