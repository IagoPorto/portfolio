import { lazy, Suspense, useEffect } from "react";
import { MouseFollower } from "./components/MouseFollower.jsx";
import { Presentation } from "./components/Presentation.jsx";
import { Menu } from "./components/Menu.jsx";
import { About } from "./components/About.jsx";
import { ExperienceSection } from "./components/ExperienceSection.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import ContactIcons from "./components/ContactIcons.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import NoiseBackground from "./components/NoiseBackground.jsx";

const Globe3D = lazy(() => import("./components/Globe3D.jsx"));

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".right-section .reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="layout-container">
        <MouseFollower />
        <NoiseBackground />
        <aside className="left-section">
          <Presentation />
          <Menu />
          <Suspense fallback={null}>
            <Globe3D />
          </Suspense>
          <ContactIcons />
        </aside>
        <div className="right-section" id="main" tabIndex={-1}>
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
