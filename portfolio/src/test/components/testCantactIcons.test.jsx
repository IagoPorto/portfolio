import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactIcons from "../../components/ContactIcons";

describe("ContactIcons", () => {
  it("renders all contact icons", () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("contains GitHub icon with correct link and attributes", () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole("link");
    // buscamos el enlace cuyo href contiene "github.com/IagoPorto"
    const githubLink = links.find((a) =>
      a.getAttribute("href")?.includes("github.com/IagoPorto"),
    );
    expect(githubLink).toBeDefined();
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("contains LinkedIn icon with correct link and attributes", () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole("link");
    const linkedinLink = links.find((a) =>
      a.getAttribute("href")?.includes("linkedin.com/in/iagoportomontes"),
    );
    expect(linkedinLink).toBeDefined();
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("contains Email icon with correct mailto link", () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole("link");
    const emailLink = links.find((a) =>
      a.getAttribute("href")?.startsWith("mailto:"),
    );
    expect(emailLink).toBeDefined();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:iagoportomontes@gmail.com",
    );
    expect(emailLink).not.toHaveAttribute("target");
    expect(emailLink).not.toHaveAttribute("rel");
  });
});
