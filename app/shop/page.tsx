import type { Metadata } from "next";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Shop — StayDen",
  description: "Curated PDF guides: denier guides, stay-up fit charts, and hosiery wardrobe building. Instant download.",
};

const products = [
  {
    title: "The Ultimate Denier Guide",
    description:
      "50+ product picks, fit charts, and occasion pairing for every denier from 5D to 100D. The only guide you will ever need.",
    price: "€9.90",
    link: "#",
  },
  {
    title: "Stay-Up Survival Kit",
    description:
      "Fit guides for every body type, silicone band care tips, and our secret tricks to make any stay-up actually stay up.",
    price: "€14.90",
    link: "#",
  },
  {
    title: "The StayDen Starter Bundle",
    description:
      "Both guides at a reduced price. Everything you need to build a hosiery wardrobe with confidence.",
    price: "€19.90",
    link: "#",
  },
];

export default function ShopPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-header__title">
          The <em>Shop</em>
        </h1>
        <p className="page-header__sub">
          Curated guides for the discerning wearer
        </p>
      </div>

      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.title} className="shop-card">
            <div
              style={{
                height: 160,
                background:
                  "linear-gradient(160deg, var(--cream-warm), var(--blush-light))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "var(--wine)",
                opacity: 0.4,
                marginBottom: "var(--space-lg)",
              }}
            >
              PDF
            </div>
            <h3 className="shop-card__title">{product.title}</h3>
            <p className="shop-card__desc">{product.description}</p>
            <div className="shop-card__price">{product.price}</div>
            <a
              href={product.link}
              className="btn-primary"
              style={{ marginTop: "var(--space-md)", display: "inline-block" }}
            >
              Get the Guide
            </a>
          </div>
        ))}
      </div>

      <div
        className="page-body"
        style={{ textAlign: "center", paddingTop: 0 }}
      >
        <p style={{ fontStyle: "italic", fontSize: "0.85rem" }}>
          All guides are delivered as downloadable PDFs. Instant access after
          purchase. No subscriptions, no recurring charges.
        </p>
      </div>

      <NewsletterSection />
    </>
  );
}
