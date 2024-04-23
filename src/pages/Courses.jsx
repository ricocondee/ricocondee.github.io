import React from "react";
import Certificates from "../components/Certificates";
import { certificates } from "../../presetData.json";

const Courses = () => {
  return (
    <div>
      <article className="education" id="education">
        <h2>Education</h2>
        <Certificates data={certificates}/>
      </article>
    </div>
  );
};

export default Courses;
