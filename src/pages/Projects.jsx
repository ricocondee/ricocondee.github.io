import React from "react";
import Project from "../components/Project.jsx";
import {slides} from "../../presetData.json";

export const Projects = () => {
  return (
    <article className="projects" id="projects">
      <h2>Projects</h2>
        <Project data={slides} />
    </article>
  );
};

export default Projects;
