import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/now", label: "Now" },
];

export function Header() {
  return (
    <header className="border-b border-stone-200/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-foreground">
          Loc Mai
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
