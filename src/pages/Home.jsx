import { React, useState } from "react";
import Courses from "./Courses.jsx";
import Projects from "./Projects.jsx";
import About from "./About.jsx";
import Me from "../components/Me.jsx";

const Home = () => {
  return (
    <main>
      <article className="content">
        <section className="home" id="home">
          <Me />
          <div className="title">
            <h1>Emanuel Rico Conde</h1>
            <strong>Web Developer</strong>
          </div>
          <p>
            As a software and web Developer, I am enthusiastic about
            self-directed learning and constantly improving my skills. I am
            proficient in various programming languages and technologies, such
            as JavaScript, HTML 5, CSS 3, Node JS and React JS. I am always
            eager to take on new challenges and continue to grow in the field of
            software development.
          </p>
          <div className="buttons">
            <a href="#projects">See my work</a>
          </div>
        </section>
        <About />
        <Projects />
        <Courses />
      </article>
    </main>
  );
};

export default Home;
