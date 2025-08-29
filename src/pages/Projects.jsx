import Project from "../components/Project";
import { slides } from "../../presetData.json";
import styles from "../styles/Projects.module.css";

export const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsContainer}>
        <Project data={slides} />
      </div>
    </div>
  );
};

export default Projects;
