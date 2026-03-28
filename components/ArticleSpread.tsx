import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  titleEm?: string;
  excerpt: string;
  category: string;
  date: string;
  gradient?: string;
  reversed?: boolean;
}

export default function ArticleSpread({
  slug, title, titleEm, excerpt, category, date, gradient, reversed,
}: Props) {
  const bg = gradient || "linear-gradient(160deg, #5a252c, #722f37, #8b3a43)";

  return (
    <div className={`spread ${reversed ? "spread--reversed" : ""}`}>
      <div className="spread__image">
        <div className="spread__image-inner" style={{ background: bg }} />
        <div className="spread__category">{category}</div>
      </div>
      <div className="spread__content">
        <div className="spread__date">{date}</div>
        <h3 className="spread__title">
          {title} {titleEm && <em>{titleEm}</em>}
        </h3>
        <p className="spread__excerpt">{excerpt}</p>
        <Link href={`/journal/${slug}`} className="spread__link">
          Read More
        </Link>
      </div>
    </div>
  );
}
