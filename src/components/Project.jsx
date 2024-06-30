import React from "react";
import PropTypes from "prop-types";
import { getImageUrl } from "../utils/imageUtil";

const Project = ({ data }) => {
  return (
    <div className="project-container">
      {data?.map((demo, index) => {
        return (
          <div key={index} className={"project"}>
            <div className="project-info">
              <img src={getImageUrl(demo.src)} alt={demo.Project} />
              <div className="project-text">
                <div className="cover">
                  <strong>{demo.Project}</strong>
                </div>
                <h2>{demo.Project}</h2>
                <span>{demo.stack}</span>
                <p>{demo.description}</p>
              </div>
            </div>
            <div className="project-links">
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
