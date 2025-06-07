import { Project } from './Project';
import './ProjectsSection.css';

export function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Personal Projects</h2>

      <Project
        name="AutoGuard"
        description="Real-time Android app that monitors driver attention and drowsiness with MediaPipe Face Mesh, plotting live metrics on MPAndroidChart."
        url="https://github.com/IagoPorto/autoguard"
        photos={[
          "https://raw.githubusercontent.com/IagoPorto/IagoPorto/main/pictures/logo-completo-color.jpg",
          "https://raw.githubusercontent.com/IagoPorto/AutoGuard/main/pictures/pantalla_monitoreo-2.jpg"
        ]}
        tecnologies={["Android SDK", "Java", "MediaPipe", "MPAndroidChart"]}
      />

      <Project
        name="Firefly Drone"
        description="Embedded flight controller on Raspberry Pi + Navio, featuring modular C++ PID loops and RTIMULib-based Kalman filtering, with Zenoh-powered telemetry."
        url="https://github.com/IagoPorto/Dron-Firefly"
        photos={[
          "https://raw.githubusercontent.com/IagoPorto/Dron-Firefly/main/dron2.png",
          "https://raw.githubusercontent.com/IagoPorto/Drone-Firefly/main/dron.jpg"
        ]}
        tecnologies={["C++", "Raspberry Pi", "Navio", "RTIMULib", "Zenoh", "PID Control"]}
      />
    </section>
  );
}
