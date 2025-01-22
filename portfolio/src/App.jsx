import { MouseFollower } from './components/MouseFollower.jsx';
import { Presentation } from './components/Presentation.jsx';
import { Menu } from './components/Menu.jsx';
import { About } from './components/About.jsx';
import { Experience } from './components/Experience.jsx';
import { Projects } from './components/Projects.jsx';
import './App.css';

function App() {
  return (
    <main>
      <MouseFollower />
      <aside class="left-section">
        <Presentation />
        <Menu />
      </aside>
      <section class ="right-section">
        <About />
        <Experience />
        <Projects />
      </section>
    </main>
  );
}

export default App;
