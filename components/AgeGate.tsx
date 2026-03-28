"use client";
import { useState, useEffect } from "react";

export default function AgeGate() {
  const [visible, setVisible] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const passed = document.cookie.includes("stayden_age=verified");
    if (passed) setVisible(false);
  }, []);

  function enter() {
    const consent = document.cookie.includes("stayden_cookie_consent=accepted");
    if (consent) {
      document.cookie = "stayden_age=verified;max-age=2592000;path=/;SameSite=Lax";
    } else {
      // Session-only cookie if no consent yet
      document.cookie = "stayden_age=verified;path=/;SameSite=Lax";
    }
    setAnimating(true);
    setTimeout(() => setVisible(false), 800);
  }

  if (!visible) return null;

  return (
    <div className={`age-gate ${animating ? "age-gate--exit" : ""}`}>
      <div className="age-gate__inner">
        <div className="age-gate__logo">
          STAY<span>DEN</span>
        </div>
        <div className="age-gate__seam" />
        <div className="age-gate__tagline">Every Denier Tells a Story</div>
        <p className="age-gate__text">
          StayDen contains tasteful adult content exploring the art of nylon,
          hosiery, and sensual aesthetics. By entering, you confirm you are 18
          or older.
        </p>
        <button className="age-gate__btn" onClick={enter}>
          ENTER THE DEN
        </button>
      </div>
    </div>
  );
}
