import { Project } from './Project';
import './ProjectsSection.css'; // Asegúrate de crear este archivo para los estilos

export function ProjectsSection() {
    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Personal Projects</h2>
            <Project />
            <Project />
            <Project />
        </section>
    );
}
