import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="pb-20">
      <section className="scroll-mt-28 border-b border-brand-border/70">
        <div className="section-shell py-16 md:py-24">
          <ScrollReveal>
            <p className="eyebrow">Contact</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="mt-3 max-w-4xl text-5xl leading-[0.95] md:text-7xl">Let&apos;s build your property strategy.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted md:text-xl">
              Share your goals and timeline below. This initial message helps shape a focused conversation around your
              financing and real-estate priorities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="form" className="section-spacing scroll-mt-28">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal>
            <div className="card-shell p-6 md:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside className="card-shell p-6 md:p-8">
              <p className="eyebrow">What to Expect</p>
              <h2 className="mt-3 text-4xl">After You Submit</h2>
              <ol className="mt-6 space-y-4 text-brand-muted">
                <li className="rounded-2xl border border-brand-border bg-brand-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-text">Step 1</p>
                  <p className="mt-1 leading-relaxed">Review of your goals, timeline, and financing details.</p>
                </li>
                <li className="rounded-2xl border border-brand-border bg-brand-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-text">Step 2</p>
                  <p className="mt-1 leading-relaxed">Initial strategy recommendations for next actions.</p>
                </li>
                <li className="rounded-2xl border border-brand-border bg-brand-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-text">Step 3</p>
                  <p className="mt-1 leading-relaxed">A follow-up conversation to align on execution.</p>
                </li>
              </ol>

              <p className="mt-8 text-sm uppercase tracking-[0.14em] text-brand-muted">
                Frontend submission flow active now. Email/API integration can be added in the next phase.
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
