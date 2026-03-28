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
  verification: {
    google: "brR9RunL7BlN6VvR8hBhxF59cKWN3fiESSCYDVlWRK4",
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-08MH5C9VEG"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-08MH5C9VEG');`}
        </Script>
        {/* MailerLite */}
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
