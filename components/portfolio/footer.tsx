"use client"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs font-light text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-light text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
