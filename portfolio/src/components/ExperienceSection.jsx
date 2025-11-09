import "./ExperienceSection.css";
import { Experience } from "./Experience";

export function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <Experience
        position="Software Engineer"
        companyName="Technica Engineering Spain"
        companyUrl="https://www.technica-engineering.de/"
        initDate="April 2025"
        finalDate="Present"
        details={[
          "Designed and delivered a full-stack testing platform that replaced spreadsheet-driven workflows and reduced time-to-test for engineers.",
          "Connected backend automation with a React UI, letting the team kick off vehicle tests with a single click (actual cheering witnessed).",
          "Built CI/CD pipelines that removed manual deployment steps and made releases predictable instead of hero moments.",
          "Collaborated closely with UX testers and hardware engineers to reduce friction and remove unnecessary complexity from daily workflows.",
          "Added automated tests (pytest + Vitest) so we can sleep at night without wondering whether a commit broke something.",
          "Mentored junior developers and guided our intern through feature delivery, helping them become more independent and confident contributing to the codebase.",
          "Facilitated Agile ceremonies, sprint planning, and code reviews, keeping the team aligned and shipping value instead of Jira tickets."
        ]}
        technologies={["TypeScript", "React", "Python", "Django", "Docker"]}
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
