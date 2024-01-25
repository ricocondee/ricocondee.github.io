import React from "react";
import Certificates from "../components/Certificates";
import mySelf from "../assets/me.png";
import demo1 from "../assets/demo1.png";
import efsetLogo from "../assets/efset.jpeg";
import platziLogo from "../assets/platzi.jpeg";
import movistarLogo from "../assets/movistar.jpeg";
import Project from "../components/Project.jsx";

const Home = () => {
  return (
    <main>
      <div className="wrapper"></div>
      <div className="myself">
        <img src={mySelf} alt="myself" />
      </div>
      <section className="content">
        <article className="home">
          <h1>Emanuel Rico Conde</h1>
          <strong>Web Developer</strong>
          <p>
            As a junior web developer, I am enthusiastic about self-directed
            learning and constantly improving my skills.{" "}
            <b>
              I am proficient in various languages and technologies, such as,
              JavaScript, HTML5, CSS3, Node.js and React.js
            </b>{" "}
            I am always eager to take on new challenges and continue to grow in
            the field of web development.
          </p>
          <div className="buttons">
            <a href="#contact">Contact me</a>
          </div>
        </article>
        <article className="about" id="about">
          <h2>About me</h2>
          <p>
            I currently live in Barranquilla, Colombia. I always imagined myself
            helping people, that's why I wanted to be a doctor, but because of
            life, I ended up liking software and the technology industry. Even
            though I don't get along so well with people, it's pretty easy for
            me to see that I want to create ways to improve people's lives. I
            think those ways are through software.
          </p>
        </article>
        <article className="projects" id="projects">
          <Project
            name="Magdal Store"
            page={demo1}
            stack={[
              { name: "React", logo: "ReactLogoURL" },
              { name: "CSS", logo: "CSSLogoURL" },
            ]}
          />
        </article>
        <article className="education" id="edu">
          <h2>Education</h2>
          <Certificates
            logo={efsetLogo}
            title="EF SET English Certificate 72/100 (C2 Proficient)"
            company="EF Standard English Test (EF SET)"
            date="Expedition: jan. 2023"
            credential="Reading and listening test)"
            showCredential="Show Credential"
          />
          <Certificates
            logo={platziLogo}
            title="Base de Datos con MongoDB y WebSockets"
            company="Platzi"
            date="Expedition: mar. 2022"
            credential="79a8b24b-2723-45a6-8d86-ba5331 Ob5260"
            showCredential="Show Credential"
          />
          <Certificates
            logo={movistarLogo}
            title="CO Programación con JavaScript"
            company="Fundación Telefónica Movistar"
            date="Expedition: nov. 2021"
            credential="69ae8ee1-7b60-4dda-b9ee-bb61164c93ca"
            showCredential="Show Credential"
          />
          <Certificates
            logo={platziLogo}
            title="Curso Practico de React.js"
            company="Platzi"
            date="Expedition: oct. 2021"
            credential="8d625c97-80d1-4f96-8f6f-5ec4564b8925"
            showCredential="Show Credential"
          />
          <Certificates
            logo={platziLogo}
            title="Curso Practico de JavaScript"
            company="Platzi"
            date="Expedition: oct. 2021"
            credential="ed288e9a-f7fd-482e-916e-2e0113ccd62d"
            showCredential="Show Credential"
          />
          <Certificates
            logo={platziLogo}
            title="[Appsco] Fundamentos de Ingeniería de Software"
            company="Platzi"
            date="Expedition: sept. 2021"
            credential="5bdbd557-3a51-4c97-86fd-1f313f9f2613"
            showCredential="Show Credential"
          />
          <Certificates
            logo={platziLogo}
            title="Curso de Programación Basica"
            company="Platzi"
            date="Expedition: ago. 2021"
            credential="6fa47608-cc05-450b-91 e7-6179bebefb6b"
            showCredential="Show Credential"
          />
          <Certificates
            logo={platziLogo}
            title="Curso Profesional de Git y GitHub"
            company="Platzi"
            date="Expedition: jun. 2021"
            credential="f8feb9c6-4ad6-428c-a378-e15dd19747b6"
            showCredential="Show Credential"
          />
        </article>
        <article></article>
        <article></article>
      </section>
    </main>
  );
};

export default Home;
