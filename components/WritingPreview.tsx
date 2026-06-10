import Link from "next/link";
import { formatDate, type WritingPost } from "@/lib/content";

type WritingPreviewProps = {
  post: WritingPost;
};

export function WritingPreview({ post }: WritingPreviewProps) {
  return (
    <article className="border-b border-stone-200/80 pb-6 last:border-b-0 last:pb-0">
      <p className="text-sm text-muted">{formatDate(post.date)}</p>
      <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
        <Link href={`/writing/${post.slug}`} className="hover:text-accent">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-base leading-7 text-muted">{post.summary}</p>
    </article>
  );
}
