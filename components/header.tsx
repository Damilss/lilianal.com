"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-brand-soft/90 text-brand-text backdrop-blur">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/#hero" className="text-xl font-semibold tracking-tight md:text-2xl" onClick={closeMenu}>
          Liliana Ledesma
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-accent">
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="cta-primary px-5 py-2.5 text-xs tracking-[0.18em] uppercase">
            Book Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 min-w-14 items-center justify-center rounded-full border border-brand-border bg-brand-card px-3 text-brand-text md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em]">{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" className="section-shell flex flex-col gap-3 border-t border-brand-border py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl border border-brand-border bg-brand-card px-4 py-3 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={closeMenu} className="cta-primary mt-2">
            Book Consultation
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
