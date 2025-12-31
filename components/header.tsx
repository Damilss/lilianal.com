import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-neutral-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-6">
        <Link href="/" className="text-lg font-semibold">
          Agent Name
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:opacity-80">Home</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
          <Link href="/services" className="hover:opacity-80">Services</Link>
          <Link href="/contact" className="hover:opacity-80">Contact</Link>
        </nav>
      </div>
    </header>
  );
}