import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[72vh] max-w-3xl flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404 Error</p>
      <h1 className="mt-4 text-5xl md:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-brand-muted">
        Sorry, we couldn&apos;t find the page you were looking for. It may have been moved, renamed, or deleted.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/#hero" className="cta-primary">
          Go Home
        </Link>
        <Link href="/contact" className="cta-secondary">
          Contact
        </Link>
      </div>
    </main>
  );
}
