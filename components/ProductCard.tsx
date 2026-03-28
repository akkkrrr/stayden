interface Props {
  brand: string;
  name: string;
  description: string;
  price: string;
  affiliateUrl?: string;
  initial?: string;
}

export default function ProductCard({
  brand, name, description, price, affiliateUrl, initial,
}: Props) {
  return (
    <div className="product-card">
      <div className="product-card__image">{initial || brand[0]}</div>
      <div className="product-card__info">
        <div className="product-card__brand">{brand}</div>
        <div className="product-card__name">{name}</div>
        <p className="product-card__desc">{description}</p>
        <div className="product-card__bottom">
          <span className="product-card__price">{price}</span>
          <a
            href={affiliateUrl || "#"}
            className="product-card__btn"
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Shop Now
          </a>
          <span className="product-card__disclosure">affiliate link</span>
        </div>
      </div>
    </div>
  );
}
