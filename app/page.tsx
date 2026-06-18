import Link from "next/link";
import { profile } from "@/lib/profile";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-2xl font-semibold text-foreground">{children}</h2>;
}

export default function HomePage() {
  const { contact } = profile;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <section id="about" className="scroll-mt-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">About</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-foreground">{profile.tagline}</p>
        <p className="mt-4 text-base leading-7 text-muted">{profile.intro}</p>
        <p className="mt-3 text-sm text-muted">{profile.education}</p>
      </section>

      <section id="expertise" className="mt-20 scroll-mt-24">
        <SectionHeading>Expertise</SectionHeading>
        <p className="mt-4 font-serif text-xl text-foreground">{profile.expertiseHeadline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.expertisePills.map((pill) => (
            <li
              key={pill}
              className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm text-accent"
            >
              {pill}
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="mt-20 scroll-mt-24">
        <SectionHeading>Experience</SectionHeading>
        <ul className="mt-5 space-y-3">
          {profile.experience.map((item) => (
            <li key={`${item.org}-${item.role}`}>
              <article className="rounded-2xl border border-stone-200/80 bg-surface px-5 py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium text-foreground">{item.role}</h3>
                  <p className="text-sm text-muted">{item.org}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{item.line}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="mt-20 scroll-mt-24">
        <SectionHeading>Projects</SectionHeading>
        <ul className="mt-5 space-y-3">
          {profile.projects.map((project) => (
            <li key={project.slug}>
              <article className="rounded-2xl border border-stone-200/80 bg-surface px-5 py-4">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-foreground">{project.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{project.line}</p>
                  </div>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-sm font-medium text-accent"
                  >
                    GitHub →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mt-20 scroll-mt-24 pb-8">
        <SectionHeading>Contact</SectionHeading>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href={contact.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            GitHub
          </Link>
          <Link href={contact.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            LinkedIn
          </Link>
          <Link href={contact.email} className="text-accent hover:underline">
            Email
          </Link>
          <Link href={contact.resume} className="text-accent hover:underline">
            Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
