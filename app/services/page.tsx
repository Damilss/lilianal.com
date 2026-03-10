import Link from "next/link";
import RotatingTextBadge from "@/components/RotatingTextBadge";
import ScrollReveal from "@/components/ScrollReveal";

const mortgageServices = [
  "Purchase and refinance loans",
  "Residential and income-property financing",
  "Investor and commercial loan guidance",
  "Strategic mortgage planning",
  "Clear communication from application to closing",
];

const realtorServices = [
  "Buyer representation",
  "Property marketing and listing strategy",
  "Investment property analysis",
  "Short sale and foreclosure expertise",
  "Skilled contract negotiation",
  "Bilingual (English/Spanish) representation",
];

export default function ServicesPage() {
  return (
    <main className="pb-20">
      <section className="scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell py-16 md:py-24">
          <ScrollReveal>
            <p className="eyebrow">Services</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="mt-3 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
              Strategic support for financing, buying, selling, and investing.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted md:text-xl">
              Liliana combines mortgage structuring knowledge with market-facing transaction experience, so every step is
              aligned with both immediate goals and long-term financial outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-spacing border-b border-brand-border/70">
        <div className="section-shell grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <article className="card-shell p-7 md:p-9">
              <p className="eyebrow">Mortgage Loan Originator</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Richmond & Bay Area Home Financing</h2>
              <div className="mt-6 space-y-5 text-brand-muted">
                <p className="leading-relaxed">
                  As a licensed Mortgage Loan Originator since 2019, Liliana provides strategic home financing solutions
                  for buyers, homeowners, and investors throughout Richmond and the Bay Area.
                </p>
                <p className="leading-relaxed">
                  With a foundation in loan processing dating back to 2006 and over two decades in real estate, she
                  brings both technical lending knowledge and practical transaction experience to every client
                  relationship.
                </p>
                <p className="leading-relaxed">
                  Her approach is consultative and transparent, ensuring borrowers understand available options, loan
                  structure, and how each decision supports wealth building and equity growth.
                </p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside className="card-shell p-7 md:p-8">
              <h3 className="text-3xl">Services include</h3>
              <ul className="mt-5 space-y-3">
                {mortgageServices.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    <span className="leading-relaxed text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-spacing border-b border-brand-border/70">
        <div className="section-shell grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <article className="card-shell p-7 md:p-9">
              <p className="eyebrow">Realtor</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Richmond & Bay Area Real Estate Representation</h2>
              <div className="mt-6 space-y-5 text-brand-muted">
                <p className="leading-relaxed">
                  Licensed since 2005, Liliana represents buyers, sellers, and investors across Richmond and the Bay
                  Area with broad market expertise in residential sales, multi-unit properties, short sales, foreclosure
                  acquisitions, and investment strategy.
                </p>
                <p className="leading-relaxed">
                  For sellers, she develops data-driven pricing and marketing strategies designed to maximize exposure and
                  profitability. For buyers and investors, she creates acquisition plans focused on financial alignment,
                  long-term value, and return potential.
                </p>
                <p className="leading-relaxed">
                  Her negotiation experience and bilingual service model help clients navigate contracts, market dynamics,
                  and closing decisions with confidence.
                </p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside className="card-shell p-7 md:p-8">
              <h3 className="text-3xl">Services include</h3>
              <ul className="mt-5 space-y-3">
                {realtorServices.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    <span className="leading-relaxed text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-shell">
          <ScrollReveal>
            <div className="relative isolate pt-[4.5rem] md:pt-[5.5rem]">
              <RotatingTextBadge className="absolute top-0 right-3 z-10 md:right-6" size={128} />

              <div className="card-shell p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
                <div>
                  <p className="eyebrow">Ready to Start</p>
                  <h2 className="mt-2 text-4xl md:text-5xl">Book a consultation to define your next move.</h2>
                  <p className="mt-3 max-w-2xl text-brand-muted">
                    Share your timeline, priorities, and financing goals. You will get a focused strategy tailored to your
                    current stage.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
                  <Link href="/contact" className="cta-primary">
                    Contact Now
                  </Link>
                  <Link href="/#services" className="cta-secondary">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
