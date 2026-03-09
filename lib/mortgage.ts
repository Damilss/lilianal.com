export type MortgageInputs = {
  homePrice: number;
  downPaymentAmount: number;
  interestRate: number;
  loanTermYears: number;
  propertyTaxRate: number;
  homeInsuranceAnnual: number;
  hoaMonthly: number;
  pmiRate: number;
};

export type MortgageEstimate = {
  loanAmount: number;
  monthlyPrincipalInterest: number;
  monthlyPropertyTax: number;
  monthlyHomeInsurance: number;
  monthlyHoa: number;
  monthlyPmi: number;
  totalMonthlyPayment: number;
  downPaymentPercent: number;
};

const MIN_HOME_PRICE = 1;
const MIN_LOAN_TERM_YEARS = 1;

function toFiniteNonNegative(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(value, 0);
}

function normalizeInputs(raw: MortgageInputs): MortgageInputs {
  const homePrice = Math.max(toFiniteNonNegative(raw.homePrice), MIN_HOME_PRICE);
  const downPaymentAmount = Math.min(toFiniteNonNegative(raw.downPaymentAmount), homePrice);

  return {
    homePrice,
    downPaymentAmount,
    interestRate: toFiniteNonNegative(raw.interestRate),
    loanTermYears: Math.max(toFiniteNonNegative(raw.loanTermYears), MIN_LOAN_TERM_YEARS),
    propertyTaxRate: toFiniteNonNegative(raw.propertyTaxRate),
    homeInsuranceAnnual: toFiniteNonNegative(raw.homeInsuranceAnnual),
    hoaMonthly: toFiniteNonNegative(raw.hoaMonthly),
    pmiRate: toFiniteNonNegative(raw.pmiRate),
  };
}

export function calculateMonthlyPrincipalInterest(loanAmount: number, annualRatePercent: number, termYears: number): number {
  const principal = toFiniteNonNegative(loanAmount);
  const annualRate = toFiniteNonNegative(annualRatePercent);
  const years = Math.max(toFiniteNonNegative(termYears), MIN_LOAN_TERM_YEARS);
  const months = years * 12;

  if (principal === 0) {
    return 0;
  }

  if (annualRate === 0) {
    return principal / months;
  }

  const monthlyRate = annualRate / 100 / 12;
  const factor = Math.pow(1 + monthlyRate, months);

  return (principal * monthlyRate * factor) / (factor - 1);
}

export function calculateMortgageEstimate(rawInputs: MortgageInputs): MortgageEstimate {
  const inputs = normalizeInputs(rawInputs);
  const loanAmount = Math.max(inputs.homePrice - inputs.downPaymentAmount, 0);
  const downPaymentPercent = inputs.homePrice === 0 ? 0 : (inputs.downPaymentAmount / inputs.homePrice) * 100;

  const monthlyPrincipalInterest = calculateMonthlyPrincipalInterest(loanAmount, inputs.interestRate, inputs.loanTermYears);
  const monthlyPropertyTax = (inputs.homePrice * (inputs.propertyTaxRate / 100)) / 12;
  const monthlyHomeInsurance = inputs.homeInsuranceAnnual / 12;
  const monthlyHoa = inputs.hoaMonthly;

  const needsPmi = downPaymentPercent < 20 && loanAmount > 0;
  const monthlyPmi = needsPmi ? (loanAmount * (inputs.pmiRate / 100)) / 12 : 0;

  const totalMonthlyPayment = monthlyPrincipalInterest + monthlyPropertyTax + monthlyHomeInsurance + monthlyHoa + monthlyPmi;

  return {
    loanAmount,
    monthlyPrincipalInterest,
    monthlyPropertyTax,
    monthlyHomeInsurance,
    monthlyHoa,
    monthlyPmi,
    totalMonthlyPayment,
    downPaymentPercent,
  };
}
