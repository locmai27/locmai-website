import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/Content";
import { formatDate, getAllWritingPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  const posts = getAllWritingPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <PageIntro
        eyebrow="Writing"
        title="Notes and essays"
        description="Reflections on building, learning, and the parts of life that don't fit in a README."
      />

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-stone-200/80 pb-8 last:border-b-0">
            <p className="text-sm text-muted">{formatDate(post.date)}</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
              <Link href={`/writing/${post.slug}`} className="hover:text-accent">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">{post.summary}</p>
            <Link href={`/writing/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-accent">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
