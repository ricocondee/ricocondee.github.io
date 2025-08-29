import Projects from "./Projects.jsx";
import Me from "../components/Me.jsx";
import styles from "../styles/Main.module.css";
import LetterGlitch from "../LetterGlitch/LetterGlitch.jsx";

const Main = () => {
  return (
    <main className={styles.container}>
      <section className={styles.home} id="home">
        <Me />
      </section>
      <section className={styles.projectsSection} id="projects">
        <Projects />
      </section>
    </main>
  );
};

export default Main;
