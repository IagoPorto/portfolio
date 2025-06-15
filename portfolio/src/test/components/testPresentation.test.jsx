import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Presentation } from "../../components/Presentation";

describe("Presentation", () => {
  it("renders the section with class 'presentation'", () => {
    const { container } = render(<Presentation />);
    const section = container.querySelector("section.presentation");
    expect(section).toBeInTheDocument();
  });

  it("renders the heading with name", () => {
    render(<Presentation />);
    const heading = screen.getByRole("heading", {
      name: "Iago Porto",
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Presentation />);
    const subheading = screen.getByRole("heading", {
      name: "Software Engineer",
      level: 2,
    });
    expect(subheading).toBeInTheDocument();
  });

  it("renders the description with emphasis", () => {
    render(<Presentation />);
    const paragraph = screen.getByText(/I bring.*behind the scenes/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.querySelector("strong")).toHaveTextContent(
      "applications to life",
    );
  });
});
