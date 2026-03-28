// Generates sitemap.xml from static pages + markdown posts
// Run: node scripts/generate-sitemap.mjs

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://stayden.vercel.app";

// Static pages
const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/journal", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/shop", priority: "0.7", changefreq: "monthly" },
  { path: "/newsletter", priority: "0.5", changefreq: "monthly" },
  { path: "/disclosure", priority: "0.3", changefreq: "yearly" },
];

// Get all markdown posts
const postsDir = path.join(ROOT, "content/posts");
const postSlugs = fs.existsSync(postsDir)
  ? fs
      .readdirSync(postsDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""))
  : [];

const today = new Date().toISOString().split("T")[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const page of staticPages) {
  xml += `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

for (const slug of postSlugs) {
  xml += `  <url>
    <loc>${SITE_URL}/journal/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

xml += `</urlset>`;

const outPath = path.join(ROOT, "public/sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`Sitemap generated: ${postSlugs.length} posts + ${staticPages.length} pages → ${outPath}`);
