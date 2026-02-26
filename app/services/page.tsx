export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-12">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-3 text-neutral-400">
          Mortgage originator and Realtor services in Richmond and across the Bay Area.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <article className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <h2 className="text-3xl font-semibold">Mortgage Loan Originator</h2>
          <h3 className="mt-4 text-2xl font-semibold">Richmond &amp; Bay Area Home Financing</h3>

          <p className="mt-6 text-xl leading-relaxed text-neutral-200">
            As a licensed Mortgage Loan Originator since 2019, Liliana Ledesma provides strategic home financing
            solutions for buyers, homeowners, and investors throughout Richmond and the greater Bay Area. With a
            foundation in loan processing dating back to 2006 and over two decades in real estate, she brings both
            technical lending knowledge and practical transaction experience to every client relationship.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-neutral-200">
            She specializes in residential purchases, refinances, multi-unit properties, and investor financing. By
            carefully analyzing credit profiles, income structure, and long-term goals, she helps clients secure
            competitive loan programs aligned with their financial strategy.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-neutral-200">
            Her approach is consultative and transparent — ensuring borrowers understand their options, loan
            structure, and how each decision supports wealth building and equity growth.
          </p>

          <h4 className="mt-8 text-2xl font-semibold">Services include:</h4>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-xl text-neutral-200">
            <li>Purchase &amp; refinance loans</li>
            <li>Residential &amp; income property financing</li>
            <li>Investor &amp; commercial loan guidance</li>
            <li>Strategic mortgage planning</li>
            <li>Clear communication from application to closing</li>
          </ul>
        </article>

        <div className="space-y-6">
          <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-700 bg-neutral-900/40 p-6 text-center text-sm text-neutral-400">
            Add Mortgage Loan Originator photo here
          </div>
          <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-700 bg-neutral-900/40 p-6 text-center text-sm text-neutral-400">
            Add team, client, or financing-related photo here
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <article className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <h2 className="text-3xl font-semibold">Realtor®</h2>
          <h3 className="mt-4 text-2xl font-semibold">Richmond &amp; Bay Area Real Estate Representation</h3>

          <p className="mt-6 text-xl leading-relaxed text-neutral-200">
            Licensed since 2005, Liliana Ledesma represents buyers, sellers, and investors across Richmond and the Bay
            Area with over 20 years of market expertise. Her experience spans residential sales, multi-unit
            properties, short sales, foreclosure acquisitions, and real estate investment strategy.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-neutral-200">
            For sellers, she develops data-driven pricing and marketing strategies designed to maximize exposure and
            profitability. For buyers and investors, she creates a clear acquisition plan focused on financial
            alignment, long-term value, and return potential.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-neutral-200">
            Serving both English- and Spanish-speaking communities, Liliana ensures that every client clearly
            understands contracts, negotiations, and market dynamics — empowering families and investors to make
            informed decisions with confidence.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-neutral-200">
            Her negotiation experience and investment background provide a strategic advantage in competitive Bay Area
            markets.
          </p>

          <h4 className="mt-8 text-2xl font-semibold">Services include:</h4>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-xl text-neutral-200">
            <li>Buyer representation</li>
            <li>Property marketing &amp; listing strategy</li>
            <li>Investment property analysis</li>
            <li>Short sale &amp; foreclosure expertise</li>
            <li>Skilled contract negotiation</li>
            <li>Bilingual (English/Spanish) representation</li>
          </ul>
        </article>

        <div className="space-y-6">
          <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-700 bg-neutral-900/40 p-6 text-center text-sm text-neutral-400">
            Add Realtor® photo here
          </div>
          <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-700 bg-neutral-900/40 p-6 text-center text-sm text-neutral-400">
            Add listing, closing, or community photo here
          </div>
        </div>
      </section>
    </main>
  );
}
