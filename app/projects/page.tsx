import type { Metadata } from "next";
import { PageIntro } from "@/components/Content";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <PageIntro
        eyebrow="Projects"
        title="Things I've built"
        description="Case studies from hackathons, coursework, research, and side projects."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
