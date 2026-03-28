import { getAllPosts } from "@/lib/content";
import ArticleSpread from "@/components/ArticleSpread";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSection from "@/components/NewsletterSection";

const gradients = [
  "linear-gradient(160deg, #5a252c, #722f37, #8b3a43)",
  "linear-gradient(160deg, #3a2028, #4a2a32, #5a3540)",
  "linear-gradient(160deg, #2c1518, #4a2028, #3a1a1d)",
  "linear-gradient(160deg, #4a3028, #5a3830, #6b4538)",
  "linear-gradient(160deg, #352025, #4a2830, #3a1820)",
];

export default function JournalPage() {
  const posts = getAllPosts();
  const latest = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <div style={{ paddingTop: 120 }}>
        <section style={{ padding: "0 2.5rem 4rem" }}>
          <div className="editorial-header">
            <div className="editorial-label">The Journal</div>
            <h2 className="editorial-heading">
              Stories from <em>The Den</em>
            </h2>
            <div className="editorial-seam" />
          </div>

          {latest && (
            <ArticleSpread
              slug={latest.slug}
              title={latest.title}
              titleEm={latest.titleEm}
              excerpt={latest.excerpt}
              category={latest.category}
              date={latest.date}
              gradient={latest.gradient}
            />
          )}

          {rest.length > 0 && (
            <div className="articles-grid">
              {rest.map((post, i) => (
                <ArticleCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title + (post.titleEm ? ` ${post.titleEm}` : "")}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  gradient={gradients[i % gradients.length]}
                  large={i === 0 && rest.length >= 3}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      <NewsletterSection />
    </>
  );
}
