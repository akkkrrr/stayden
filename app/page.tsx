import { getAllPosts } from "@/lib/content";
import HeroEditorial from "@/components/HeroEditorial";
import ArticleSpread from "@/components/ArticleSpread";
import ArticleCard from "@/components/ArticleCard";
import DenierShowcase from "@/components/DenierShowcase";
import NewsletterSection from "@/components/NewsletterSection";

const cardGradients = [
  "linear-gradient(160deg, #5a252c, #722f37, #8b3a43)",
  "linear-gradient(160deg, #3a2028, #4a2a32, #5a3540)",
  "linear-gradient(160deg, #2c1518, #4a2028, #3a1a1d)",
  "linear-gradient(160deg, #4a3028, #5a3830, #6b4538)",
  "linear-gradient(160deg, #352025, #4a2830, #3a1820)",
];

export default function Home() {
  const posts = getAllPosts();
  const featured = posts[0];
  const second = posts[1];
  const rest = posts.slice(2);

  return (
    <>
      <HeroEditorial />

      {/* Featured editorial spreads */}
      <section style={{ padding: "6rem 2.5rem", position: "relative" }}>
        <div className="editorial-header">
          <div className="editorial-label">From the Journal</div>
          <h2 className="editorial-heading">
            Latest from <em>The Den</em>
          </h2>
          <div className="editorial-seam" />
        </div>

        {featured && (
          <ArticleSpread
            slug={featured.slug}
            title={featured.title}
            titleEm={featured.titleEm}
            excerpt={featured.excerpt}
            category={featured.category}
            date={featured.date}
            gradient={featured.gradient}
          />
        )}

        {second && (
          <ArticleSpread
            slug={second.slug}
            title={second.title}
            titleEm={second.titleEm}
            excerpt={second.excerpt}
            category={second.category}
            date={second.date}
            gradient={second.gradient}
            reversed
          />
        )}
      </section>

      {/* Articles grid */}
      {rest.length > 0 && (
        <section style={{ padding: "0 0 6rem" }}>
          <div className="editorial-header">
            <div className="editorial-label">More Stories</div>
            <h2 className="editorial-heading">
              Recent in <em>The Den</em>
            </h2>
            <div className="editorial-seam" />
          </div>
          <div className="articles-grid">
            {rest.map((post, i) => (
              <ArticleCard
                key={post.slug}
                slug={post.slug}
                title={post.title + (post.titleEm ? ` ${post.titleEm}` : "")}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
                gradient={cardGradients[i % cardGradients.length]}
                large={i === 0}
              />
            ))}
          </div>
        </section>
      )}

      <DenierShowcase />
      <NewsletterSection />
    </>
  );
}
