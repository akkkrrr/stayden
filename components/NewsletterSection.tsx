"use client";

export default function NewsletterSection() {
  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__icon">&mdash; D &mdash;</div>
        <h2 className="newsletter__title">This Week in The Den</h2>
        <p className="newsletter__text">
          Every Friday: curated picks, styling tips, and an exclusive denier
          insight. Plus a free Denier Guide PDF when you join.
        </p>
        <form
          className="newsletter__form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("MailerLite integration coming soon!");
          }}
        >
          <input
            type="email"
            className="newsletter__input"
            placeholder="Your email address..."
            required
          />
          <button type="submit" className="newsletter__submit">
            Join The Den
          </button>
        </form>
      </div>
    </section>
  );
}
