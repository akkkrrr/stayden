import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime?: string;
  gradient?: string;
  large?: boolean;
}

export default function ArticleCard({
  slug, title, category, date, readTime, gradient, large,
}: Props) {
  const bg = gradient || "linear-gradient(160deg, #5a252c, #722f37, #8b3a43)";

  return (
    <Link
      href={`/journal/${slug}`}
      className={`article-card ${large ? "article-card--large" : ""}`}
    >
      <div className="article-card__bg" style={{ background: bg }} />
      <div className="article-card__overlay">
        <div className="article-card__tag">{category}</div>
        <h3 className="article-card__title">{title}</h3>
        <div className="article-card__meta">
          {date}
          {readTime && ` · ${readTime}`}
        </div>
      </div>
    </Link>
  );
}
