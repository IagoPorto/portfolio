import { Project } from './Project';
import './ProjectsSection.css'; // Asegúrate de crear este archivo para los estilos

export function ProjectsSection() {
    return (
        <section className="projects" id="projects">
            <Project />
            <Project />
            <Project />
        </section>
    );
}
