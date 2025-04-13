import { MouseFollower } from './components/MouseFollower.jsx';
import { Presentation } from './components/Presentation.jsx';
import { Menu } from './components/Menu.jsx';
import { About } from './components/About.jsx';
import { ExperienceSection } from './components/ExperienceSection.jsx';
import { ProjectsSection } from './components/ProjectsSection.jsx';
import Globe3D from './components/Globe3D.jsx';
import ContactIcons from './components/ContactIcons.jsx';
import './App.css';
import NoiseBackground from './components/NoiseBackground.jsx';

function App() {
  return (
    <>
      <MouseFollower />
      <NoiseBackground />
      <div className="layout-container">
        <aside className="left-section">
          <Presentation />
          <Menu />
          <Globe3D />
          <ContactIcons />
        </aside>
        <section className="right-section">
          <About />
          <ExperienceSection />
          <ProjectsSection />
        </section>
      </div>
    </>
  );
}


export default App;
