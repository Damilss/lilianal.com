import { describe, expect, it } from "vitest";
import { calculateMonthlyPrincipalInterest, calculateMortgageEstimate } from "@/lib/mortgage";

describe("calculateMonthlyPrincipalInterest", () => {
  it("returns expected payment for a common 30-year loan", () => {
    const monthly = calculateMonthlyPrincipalInterest(400000, 6.5, 30);

    expect(monthly).toBeCloseTo(2528.27, 2);
  });

  it("handles zero interest as simple principal split", () => {
    const monthly = calculateMonthlyPrincipalInterest(360000, 0, 30);

    expect(monthly).toBe(1000);
  });

  it("returns zero for zero principal", () => {
    const monthly = calculateMonthlyPrincipalInterest(0, 7, 30);

    expect(monthly).toBe(0);
  });
});

describe("calculateMortgageEstimate", () => {
  it("includes tax, insurance, HOA, and PMI in total when down payment is < 20%", () => {
    const estimate = calculateMortgageEstimate({
      homePrice: 500000,
      downPaymentAmount: 50000,
      interestRate: 6,
      loanTermYears: 30,
      propertyTaxRate: 1.2,
      homeInsuranceAnnual: 2400,
      hoaMonthly: 150,
      pmiRate: 0.8,
    });

    expect(estimate.loanAmount).toBe(450000);
    expect(estimate.monthlyPropertyTax).toBe(500);
    expect(estimate.monthlyHomeInsurance).toBe(200);
    expect(estimate.monthlyHoa).toBe(150);
    expect(estimate.monthlyPmi).toBeCloseTo(300, 4);
    expect(estimate.totalMonthlyPayment).toBeCloseTo(
      estimate.monthlyPrincipalInterest + estimate.monthlyPropertyTax + estimate.monthlyHomeInsurance + estimate.monthlyHoa + estimate.monthlyPmi,
      6,
    );
  });

  it("omits PMI at 20% down payment or greater", () => {
    const estimate = calculateMortgageEstimate({
      homePrice: 800000,
      downPaymentAmount: 160000,
      interestRate: 6.5,
      loanTermYears: 30,
      propertyTaxRate: 1.25,
      homeInsuranceAnnual: 1800,
      hoaMonthly: 0,
      pmiRate: 0.8,
    });

    expect(estimate.downPaymentPercent).toBeCloseTo(20, 6);
    expect(estimate.monthlyPmi).toBe(0);
  });

  it("sanitizes invalid and negative inputs", () => {
    const estimate = calculateMortgageEstimate({
      homePrice: Number.NaN,
      downPaymentAmount: -100,
      interestRate: Number.NaN,
      loanTermYears: -30,
      propertyTaxRate: -1,
      homeInsuranceAnnual: Number.NaN,
      hoaMonthly: -5,
      pmiRate: -0.2,
    });

    expect(estimate.loanAmount).toBe(1);
    expect(estimate.monthlyPrincipalInterest).toBeCloseTo(1 / 12, 6);
    expect(estimate.monthlyPropertyTax).toBe(0);
    expect(estimate.monthlyHomeInsurance).toBe(0);
    expect(estimate.monthlyHoa).toBe(0);
    expect(estimate.monthlyPmi).toBe(0);
    expect(estimate.totalMonthlyPayment).toBeCloseTo(1 / 12, 6);
  });
});
