import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent, PageIntro } from "@/components/Content";
import { formatDate, getAllProjects, getProjectBySlug } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const externalLinks = [
    { label: "GitHub", href: project.links.github },
    { label: "Demo", href: project.links.demo },
    { label: "Paper", href: project.links.paper },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <PageIntro
        eyebrow={formatDate(project.date)}
        title={project.title}
        description={project.summary}
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-stone-100 px-2.5 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>

      {externalLinks.length > 0 ? (
        <div className="mb-10 flex flex-wrap gap-4 text-sm">
          {externalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      ) : null}

      <MarkdownContent content={project.content} />

      <Link href="/projects" className="mt-12 inline-block text-sm font-medium text-accent">
        ← All projects
      </Link>
    </article>
  );
}
