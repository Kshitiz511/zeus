import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeus Consulting Services | Strategy, Leadership & AI for Sustainable Business Growth",
  description:
    "Zeus Consulting partners with executive teams to align strategy, leadership development, and AI into one operating system for sustainable growth. State of Florida Approved Vendor.",
  keywords: [
    "executive consulting",
    "business sustainability",
    "fractional CXO",
    "AI readiness consulting",
    "strategic planning consultant Florida",
    "leadership development consulting",
  ],
  openGraph: {
    title: "Zeus Consulting Services",
    description: "Strategy, Leadership & AI for Sustainable Business Growth.",
    type: "website",
    url: "https://zeusconsultingservices.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
