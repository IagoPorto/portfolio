import "./ExperienceSection.css";
import { Experience } from "./Experience";

export function ExperienceSection() {
  return (
    <section className="experience reveal" id="experience">
      <h2 className="section-title">Experience</h2>

      <Experience
        position="Software Engineer &amp; Product Owner"
        companyName="Technica Engineering Spain"
        companyUrl="https://www.technica-engineering.de/"
        initDate="August 2026"
        finalDate="Present"
        details={[
          "Own the product backlog: write and refine user stories, prioritize by business value, and plan sprints that keep the team shipping.",
          "Align stakeholders and clients around the product vision, turning requirements into a clear roadmap the team can execute.",
          "Facilitated Agile ceremonies, sprint planning, and code reviews, keeping the team aligned and shipping value instead of Jira tickets.",
          "Built a test harness that automates vehicle test setups, so engineers run scenarios without manual wiring or configuration.",
          "Created an MCP (Model Context Protocol) server that gives AI assistants safe, controlled access to the team's internal tooling.",
          "Built GitLab CI/CD pipelines that removed manual deployment steps and made releases predictable instead of hero moments.",
          "Designed the data layer with PostgreSQL for relational workloads and SQLite for embedded, offline-friendly storage.",
          "Led the platform's architecture design and structured the backend around Domain-Driven Design, keeping the domain model close to the business.",
        ]}
        technologies={[
          "Product Ownership",
          "Scrum",
          "SAFe",
          "Backlog Management",
          "PostgreSQL",
          "SQLite",
          "GitLab CI",
          "DDD",
        ]}
      />

      <Experience
        position="Software Engineer"
        companyName="Technica Engineering Spain"
        companyUrl="https://www.technica-engineering.de/"
        initDate="April 2025"
        finalDate="September 2026"
        details={[
          "Designed and delivered a full-stack testing platform that replaced spreadsheet-driven workflows and reduced time-to-test for engineers.",
          "Connected backend automation with a React UI, letting the team kick off vehicle tests with a single click (actual cheering witnessed).",
          "Built CI/CD pipelines that removed manual deployment steps and made releases predictable instead of hero moments.",
          "Collaborated closely with UX testers and hardware engineers to reduce friction and remove unnecessary complexity from daily workflows.",
          "Mentored junior developers and guided our intern through feature delivery, helping them become more independent and confident contributing to the codebase.",
          "Added automated tests (pytest + Vitest) so we can sleep at night without wondering whether a commit broke something.",
        ]}
        technologies={["TypeScript", "React", "Python", "FastAPI", "Django", "Docker"]}
      />

      <Experience
        position="Software Engineer"
        companyName="Imatia Innovation"
        companyUrl="https://www.imatia.com/"
        initDate="May 2023"
        finalDate="March 2025"
        details={[
          "Designed and deployed Java/Spring microservices and REST APIs for industrial automation.",
          "Refactored legacy modules, boosting performance and easing future maintenance.",
          "Fine-tuned Oracle & PostgreSQL queries and managed schema changes via Liquibase.",
          "Automated truck logistics and hooked up telecom-admin tools for public-sector clients.",
          "Built real-time monitoring panels in JavaFX and Android to visualize system health.",
          "Developed a C++ OCR microservice for license-plate detection, integrated via Spring.",
          "Cut SQL runtimes by over 50% and polished Android app workflows for better UX.",
        ]}
        technologies={["Java", "Spring", "PostgreSQL", "Android", "OracleSQL"]}
      />
    </section>
  );
}
