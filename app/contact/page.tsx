import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-400/60 via-neutral-500/20 to-black/90" />
{/* Photo placeholder: replace this block with your own image when ready */}
        <div className="relative mx-auto flex h-[420px] w-full max-w-7xl items-center justify-center px-6">
          <div className="absolute inset-0 m-6 rounded-md border border-white/30 bg-neutral-700/20 backdrop-blur-[1px]" />

          <div className="relative text-center">
            <p className="text-xs tracking-[0.45em] text-white/90 md:text-sm">LILIANA LEDESMA</p>
            <h1 className="mt-24 text-4xl font-light tracking-tight text-white md:text-7xl">
              Loans &amp; Listings - Mortgage &amp; RE
            </h1>
            <p className="mt-4 text-sm text-white/80">Add your hero photo in this section.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-light text-neutral-300 md:text-6xl">Contact Us</h2>
          <div className="mx-auto mt-8 h-px w-24 bg-neutral-600" />
          <p className="mt-10 text-4xl font-light text-neutral-200">Drop us a line!</p>
        </div>

        <ContactForm />

        <p className="mt-24 text-center text-3xl text-neutral-400">
          Copyright © 2025 Liliana Ledesma - All Rights Reserved.
        </p>
      </section>
    </main>
  );
}
