import { useEffect } from "react";
import { MouseFollower } from "./components/MouseFollower.jsx";
import { Presentation } from "./components/Presentation.jsx";
import { Menu } from "./components/Menu.jsx";
import { About } from "./components/About.jsx";
import { ExperienceSection } from "./components/ExperienceSection.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import Globe3D from "./components/Globe3D.jsx";
import ContactIcons from "./components/ContactIcons.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import NoiseBackground from "./components/NoiseBackground.jsx";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".right-section .reveal");

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      sections.forEach((el) => el.classList.add("visible"));
      return;
    }

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
      <div className="layout-container">
        <MouseFollower />
        <NoiseBackground />
        <aside className="left-section">
          <Presentation />
          <Menu />
          <Globe3D />
          <ContactIcons />
        </aside>
        <div className="right-section">
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
