import './ExperienceSection.css'; // Asegúrate de crear este archivo para los estilos
import { Experience } from './Experience';

export function ExperienceSection() {
    return (
        <section className="experience" id="experience">
            <h2 className="section-title">Experience</h2>
            <Experience
                position="Software Engineer"
                companyName="Technica Engineering"
                companyUrl="https://www.technica-engineering.de/"
                initDate="April 2025"
                finalDate="Present"
                details={[
                    "Developed a full-stack web server for automotive testing workflows with a Django (Python) backend and a React frontend (JavaScript/TypeScript).",
                    "Integrated the backend with Jenkins to trigger vehicle testing jobs directly from the web interface.",
                    "Designed and implemented CI/CD pipelines using GitLab, improving deployment and testing across environments.",
                    "Led the migration from Docker containers to native Windows execution for better compatibility with automotive test benches.",
                    "Proposed and implemented UX/UI improvements to enhance usability for engineers.",
                    "Wrote unit tests in both Python (pytest) and React (Vitest, Testing Library) to ensure system reliability.",
                    "Worked in an agile Scrum team: sprint planning, daily stand-ups, and code reviews.",
                    "Contributed to bridging software with real-world automotive testing systems."
                ]}
            />
            <Experience
                position="Software Engineer"
                companyName="Imatia Innovation"
                companyUrl="https://www.imatia.com/"
                initDate="May 2023"
                finalDate="March 2025"
                details={[
                    "Developed backend features using Java and Spring, including REST APIs and event-driven architecture.",
                    "Refactored legacy components to improve performance and maintainability.",
                    "Optimized SQL queries and managed database performance using Liquibase for version control.",
                    "Integrated automated systems such as truck inbound/outbound management and telecom equipment tools for public administration.",
                    "Contributed to frontend development of desktop and Android applications, building monitoring panels and visualizing system data.",
                    "Designed and implemented a SCADA-like system to monitor devices in industrial truck scale systems using JavaFX.",
                    "Created a license plate OCR system in C++ and integrated it as a microservice with a REST API and Oracle SQL persistence.",
                    "Improved Android apps and reduced SQL query execution times by over 50%."
                ]}
            />
        </section>
    );
}
