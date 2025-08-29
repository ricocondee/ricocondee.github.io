import PropTypes from "prop-types";
import { getImageUrl } from "../utils/imageUtil";
import styles from "../styles/Project.module.css";

const Project = ({ data }) => {
  return (
    <div className={styles.projectContainer}>
      {data?.map((demo, index) => {
        return (
          <div key={index} className={styles.project}>
            <div className={styles.projectInfo}>
              <img src={getImageUrl(demo.src)} alt={demo.Project} />
              <div className={styles.projectText}>
                <div className={styles.cover}>
                  <strong>{demo.Project}</strong>
                </div>
                <h2>{demo.Project}</h2>
                <span>{demo.stack}</span>
                <p>{demo.description}</p>
              </div>
            </div>
            <div className={styles.projectLinks}>
              <a href={demo.link} target="_blank" rel="noreferrer">
                Demo
              </a>
              <a href={demo.github} target="_blank" rel="noreferrer">
                Repo
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Project.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Project;
