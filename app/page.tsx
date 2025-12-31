import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-neutral-800">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Buy and sell with a local expert.
            </h1>
            <p className="mt-4 text-neutral-400">
              Personalized guidance, strong negotiation, and a smooth process from first tour to closing.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Book a consultation
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-neutral-900"
              >
                View services
              </Link>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-neutral-400">
              <div>
                <div className="text-white font-medium">10+ yrs</div>
                <div>Experience</div>
              </div>
              <div>
                <div className="text-white font-medium">Top 5%</div>
                <div>Local volume</div>
              </div>
              <div>
                <div className="text-white font-medium">5★</div>
                <div>Client reviews</div>
              </div>
            </div>
          </div>

          {/* Placeholder “image” card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="h-56 w-full rounded-xl border border-neutral-800 bg-neutral-900" />
            <p className="mt-4 text-sm text-neutral-400">
              Add an agent photo or a neighborhood photo here later.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold">How I help</h2>
          <p className="mt-2 text-neutral-400">
            Clear strategy and hands-on support at every step.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Buyers", desc: "Search strategy, tours, offers, and negotiation." },
              { title: "Sellers", desc: "Pricing, staging guidance, marketing, and showings." },
              { title: "Relocation", desc: "Neighborhood guidance and local vendor network." },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                <h3 className="font-medium">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/contact" className="text-sm font-medium underline underline-offset-4">
              Contact me →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


