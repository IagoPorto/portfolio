import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { About } from "../../components/About";

const PARAGRAPHS = 3;

describe("<About />", () => {
  it("renders the section title", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /about me/i }),
    ).toBeInTheDocument();
  });

  it("renders all paragraphs", () => {
    render(<About />);
    const paragraphs = screen.getAllByText(/i[’']?m/i);
    expect(paragraphs.length).toBeGreaterThanOrEqual(PARAGRAPHS);
  });

  it("includes content about Technica Engineering", () => {
    render(<About />);
    expect(screen.getByText(/technica engineering/i)).toBeInTheDocument();
  });

});
