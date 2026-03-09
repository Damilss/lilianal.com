import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MortgageCalculator from "@/components/MortgageCalculator";

describe("MortgageCalculator", () => {
  it("renders monthly estimate and consultation CTA", () => {
    render(<MortgageCalculator ctaHref="/contact" />);

    expect(screen.getByText(/Estimated Total Payment/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /book consultation/i })).toHaveAttribute("href", "/contact");
  });

  it("recalculates results when inputs change", () => {
    render(<MortgageCalculator />);

    const totalEl = screen.getByTestId("total-monthly-payment");
    const initialTotal = totalEl.textContent;

    const homePriceInput = screen.getByLabelText(/Home Price/i);
    fireEvent.change(homePriceInput, { target: { value: "500000" } });

    expect(screen.getByTestId("total-monthly-payment").textContent).not.toBe(initialTotal);
  });

  it("shows PMI helper copy based on down payment threshold", () => {
    render(<MortgageCalculator />);

    expect(screen.getByText(/PMI is not included because down payment is at least 20%/i)).toBeInTheDocument();

    const downPaymentInput = screen.getAllByLabelText(/Down Payment/i)[0];
    fireEvent.change(downPaymentInput, { target: { value: "100000" } });

    expect(screen.getByText(/PMI is included because down payment is below 20%/i)).toBeInTheDocument();
  });
});
