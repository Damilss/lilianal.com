import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const audiences = [
  {
    title: "Home Buyers",
    description:
      "Clear lending guidance, offer strategy, and fast coordination so you can move with confidence in competitive markets.",
  },
  {
    title: "Home Sellers",
    description:
      "Pricing, listing strategy, and negotiation planning built to protect value and shorten time to close.",
  },
  {
    title: "Investors",
    description:
      "Acquisition support for residential and income properties with a financing structure aligned to long-term returns.",
  },
  {
    title: "Relocating Families",
    description:
      "Neighborhood insight and local vendor support that make Bay Area transitions smooth and informed.",
  },
];

const serviceTracks = [
  {
    title: "Mortgage Loan Origination",
    description:
      "Licensed since 2019 with loan-processing experience dating back to 2006, offering purchase, refinance, and investor-focused loan guidance.",
    bullets: [
      "Purchase and refinance planning",
      "Residential and income-property financing",
      "Investor and commercial guidance",
      "Transparent communication from application to closing",
    ],
  },
  {
    title: "Realtor Representation",
    description:
      "Licensed since 2005 with Bay Area expertise across traditional sales, multi-unit properties, short sales, and investment strategy.",
    bullets: [
      "Buyer representation and acquisition strategy",
      "Listing positioning and marketing execution",
      "Contract negotiation and offer leverage",
      "Bilingual English and Spanish client support",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consult",
    detail: "Define goals, timing, and financial boundaries with a practical plan before action.",
  },
  {
    step: "02",
    title: "Strategize",
    detail: "Build the right loan and transaction strategy for your property type and market conditions.",
  },
  {
    step: "03",
    title: "Execute",
    detail: "Coordinate offers, paperwork, and communication across lenders, agents, and third parties.",
  },
  {
    step: "04",
    title: "Close & Grow",
    detail: "Finalize with clarity and map next moves that support equity growth and long-term wealth.",
  },
];

const testimonialPlaceholders = [
  {
    quote:
      "Replace this with a client story about how the financing strategy removed uncertainty and accelerated closing.",
    name: "Placeholder Review",
  },
  {
    quote:
      "Replace this with a seller experience focused on pricing clarity, marketing execution, and smooth negotiations.",
    name: "Placeholder Review",
  },
  {
    quote: "Replace this with an investor testimonial highlighting long-term planning and acquisition support.",
    name: "Placeholder Review",
  },
];

const revealDelays = [0.08, 0.16, 0.24] as const;

export default function Home() {
  return (
    <main className="pb-20">
      <section id="hero" className="scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell grid gap-14 py-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-24">
          <div className="space-y-8">
            <ScrollReveal>
              <p className="eyebrow">Richmond & Bay Area Mortgage + Real Estate</p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h1 className="text-5xl leading-[0.95] md:text-7xl">Strategic guidance for loans, listings, and long-term wealth.</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="max-w-xl text-lg leading-relaxed text-brand-muted md:text-xl">
                Liliana Ledesma brings two decades of real estate expertise and lending insight to help buyers, sellers,
                and investors make high-stakes decisions with clarity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contact" className="cta-primary">
                  Book Consultation
                </Link>
                <Link href="/#services" className="cta-secondary">
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <div className="grid max-w-lg grid-cols-3 gap-3 pt-2">
                {[
                  { stat: "20+ yrs", label: "Real Estate Experience" },
                  { stat: "2006", label: "Loan Processing Foundation" },
                  { stat: "Bilingual", label: "English + Spanish" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-brand-border bg-brand-card px-4 py-4 text-center">
                    <p className="text-lg font-semibold">{item.stat}</p>
                    <p className="text-xs uppercase tracking-[0.13em] text-brand-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18}>
            <div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/DSC_0396.JPG"
                  alt="Liliana Ledesma at a home exterior in the Bay Area."
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-brand-muted">Add additional branded photos across sections as they become available.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="section-spacing scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="eyebrow">About</p>
              <h2 className="text-4xl md:text-5xl">Professional guidance rooted in both financing and field experience.</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-brand-muted">
              <p>
                As a licensed Mortgage Loan Originator since 2019 and Realtor since 2005, Liliana advises clients with a
                full-picture strategy that connects lending decisions to real market outcomes.
              </p>
              <p>
                Her foundation in loan processing began in 2006, giving her technical command over underwriting realities,
                income structure, and program fit. That depth helps clients move decisively while avoiding preventable risk.
              </p>
              <p>
                The approach is consultative and transparent: explain every option clearly, align with long-term financial
                goals, and execute with consistency from first conversation to closing table.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="who-we-serve" className="section-spacing scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell">
          <ScrollReveal>
            <p className="eyebrow">Who We Serve</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mt-3 text-4xl md:text-5xl">Support tailored to your goals, timeline, and complexity.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {audiences.map((audience, index) => (
              <ScrollReveal key={audience.title} delay={revealDelays[index % revealDelays.length]}>
                <article className="card-shell p-7">
                  <h3 className="text-3xl">{audience.title}</h3>
                  <p className="mt-3 leading-relaxed text-brand-muted">{audience.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-spacing scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell">
          <ScrollReveal>
            <p className="eyebrow">Services</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mt-3 text-4xl md:text-5xl">Integrated mortgage and real estate strategy in one relationship.</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceTracks.map((service, index) => (
              <ScrollReveal key={service.title} delay={revealDelays[index % revealDelays.length]}>
                <article className="card-shell p-7">
                  <h3 className="text-3xl">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-brand-muted">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                        <span className="text-base text-brand-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.16}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/services" className="cta-secondary">
                View Full Services Page
              </Link>
              <Link href="/#contact" className="cta-primary">
                Schedule a Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="process" className="section-spacing scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell">
          <ScrollReveal>
            <p className="eyebrow">Process</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mt-3 text-4xl md:text-5xl">A clear path from planning to closing.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={revealDelays[index % revealDelays.length]}>
                <article className="card-shell p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">{step.step}</p>
                  <h3 className="mt-4 text-3xl">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-brand-muted">{step.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-spacing scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell">
          <ScrollReveal>
            <p className="eyebrow">Testimonials</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mt-3 text-4xl md:text-5xl">Client stories section ready for final reviews.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonialPlaceholders.map((testimonial, index) => (
              <ScrollReveal key={testimonial.quote} delay={revealDelays[index % revealDelays.length]}>
                <article className="card-shell p-7">
                  <p className="leading-relaxed text-brand-muted">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-text">
                    {testimonial.name}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing scroll-mt-28">
        <div id="contact-cta" className="section-shell">
          <ScrollReveal>
            <div className="card-shell overflow-hidden p-8 md:p-12">
              <p className="eyebrow">Next Step</p>
              <h2 className="mt-3 max-w-3xl text-4xl md:text-6xl">Book your consultation and get a strategy tailored to your goals.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">
                Use the contact page to share your timeline, property goals, and financing questions. You will receive a
                clear response with practical next actions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="cta-primary">
                  Go to Contact Form
                </Link>
                <Link href="/services" className="cta-secondary">
                  Review Service Details
                </Link>
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.16em] text-brand-muted">
                Frontend contact flow active now - backend delivery integration planned next phase
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
