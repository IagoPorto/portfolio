import './ExperienceSection.css';
import { Experience } from './Experience';

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
          "Built a full-stack platform for automotive testing with Django on the backend and React on the frontend.",
          "Wired Jenkins pipelines into the UI so engineers can launch vehicle tests with one click.",
          "Set up GitLab CI/CD flows that eliminated manual steps and accelerated our release cadence.",
          "Swapped container-based deployments for native Windows execution to simplify test-bench integration.",
          "Partnered with UX designers and test engineers to streamline interfaces and workflows.",
          "Backed everything up with unit and integration tests (pytest & Vitest) for rock-solid reliability.",
          "Owned Scrum ceremonies, sprint planning, daily stand-ups, retrospectives and drove code reviews."
        ]}
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
          "Cut SQL runtimes by over 50% and polished Android app workflows for better UX."
        ]}
      />
    </section>
  );
}
