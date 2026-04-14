import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeus Consulting Services | Smarter Strategies, Stronger Results",
  description:
    "Forward-thinking, data-driven consulting solutions for businesses seeking expert guidance to scale, innovate, and achieve sustainable growth.",
  keywords: [
    "consulting",
    "business strategy",
    "Zeus Consulting",
    "business growth",
    "AI implementation",
    "small business consulting",
  ],
  openGraph: {
    title: "Zeus Consulting Services",
    description: "Smarter strategies, stronger results. Unlock your business's full potential.",
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GV523QSXWG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GV523QSXWG');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <div className="noise-overlay" />
        <AnalyticsProvider />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
