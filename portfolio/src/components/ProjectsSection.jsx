import { Project } from './Project';
import './ProjectsSection.css'; // Asegúrate de crear este archivo para los estilos

export function ProjectsSection() {
    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Personal Projects</h2>
            <Project
                name="AutoGuard"
                description="Android app that detects driver distractions and drowsiness in real time using MediaPipe facemesh and MPAndroidChart for visualization."
                url="https://github.com/IagoPorto/autoguard"
                photos={["https://raw.githubusercontent.com/IagoPorto/IagoPorto/main/pictures/logo-completo-color.jpg",
                         "https://raw.githubusercontent.com/IagoPorto/AutoGuard/main/pictures/pantalla_monitoreo-2.jpg"
                ]}
                tecnologies={["MediaPipe","MPAndroidChart","Java","Android SDK"]}
            />



            <Project
            name="Drone"
            description="Embedded real-time drone system built on Raspberry Pi with Navio board. Modular architecture for motors, controller, PID algorithms, and sensors using RTIMULib (Kalman filter), with remote communication over Zenoh."
            url="https://github.com/IagoPorto/Dron-Firefly"
            photos={["https://raw.githubusercontent.com/IagoPorto/Dron-Firefly/main/dron2.png",
                    "https://raw.githubusercontent.com/IagoPorto/Drone-Firefly/main/dron.jpg"
            ]}
            tecnologies={[
                "C++", "Raspberry Pi", "Navio", "RTIMULib", "Zenoh", "PID Control"
            ]}
            />

        </section>
    );
}
