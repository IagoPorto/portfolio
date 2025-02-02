import { MouseFollower } from './components/MouseFollower.jsx';
import { Presentation } from './components/Presentation.jsx';
import { Menu } from './components/Menu.jsx';
import { About } from './components/About.jsx';
import { Experience } from './components/Experience.jsx';
import { Projects } from './components/Projects.jsx';
import './App.css';
import NoiseBackground from './components/NoiseBackground.jsx';

function App() {
  return (
    <main>
      <MouseFollower />
      <NoiseBackground />
      <aside className="left-section">
        <Presentation />
        <Menu />
      </aside>
      <section className ="right-section">
        <About />
        <Experience />
        <Projects />
      </section>
    </main>
  );
}

export default App;
