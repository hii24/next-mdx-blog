import RSS from "rss";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { getAllPostMetas } from "./posts.js";

const SITE_URL = process.env.SITE_URL ?? "https://valkoserhii.dev";

export async function generateFeed(): Promise<void> {
  const feed = new RSS({
    title: "Serhii Valko · Tech Notes",
    description: "Notes on frontend, React, and AI-augmented engineering",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
    language: "en",
  });

  const posts = await getAllPostMetas();
  for (const post of posts) {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/posts/${post.slug}`,
      date: post.date,
      categories: post.tags,
    });
  }

  await writeFile(join(process.cwd(), "public", "feed.xml"), feed.xml({ indent: true }));
}
