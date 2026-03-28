import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  titleEm?: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  gradient?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      titleEm: data.titleEm,
      excerpt: data.excerpt || "",
      category: data.category || "Journal",
      date: data.date || "",
      readTime: data.readTime,
      gradient: data.gradient,
    } as PostMeta;
  });

  // Sort newest first
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html, { sanitize: false }).process(content);

  return {
    slug,
    title: data.title || slug,
    titleEm: data.titleEm,
    excerpt: data.excerpt || "",
    category: data.category || "Journal",
    date: data.date || "",
    readTime: data.readTime,
    gradient: data.gradient,
    contentHtml: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
