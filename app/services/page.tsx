export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-neutral-800">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Mortgage Loan Originator</h1>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Richmond & Bay Area Home Financing</h2>

            <p className="mt-8 text-2xl leading-relaxed text-neutral-200">
              As a licensed Mortgage Loan Originator since 2019, Liliana Ledesma provides strategic home financing solutions for
              buyers, homeowners, and investors throughout Richmond and the greater Bay Area. With a foundation in loan
              processing dating back to 2006 and over two decades in real estate, she brings both technical lending knowledge and
              practical transaction experience to every client relationship.
            </p>
            <p className="mt-8 text-2xl leading-relaxed text-neutral-200">
              She specializes in residential purchases, refinances, multi-unit properties, and investor financing. By carefully
              analyzing credit profiles, income structure, and long-term goals, she helps clients secure competitive loan programs
              aligned with their financial strategy.
            </p>
            <p className="mt-8 text-2xl leading-relaxed text-neutral-200">
              Her approach is consultative and transparent — ensuring borrowers understand their options, loan structure, and how
              each decision supports wealth building and equity growth.
            </p>

            <h3 className="mt-10 text-4xl font-semibold">Services include:</h3>
            <ul className="mt-6 list-disc space-y-4 pl-8 text-2xl text-neutral-200">
              <li>Purchase & refinance loans</li>
              <li>Residential & income property financing</li>
              <li>Investor & commercial loan guidance</li>
              <li>Strategic mortgage planning</li>
              <li>Clear communication from application to closing</li>
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-dashed border-neutral-700 bg-neutral-900/40 p-4">
              <div className="h-64 rounded-xl border border-neutral-700 bg-neutral-900" />
              <p className="mt-3 text-sm text-neutral-400">Photo placeholder 1</p>
            </div>
            <div className="rounded-2xl border border-dashed border-neutral-700 bg-neutral-900/40 p-4">
              <div className="h-64 rounded-xl border border-neutral-700 bg-neutral-900" />
              <p className="mt-3 text-sm text-neutral-400">Photo placeholder 2</p>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-4xl font-semibold tracking-tight">Realtor®</h2>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">Richmond & Bay Area Real Estate Representation</h3>

          <p className="mt-8 text-2xl leading-relaxed text-neutral-200">
            Licensed since 2005, Liliana Ledesma represents buyers, sellers, and investors across Richmond and the Bay Area with
            over 20 years of market expertise Her experience spans residential sales, multi-unit properties, short sales,
            foreclosure acquisitions, and real estate investment strategy.
          </p>
          <p className="mt-8 text-2xl leading-relaxed text-neutral-200">
            For sellers, she develops data-driven pricing and marketing strategies designed to maximize exposure and profitability.
            For buyers and investors, she creates a clear acquisition plan focused on financial alignment, long-term value, and
            return potential.
          </p>
          <p className="mt-8 text-2xl leading-relaxed text-neutral-200">
            Serving both English- and Spanish-speaking communities, Liliana ensures that every client clearly understands
            contracts, negotiations, and market dynamics — empowering families and investors to make informed decisions with
            confidence.
          </p>
          <p className="mt-8 text-2xl leading-relaxed text-neutral-200">
            Her negotiation experience and investment background provide a strategic advantage in competitive Bay Area markets.
          </p>

          <h3 className="mt-10 text-4xl font-semibold">Services include:</h3>
          <ul className="mt-6 list-disc space-y-4 pl-8 text-2xl text-neutral-200">
            <li>Buyer representation</li>
            <li>Property marketing & listing strategy</li>
            <li>Investment property analysis</li>
            <li>Short sale & foreclosure expertise</li>
            <li>Skilled contract negotiation</li>
            <li>Bilingual (English/Spanish) representation</li>
          </ul>
        </div>
      </section>
    </main>
  );
}