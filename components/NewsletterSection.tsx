"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("fields[email]", email);
      formData.append("ml-submit", "1");
      formData.append("anticsrf", "true");

      const res = await fetch(
        "https://assets.mailerlite.com/jsonp/2227910/forms/183154194363975322/subscribe",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      // mode: no-cors means we can't read response, but request goes through
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__icon">&mdash; D &mdash;</div>
        <h2 className="newsletter__title">This Week in The Den</h2>
        <p className="newsletter__text">
          Every Friday: curated picks, styling tips, and an exclusive denier
          insight. Plus a free Denier Guide PDF when you join.
        </p>

        {status === "success" ? (
          <p className="newsletter__success">
            Welcome to The Den! Check your email to confirm your subscription.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter__input"
              placeholder="Your email address..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
            />
            <button
              type="submit"
              className="newsletter__submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Joining..." : "Join The Den"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="newsletter__error">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
