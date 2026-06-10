import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectLinks = {
  github?: string | null;
  demo?: string | null;
  paper?: string | null;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  featured: boolean;
  links: ProjectLinks;
  content: string;
};

export type WritingPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
};

const contentDir = path.join(process.cwd(), "content");

function readMarkdownFiles<T>(
  subdir: string,
  mapItem: (slug: string, data: Record<string, unknown>, content: string) => T,
): T[] {
  const dir = path.join(contentDir, subdir);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return mapItem(slug, data as Record<string, unknown>, content);
    });
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function toLinks(value: unknown): ProjectLinks {
  if (!value || typeof value !== "object") {
    return {};
  }

  const links = value as Record<string, unknown>;
  return {
    github: typeof links.github === "string" ? links.github : null,
    demo: typeof links.demo === "string" ? links.demo : null,
    paper: typeof links.paper === "string" ? links.paper : null,
  };
}

export function getAllProjects(): Project[] {
  return readMarkdownFiles("projects", (slug, data, content) => ({
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    tags: toStringArray(data.tags),
    featured: Boolean(data.featured),
    links: toLinks(data.links),
    content,
  })).sort((a, b) => b.date.localeCompare(a.date));
}

export function getProjectBySlug(slug: string): Project | null {
  return getAllProjects().find((project) => project.slug === slug) ?? null;
}

export function getFeaturedProjects(limit = 3): Project[] {
  const featured = getAllProjects().filter((project) => project.featured);
  return (featured.length > 0 ? featured : getAllProjects()).slice(0, limit);
}

export function getAllWritingPosts(): WritingPost[] {
  return readMarkdownFiles("writing", (slug, data, content) => ({
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    tags: toStringArray(data.tags),
    content,
  })).sort((a, b) => b.date.localeCompare(a.date));
}

export function getWritingPostBySlug(slug: string): WritingPost | null {
  return getAllWritingPosts().find((post) => post.slug === slug) ?? null;
}

export function getRecentWritingPosts(limit = 2): WritingPost[] {
  return getAllWritingPosts().slice(0, limit);
}

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
