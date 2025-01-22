// Experience.jsx
import React from 'react';
import './Experience.css'; // Asegúrate de crear este archivo para los estilos

export function Experience() {
    return (
        <section className="experience">
            <h2>Experiencia Profesional</h2>
            <div className="job">
                <h3>Ingeniero de Software en [Nombre de la Empresa]</h3>
                <p><strong>Período:</strong> [Mes Año] - Presente</p>
                <p>
                    Descripción de tus responsabilidades y logros en esta posición. Por ejemplo:
                    <ul>
                        <li>Desarrollo de aplicaciones web utilizando React y Node.js.</li>
                        <li>Implementación de soluciones escalables y eficientes.</li>
                        <li>Colaboración con equipos multidisciplinarios para mejorar la experiencia del usuario.</li>
                    </ul>
                </p>
            </div>
            <div className="job">
                <h3>Desarrollador Frontend en [Nombre de la Empresa]</h3>
                <p><strong>Período:</strong> [Mes Año] - [Mes Año]</p>
                <p>
                    Descripción de tus responsabilidades y logros en esta posición. Por ejemplo:
                    <ul>
                        <li>Creación de interfaces de usuario interactivas y responsivas.</li>
                        <li>Optimización del rendimiento de las aplicaciones web.</li>
                        <li>Integración de APIs y servicios externos.</li>
                    </ul>
                </p>
            </div>
            {/* Añade más experiencias según sea necesario */}
        </section>
    );
}
