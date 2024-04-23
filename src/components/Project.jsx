import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Project = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const handleLeftClick = () => {
    current === 0 ? setCurrent(data.length - 1) : setCurrent(current - 1);
  };
  const handleRightClick = () => {
    data.length - 1 === current ? setCurrent(0) : setCurrent(current + 1);
  };
  const handleDotsClick = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="projects-container">
      <FaChevronCircleLeft
        className="arrow leftArrow"
        onClick={handleLeftClick}
      />
      <FaChevronCircleRight
        className="arrow rightArrow"
        onClick={handleRightClick}
      />
      {data?.map((demo, index) => {
        return (
          <div
            key={index}
            className={current === index ? "project" : "hiddenProject"}
          >
            <div className="project-info">
              <img src={demo.src} alt={demo.Project} />
              <div className="project-text">
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

      <span className="demoDots">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              className={current === index ? "dots" : "selectedDot"}
              onClick={() => handleDotsClick(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Project;
