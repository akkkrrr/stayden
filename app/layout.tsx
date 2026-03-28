import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/design-tokens.css";
import "@/styles/components.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "StayDen — Every Denier Tells a Story",
  description:
    "Elegant nylon lifestyle journal. Stay-ups, stockings, styling, reviews & the sensual art of hosiery.",
  keywords: [
    "stay-up stockings",
    "nylon fetish",
    "denier guide",
    "hosiery reviews",
    "stocking styling",
  ],
  metadataBase: new URL("https://stayden.vercel.app"),
  openGraph: {
    title: "StayDen — Every Denier Tells a Story",
    description:
      "Elegant nylon lifestyle journal. Reviews, guides, styling & the sensual art of hosiery.",
    url: "https://stayden.vercel.app",
    siteName: "StayDen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StayDen — Every Denier Tells a Story",
    description:
      "Elegant nylon lifestyle journal. Reviews, guides, styling & the sensual art of hosiery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://stayden.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://assets.mailerlite.com/js/universal.js"
          strategy="afterInteractive"
        />
        <Script id="mailerlite-init" strategy="afterInteractive">
          {`window.ml=window.ml||function(){(ml.q=ml.q||[]).push(arguments)};ml('account','2227910');`}
        </Script>
      </head>
      <body>
        <AgeGate />
        <Navigation />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
