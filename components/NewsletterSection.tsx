"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
  }
}

export default function NewsletterSection() {
  useEffect(() => {
    // Re-trigger MailerLite form rendering after client-side navigation
    if (window.ml) {
      window.ml("webforms", "init");
    }
  }, []);

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__icon">&mdash; D &mdash;</div>
        <h2 className="newsletter__title">This Week in The Den</h2>
        <p className="newsletter__text">
          Every Friday: curated picks, styling tips, and an exclusive denier
          insight. Plus a free Denier Guide PDF when you join.
        </p>

        {/* MailerLite embedded form — handles double opt-in, validation, everything */}
        <div className="ml-embedded" data-form="cI3msB"></div>
      </div>
    </section>
  );
}
