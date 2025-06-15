import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectsSection } from "../../components/ProjectsSection";

describe("ProjectsSection", () => {
  it("renders section title and projects with correct links", () => {
    render(<ProjectsSection />);

    expect(
      screen.getByRole("heading", { level: 2, name: /Personal Projects/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: "AutoGuard" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Firefly Drone" }),
    ).toBeInTheDocument();

    const autoGuardLink = screen.getByRole("link", {
      name: /AutoGuard slide 1/i,
    });
    expect(autoGuardLink).toHaveAttribute(
      "href",
      "https://github.com/IagoPorto/autoguard",
    );

    const fireflyDroneLink = screen.getByRole("link", {
      name: /Firefly Drone slide 1/i,
    });
    expect(fireflyDroneLink).toHaveAttribute(
      "href",
      "https://github.com/IagoPorto/Dron-Firefly",
    );
  });
});
