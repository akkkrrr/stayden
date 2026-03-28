import type { Metadata } from "next";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "About — StayDen",
  description: "Independent nylon lifestyle journal. Honest reviews, denier guides, and styling for those who understand hosiery.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-header__title">
          About <em>StayDen</em>
        </h1>
        <p className="page-header__sub">Every denier tells a story</p>
      </div>

      <div className="page-body">
        <p>
          StayDen was born from a simple frustration: hosiery deserved better.
          Better writing. Better curation. Better respect for the women who wear
          it and the culture that surrounds it. We are a journal, a guide, and a
          quiet community — built for those who understand that the right pair of
          stockings can change how you move through a room.
        </p>

        <h2>What We Do</h2>
        <p>
          We review stay-ups, stockings, and tights with the seriousness they
          deserve. We test across body types, wear them for days not minutes, and
          write about what actually works — not what a brand tells us to say. Our
          denier guides break down the science and the art of choosing the right
          weight for every occasion.
        </p>

        <h2>The Philosophy</h2>
        <p>
          Hosiery sits at the intersection of fashion, sensuality, and personal
          ritual. We treat it as all three. StayDen is not a catalog — it is an
          editorial space where texture, denier, and the quiet confidence of a
          perfectly fitted stay-up are given the language they deserve.
        </p>

        <h2>For Whom</h2>
        <p>
          For the woman who knows her denier. For the partner who wants to
          understand the difference. For anyone who believes that what touches
          your skin matters — and that elegance is a daily choice, not a special
          occasion.
        </p>

        <h2>The Team</h2>
        <p>
          StayDen is an independent publication. No corporate backing, no
          investor pressure. Just a small team with a genuine love for hosiery
          culture and a commitment to writing that respects your intelligence.
          We fund our work through affiliate partnerships and our curated PDF
          guides — always disclosed, always honest.
        </p>
      </div>

      <NewsletterSection />
    </>
  );
}
