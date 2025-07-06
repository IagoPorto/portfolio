import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ExperienceSection } from "../../components/ExperienceSection";

const headingLevel = 2;
const headingLevel3 = 3; // Assuming the heading level is 2 for the section title

describe("ExperienceSection", () => {
  it("renders the section with a proper heading", () => {
    render(<ExperienceSection />);

    const heading = screen.getByRole("heading", {
      level: headingLevel,
      name: /experience/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders two experience entries", () => {
    render(<ExperienceSection />);

    const jobHeadings = screen.getAllByRole("heading", {
      level: headingLevel3,
    });
    expect(jobHeadings).toHaveLength(headingLevel);

    expect(screen.getByText("Technica Engineering Spain")).toBeInTheDocument();
    expect(screen.getByText("Imatia Innovation")).toBeInTheDocument();
  });

  it("renders all details for Technica Engineering", () => {
    render(<ExperienceSection />);

    const technicaDetails = [
      "Built a full-stack platform for automotive testing with Django on the backend and React on the frontend.",
      "Wired Jenkins pipelines into the UI so engineers can launch vehicle tests with one click.",
      "Set up GitLab CI/CD flows that eliminated manual steps and accelerated our release cadence.",
      "Swapped container-based deployments for native Windows execution to simplify test-bench integration.",
      "Partnered with UX designers and test engineers to streamline interfaces and workflows.",
      "Backed everything up with unit and integration tests (pytest & Vitest) for rock-solid reliability.",
      "Owned Scrum ceremonies, sprint planning, daily stand-ups, retrospectives and drove code reviews.",
    ];

    technicaDetails.forEach((detail) => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });

  it("renders all details for Imatia Innovation", () => {
    render(<ExperienceSection />);

    const imatiaDetails = [
      "Designed and deployed Java/Spring microservices and REST APIs for industrial automation.",
      "Refactored legacy modules, boosting performance and easing future maintenance.",
      "Fine-tuned Oracle & PostgreSQL queries and managed schema changes via Liquibase.",
      "Automated truck logistics and hooked up telecom-admin tools for public-sector clients.",
      "Built real-time monitoring panels in JavaFX and Android to visualize system health.",
      "Developed a C++ OCR microservice for license-plate detection, integrated via Spring.",
      "Cut SQL runtimes by over 50% and polished Android app workflows for better UX.",
    ];

    imatiaDetails.forEach((detail) => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });
});
