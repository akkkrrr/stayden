"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Only homepage and individual articles have full-bleed dark hero backgrounds
  const hasDarkHero =
    pathname === "/" ||
    (pathname.startsWith("/journal/") && pathname !== "/journal");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    onScroll(); // check immediately
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navScrolled = scrolled || !hasDarkHero;

  return (
    <nav className={`nav ${navScrolled ? "nav--scrolled" : ""}`}>
      <Link href="/" className="nav__logo">
        STAY<span>DEN</span>
      </Link>

      <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/journal">Journal</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/about">About</Link></li>
        <li>
          <Link href="/newsletter" className="nav__cta">
            Free Guide
          </Link>
        </li>
      </ul>

      <button
        className="nav__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
