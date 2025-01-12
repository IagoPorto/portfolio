import Header from "./components/Header";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SkillsCarousel from "./components/SkillsPainting";

export const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <SkillsCarousel />
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
