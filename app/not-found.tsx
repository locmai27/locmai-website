import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist yet.</p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium text-accent">
        ← Back home
      </Link>
    </section>
  );
}
