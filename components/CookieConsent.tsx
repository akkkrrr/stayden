"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((c) => c.startsWith("stayden_cookie_consent="));
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    document.cookie =
      "stayden_cookie_consent=accepted; path=/; max-age=" + 60 * 60 * 24 * 365;
    setVisible(false);
  }

  function decline() {
    document.cookie =
      "stayden_cookie_consent=declined; path=/; max-age=" + 60 * 60 * 24 * 365;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__inner">
        <p className="cookie-consent__text">
          We use essential cookies for site functionality and the age gate.
          No tracking, no ads, no third-party cookies.
        </p>
        <div className="cookie-consent__actions">
          <button className="cookie-consent__accept" onClick={accept}>
            Accept
          </button>
          <button className="cookie-consent__decline" onClick={decline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
