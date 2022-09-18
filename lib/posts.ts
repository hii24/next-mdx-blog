import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
}

export async function getAllPostMetas(): Promise<PostMeta[]> {
  const files = await readdir(POSTS_DIR);
  const metas = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file): Promise<PostMeta> => {
        const slug = file.replace(/\.mdx$/, "");
        const raw = await readFile(join(POSTS_DIR, file), "utf8");
        const { data, content } = matter(raw);
        return {
          slug,
          title: data.title,
          date: data.date,
          tags: data.tags ?? [],
          excerpt: data.excerpt ?? content.slice(0, 160).trim() + "…",
          readingMinutes: Math.ceil(readingTime(content).minutes),
        };
      })
  );
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post> {
  const raw = await readFile(join(POSTS_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
    readingMinutes: Math.ceil(readingTime(content).minutes),
    content,
  };
}
