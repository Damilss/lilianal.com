"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { calculateMortgageEstimate, type MortgageInputs } from "@/lib/mortgage";

type MortgageCalculatorProps = {
  className?: string;
  ctaHref?: string;
};

const defaults: MortgageInputs = {
  homePrice: 850000,
  downPaymentAmount: 170000,
  interestRate: 6.75,
  loanTermYears: 30,
  propertyTaxRate: 1.25,
  homeInsuranceAnnual: 2400,
  hoaMonthly: 0,
  pmiRate: 0.7,
};

type FieldErrors = Partial<Record<keyof MortgageInputs, string>>;

function clampNonNegative(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(value, 0);
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export default function MortgageCalculator({ className, ctaHref = "/#contact" }: MortgageCalculatorProps) {
  const [inputs, setInputs] = useState<MortgageInputs>(defaults);
  const [errors, setErrors] = useState<FieldErrors>({});

  const estimate = useMemo(() => calculateMortgageEstimate(inputs), [inputs]);

  function setInputValue(field: keyof MortgageInputs, value: number) {
    setInputs((prev) => {
      const nextValue = clampNonNegative(value);
      const next: MortgageInputs = { ...prev, [field]: nextValue };

      if (field === "downPaymentAmount" && next.downPaymentAmount > next.homePrice) {
        next.downPaymentAmount = next.homePrice;
      }

      if (field === "homePrice" && next.downPaymentAmount > next.homePrice) {
        next.downPaymentAmount = next.homePrice;
      }

      return next;
    });

    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleNumberChange(field: keyof MortgageInputs, rawValue: string) {
    if (rawValue.trim() === "") {
      setInputValue(field, 0);
      return;
    }

    const parsed = Number(rawValue);

    if (!Number.isFinite(parsed)) {
      setErrors((prev) => ({ ...prev, [field]: "Enter a valid number." }));
      return;
    }

    setInputValue(field, parsed);
  }

  const downPaymentPercent = inputs.homePrice > 0 ? (inputs.downPaymentAmount / inputs.homePrice) * 100 : 0;
  const showPmiHint = downPaymentPercent < 20;

  return (
    <div className={className}>
      <div className="card-shell overflow-hidden p-7 md:p-10">
        <p className="eyebrow">Mortgage Calculator</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Estimate your monthly payment with real-world Bay Area inputs.</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-muted">
          Tune the numbers to compare scenarios before you speak with a lender. Estimates include principal, interest,
          taxes, insurance, HOA, and PMI when applicable.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <fieldset className="space-y-4" aria-label="Mortgage inputs">
            <label className="block space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Home Price</span>
              <input
                type="number"
                min={0}
                step={1000}
                inputMode="decimal"
                value={inputs.homePrice}
                onChange={(event) => handleNumberChange("homePrice", event.target.value)}
                className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                aria-describedby={errors.homePrice ? "home-price-error" : undefined}
              />
              {errors.homePrice ? (
                <p id="home-price-error" className="text-sm text-red-600">
                  {errors.homePrice}
                </p>
              ) : null}
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Down Payment</span>
              <input
                type="number"
                min={0}
                step={1000}
                inputMode="decimal"
                value={inputs.downPaymentAmount}
                onChange={(event) => handleNumberChange("downPaymentAmount", event.target.value)}
                className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                aria-describedby="down-payment-helper"
              />
              <p id="down-payment-helper" className="text-sm text-brand-muted">
                Current down payment: {formatPercent(downPaymentPercent)}
              </p>
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Interest Rate (%)</span>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  inputMode="decimal"
                  value={inputs.interestRate}
                  onChange={(event) => handleNumberChange("interestRate", event.target.value)}
                  className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                />
              </label>

              <label className="block space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Loan Term (years)</span>
                <input
                  type="number"
                  min={1}
                  step={1}
                  inputMode="numeric"
                  value={inputs.loanTermYears}
                  onChange={(event) => handleNumberChange("loanTermYears", event.target.value)}
                  className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Property Tax Rate (%)</span>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  inputMode="decimal"
                  value={inputs.propertyTaxRate}
                  onChange={(event) => handleNumberChange("propertyTaxRate", event.target.value)}
                  className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                />
              </label>

              <label className="block space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Home Insurance (annual)</span>
                <input
                  type="number"
                  min={0}
                  step={100}
                  inputMode="decimal"
                  value={inputs.homeInsuranceAnnual}
                  onChange={(event) => handleNumberChange("homeInsuranceAnnual", event.target.value)}
                  className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">HOA Dues (monthly)</span>
                <input
                  type="number"
                  min={0}
                  step={10}
                  inputMode="decimal"
                  value={inputs.hoaMonthly}
                  onChange={(event) => handleNumberChange("hoaMonthly", event.target.value)}
                  className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                />
              </label>

              <label className="block space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">PMI Rate (%)</span>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  inputMode="decimal"
                  value={inputs.pmiRate}
                  onChange={(event) => handleNumberChange("pmiRate", event.target.value)}
                  className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  aria-describedby="pmi-helper"
                />
                <p id="pmi-helper" className="text-sm text-brand-muted">
                  {showPmiHint
                    ? "PMI is included because down payment is below 20%."
                    : "PMI is not included because down payment is at least 20%."}
                </p>
              </label>
            </div>
          </fieldset>

          <aside className="rounded-2xl border border-brand-border bg-brand-soft/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Monthly Estimate</p>

            <dl className="mt-4 space-y-3 text-sm text-brand-text">
              <div className="flex items-center justify-between gap-3">
                <dt>Loan amount</dt>
                <dd className="font-semibold">{formatCurrency(estimate.loanAmount)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt>Principal + interest</dt>
                <dd className="font-semibold">{formatCurrency(estimate.monthlyPrincipalInterest)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt>Property tax</dt>
                <dd className="font-semibold">{formatCurrency(estimate.monthlyPropertyTax)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt>Home insurance</dt>
                <dd className="font-semibold">{formatCurrency(estimate.monthlyHomeInsurance)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt>HOA dues</dt>
                <dd className="font-semibold">{formatCurrency(estimate.monthlyHoa)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt>PMI</dt>
                <dd className="font-semibold">{formatCurrency(estimate.monthlyPmi)}</dd>
              </div>
            </dl>

            <div className="mt-5 border-t border-brand-border pt-4">
              <p className="text-xs uppercase tracking-[0.16em] text-brand-muted">Estimated Total Payment</p>
              <p data-testid="total-monthly-payment" className="mt-2 text-4xl leading-none text-brand-text">
                {formatCurrency(estimate.totalMonthlyPayment)}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={ctaHref} className="cta-primary">
                Book Consultation
              </Link>
            </div>
          </aside>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-brand-muted">
          Estimate only. Final monthly payment depends on lender terms, taxes, insurance, qualifying profile, and other
          property-specific factors.
        </p>
      </div>
    </div>
  );
}
