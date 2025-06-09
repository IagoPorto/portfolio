import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
  it("renders the footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it('displays "Compiled with ♥ and caffeine"', () => {
    render(<Footer />);
    expect(screen.getByText(/compiled with/i)).toBeInTheDocument();
  });

  it("includes the FaHeart icon", () => {
    render(<Footer />);
    const icon = document.querySelector(".icon");
    expect(icon).toBeInTheDocument();
  });

  it("displays copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Iago Porto/i)).toBeInTheDocument();
  });
});
