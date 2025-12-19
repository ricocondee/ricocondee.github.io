import Projects from "./Projects.jsx";
import Me from "../components/Me.jsx";
import Services from "../components/Services.jsx";
import ToolsSlider from "../components/ToolsSlider.jsx";
import SkillsSlider from "../components/SkillsSlider.jsx";
import styles from "../styles/Main.module.css";
import LetterGlitch from "../LetterGlitch/LetterGlitch.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small timeout to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        // Optional: clear state logic if needed, but usually fine as is
      }
    }
  }, [location]);

  return (
    <main className={styles.container}>
      <SEO />
      <section className={styles.home} id="home">
        <Me />
      </section>
      <section className={styles.projectsSection} id="services">
        <Services />
      </section>
      <ToolsSlider />
      <SkillsSlider />
      <section className={styles.projectsSection} id="projects">
        <Projects />
      </section>
    </main>
  );
};

export default Main;
