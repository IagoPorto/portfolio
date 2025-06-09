import { render, screen } from "@testing-library/react";
import ContactIcons from "../../components/ContactIcons";
import { describe, it, expect } from "vitest";

const numberOfIcons = 3;

describe("ContactIcons", () => {
  it("renders all contact icons", () => {
    render(<ContactIcons />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(numberOfIcons);
  });

  it("contains GitHub icon with correct link and attributes", () => {
    render(<ContactIcons />);

    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });

    expect(githubLink).toHaveAttribute("href", "https://github.com/IagoPorto");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("contains LinkedIn icon with correct link and attributes", () => {
    render(<ContactIcons />);

    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });

    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/iagoportomontes/",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("contains Email icon with correct mailto link", () => {
    render(<ContactIcons />);

    const emailLink = screen.getByRole("link", {
      name: /envelope/i,
    });

    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:iagoportomontes@gmail.com",
    );
    expect(emailLink).not.toHaveAttribute("target");
  });
});
