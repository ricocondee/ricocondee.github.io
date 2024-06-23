import React from "react";
import Project from "../components/Project";
import { slides } from "../../presetData.json";

export const Projects = () => {
  return (
    <article className="projects" id="projects">
      <div className="light"></div>
      <h2 className="no-margin">Projects</h2>
      <div className="projects-container">
        <Project data={slides} />
      </div>
    </article>
  );
};

export default Projects;
