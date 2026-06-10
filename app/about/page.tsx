import type { Metadata } from "next";
import { PageIntro } from "@/components/Content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <PageIntro
        eyebrow="About"
        title="Engineer, teacher, builder, still figuring it out."
        description="I'm Loc Mai — a computing student at Queen's University who cares about building useful things and showing up for people along the way."
      />

      <div className="space-y-6 text-base leading-8 text-muted">
        <p>
          I grew into software through hackathons, research, and the communities that gave me room
          to learn out loud — from Queen&apos;s Google Developer Student Club to leading a team at
          QWeb. I like work that sits at the intersection of careful engineering and real human
          impact.
        </p>
        <p>
          Outside the terminal: I write to clarify what I&apos;m learning, I care about mentoring
          students as a TA, and I&apos;m slowly building this site into a fuller picture of who I am
          — not just what I&apos;ve shipped.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground">Education</h2>
          <p className="mt-3 text-muted">
            Bachelor of Computing (Honours), Queen&apos;s University · GPA 4.26/4.30
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            <li>International Admission Awards ($100,000)</li>
            <li>Dean&apos;s Honour List with Distinction (2023–2025)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground">Experience highlights</h2>
          <ul className="mt-3 space-y-4 text-muted">
            <li>
              <strong className="text-foreground">Research Assistant, RISE Lab</strong> — optimized
              GitHub Actions cache analysis across 282 repositories; findings published in the ACM
              Digital Library.
            </li>
            <li>
              <strong className="text-foreground">Teaching Assistant, Queen&apos;s</strong> — support
              for Data Structures and Computer Architecture; weekly office hours and labs for 40+
              students.
            </li>
            <li>
              <strong className="text-foreground">Technical Lead, QWeb</strong> — led a 5-person team
              building a quiz platform with Redis-backed sticky sessions.
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
