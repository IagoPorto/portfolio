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

  it("renders three experience entries", () => {
    render(<ExperienceSection />);

    const jobHeadings = screen.getAllByRole("heading", {
      level: headingLevel3,
    });
    expect(jobHeadings).toHaveLength(3);

    expect(screen.getAllByText("Technica Engineering Spain")).toHaveLength(2);
    expect(screen.getByText("Imatia Innovation")).toBeInTheDocument();
  });

  it("renders all details for the Technica SWE role", () => {
    render(<ExperienceSection />);

    const sweDetails = [
      "Designed and delivered a full-stack testing platform that replaced spreadsheet-driven workflows and reduced time-to-test for engineers.",
      "Connected backend automation with a React UI, letting the team kick off vehicle tests with a single click (actual cheering witnessed).",
      "Built CI/CD pipelines that removed manual deployment steps and made releases predictable instead of hero moments.",
      "Collaborated closely with UX testers and hardware engineers to reduce friction and remove unnecessary complexity from daily workflows.",
      "Mentored junior developers and guided our intern through feature delivery, helping them become more independent and confident contributing to the codebase.",
      "Added automated tests (pytest + Vitest) so we can sleep at night without wondering whether a commit broke something.",
    ];

    sweDetails.forEach((detail) => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });

  it("renders all details for the Technica PO role", () => {
    render(<ExperienceSection />);

    const poDetails = [
      "Own the product backlog: write and refine user stories, prioritize by business value, and plan sprints that keep the team shipping.",
      "Align stakeholders and clients around the product vision, turning requirements into a clear roadmap the team can execute.",
      "Facilitated Agile ceremonies, sprint planning, and code reviews, keeping the team aligned and shipping value instead of Jira tickets.",
      "Built a test harness that automates vehicle test setups, so engineers run scenarios without manual wiring or configuration.",
      "Created an MCP (Model Context Protocol) server that gives AI assistants safe, controlled access to the team's internal tooling.",
      "Built GitLab CI/CD pipelines that removed manual deployment steps and made releases predictable instead of hero moments.",
      "Designed the data layer with PostgreSQL for relational workloads and SQLite for embedded, offline-friendly storage.",
      "Led the platform's architecture design and structured the backend around Domain-Driven Design, keeping the domain model close to the business.",
    ];

    poDetails.forEach((detail) => {
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
