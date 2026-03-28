import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-name">
            STAY<span>DEN</span>
          </div>
          <div className="footer__brand-tagline">Every Denier Tells a Story</div>
          <p className="footer__brand-text">
            An elegant exploration of nylon aesthetics, hosiery culture, and the
            sensual art of the everyday. A KoivuLabs brand.
          </p>
        </div>
        <div>
          <div className="footer__col-title">Journal</div>
          <ul className="footer__links">
            <li><Link href="/journal">All Posts</Link></li>
            <li><Link href="/journal?cat=reviews">Reviews</Link></li>
            <li><Link href="/journal?cat=guides">Guides</Link></li>
            <li><Link href="/journal?cat=styling">Styling</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer__col-title">Shop</div>
          <ul className="footer__links">
            <li><Link href="/shop">PDF Guides</Link></li>
            <li><Link href="/shop">Denier Guide</Link></li>
            <li><Link href="/shop">Care Bible</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer__col-title">Connect</div>
          <ul className="footer__links">
            <li><a href="https://reddit.com/r/StayDen" target="_blank" rel="noopener">Reddit</a></li>
            <li><a href="https://pinterest.com/stayden" target="_blank" rel="noopener">Pinterest</a></li>
            <li><a href="https://x.com/stayden" target="_blank" rel="noopener">X / Twitter</a></li>
            <li><Link href="/about">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copy">&copy; 2026 StayDen &middot; KoivuLabs</div>
        <div className="footer__legal">
          <Link href="/disclosure">Disclosure</Link>
          <Link href="/disclosure">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
