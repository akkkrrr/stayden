import { getPost, getAllSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import NewsletterSection from "@/components/NewsletterSection";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <div style={{ paddingTop: 80 }}>
        <div className="article-hero">
          <div className="article-hero__content">
            <div className="article-hero__cat">
              {post.category} {post.readTime && `· ${post.readTime}`}
            </div>
            <h1 className="article-hero__title">
              {post.title} {post.titleEm && <em>{post.titleEm}</em>}
            </h1>
            <div className="article-hero__meta">
              {post.date} · by StayDen
            </div>
          </div>
        </div>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="article-cta">
          <Link href="/journal" className="btn-primary">
            Back to Journal
          </Link>
        </div>
      </div>
      <NewsletterSection />
    </>
  );
}
