import type { Metadata } from "next";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Join The Den — StayDen Newsletter",
  description: "Weekly hosiery reviews, denier guides, and styling secrets. Join The Den Letter every Thursday.",
};

export default function NewsletterPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-header__title">
          Join <em>The Den</em>
        </h1>
        <p className="page-header__sub">
          Weekly stories, reviews & styling secrets
        </p>
      </div>

      <div className="page-body" style={{ textAlign: "center" }}>
        <p>
          The Den Letter arrives every Thursday. Inside you will find new
          reviews, denier guides, styling inspiration, and exclusive offers
          on our PDF guides — all written with the same editorial care as
          everything else on StayDen.
        </p>

        <p>
          No spam, no data selling, unsubscribe anytime. We respect your
          inbox the way we respect good hosiery — with care and intention.
        </p>
      </div>

      <NewsletterSection />
    </>
  );
}
