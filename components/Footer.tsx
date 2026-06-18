import Link from "next/link";

const links = [
  { href: "https://github.com/locmai27", label: "GitHub" },
  { href: "https://www.linkedin.com/in/locmai27", label: "LinkedIn" },
  { href: "mailto:mai.vuthanhloc@queensu.ca", label: "Email" },
  { href: "/resume.pdf", label: "Resume" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Loc Mai</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-accent"
              {...(link.href.startsWith("http") || link.href.startsWith("mailto")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
