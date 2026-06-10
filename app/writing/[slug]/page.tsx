import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent, PageIntro } from "@/components/Content";
import { formatDate, getAllWritingPosts, getWritingPostBySlug } from "@/lib/content";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWritingPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPostBySlug(slug);
  if (!post) return { title: "Writing" };
  return { title: post.title, description: post.summary };
}

export default async function WritingPostPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const post = getWritingPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <PageIntro eyebrow={formatDate(post.date)} title={post.title} description={post.summary} />
      <MarkdownContent content={post.content} />
      <Link href="/writing" className="mt-12 inline-block text-sm font-medium text-accent">
        ← All writing
      </Link>
    </article>
  );
}
