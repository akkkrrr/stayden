import Link from "next/link";

export default function HeroEditorial() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <div className="hero__eyebrow">Nylon Lifestyle &amp; Fetish Journal</div>
        <h1 className="hero__title">
          Every <em>Denier</em>
          <br />
          Tells a Story
        </h1>
        <p className="hero__sub">
          Explore the art of nylon — from ultra-sheer elegance to opaque luxury.
          Styling, reviews, and the sensual world of hosiery.
        </p>
        <div className="hero__actions">
          <Link href="/journal" className="btn-primary">
            Explore the Journal
          </Link>
          <Link href="/newsletter" className="btn-ghost">
            Free Denier Guide
          </Link>
        </div>
      </div>
      <div className="hero__denier">
        <div className="hero__denier-number">15</div>
        <div className="hero__denier-label">Denier of the Week</div>
      </div>
      <div className="hero__seam" />
    </section>
  );
}
