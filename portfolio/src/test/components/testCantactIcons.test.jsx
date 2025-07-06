import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactIcons from "../../components/ContactIcons";

const ICONS = 4

describe("ContactIcons", () => {
  it("renders all contact icons", () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(ICONS);
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

  it("contains Resume icon with correct link and attributes", () => {
    render(<ContactIcons />);
    const resumeLink = screen
      .getAllByRole("link")
      .find((a) => a.getAttribute("href") === "/portfolio/resume.pdf");
    expect(resumeLink).toBeDefined();
    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(resumeLink).toHaveAttribute("title", "Look at my resume");
  });
});
