import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-stone max-w-none prose-headings:font-serif prose-a:text-accent">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="mb-12 max-w-3xl">
      {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {description ? <p className="mt-5 text-lg leading-8 text-muted">{description}</p> : null}
    </header>
  );
}

type StubPageProps = {
  title: string;
  description: string;
};

export function StubPage({ title, description }: StubPageProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <PageIntro title={title} description={description} />
      <p className="rounded-2xl border border-dashed border-stone-300 bg-surface px-5 py-4 text-muted">
        More coming soon.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium text-accent">
        ← Back home
      </Link>
    </section>
  );
}
