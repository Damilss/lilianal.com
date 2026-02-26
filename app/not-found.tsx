import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">404 error</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-neutral-400">
        Sorry, we couldn&apos;t find the page you were looking for. It may have been moved, renamed, or deleted.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-neutral-900"
        >
          Contact me
        </Link>
      </div>
    </main>
  );
}