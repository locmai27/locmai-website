import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-stone-200/80 bg-surface p-6 transition-colors hover:border-accent/30">
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-stone-100 px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-serif text-2xl font-semibold text-foreground">
        <Link href={`/projects/${project.slug}`} className="hover:text-accent">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 text-base leading-7 text-muted">{project.summary}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-4 inline-block text-sm font-medium text-accent"
      >
        Read case study →
      </Link>
    </article>
  );
}
