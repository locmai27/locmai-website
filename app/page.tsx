import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { WritingPreview } from "@/components/WritingPreview";
import { getFeaturedProjects, getRecentWritingPosts } from "@/lib/content";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(3);
  const recentPosts = getRecentWritingPosts(2);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Whole person, not just a resume
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Hi, I&apos;m Loc.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          I&apos;m a computing student at Queen&apos;s who builds thoughtful software, writes about
          what I&apos;m learning, and shows up for the communities around me. This site is my home
          base — projects, writing, and the parts of life that don&apos;t fit on a PDF.
        </p>
      </section>

      <section className="mt-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">Featured projects</h2>
              <p className="mt-2 text-muted">Work I&apos;m proud of — from hackathons to research.</p>
            </div>
            <Link href="/projects" className="text-sm font-medium text-accent">
              View all
            </Link>
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">Recent writing</h2>
            <p className="mt-2 text-muted">Notes, reflections, and things worth sharing.</p>
          </div>
          <div className="rounded-2xl border border-stone-200/80 bg-surface p-6">
            {recentPosts.length > 0 ? (
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <WritingPreview key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-muted">Writing is on the way.</p>
            )}
            <Link href="/writing" className="mt-6 inline-block text-sm font-medium text-accent">
              All writing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
