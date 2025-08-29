import React from "react";
import mySelf from "../assets/me.jpg";
import mySelfNBG from "../assets/me5.png";
import styles from "../styles/Me.module.css";
import LetterGlitch from "../LetterGlitch/LetterGlitch.jsx";
import useSound from "use-sound";
import sound from "../assets/sound.mp3";

const Me = () => {

  return (
    <div className={styles.container}>
      <div className={styles.emanuel}>
        <h1>Emanuel</h1>
      </div>
      <div className={styles.background}>
        <div className={styles.glitch1}>
          <LetterGlitch
            className={styles.glitch}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        <div className={styles.half}></div>
        <img src={mySelfNBG} className={styles.me} alt="Emanuel Rico Conde" />
      </div>
      <div className={styles.titleContainer}>
        <strong>Web Developer</strong>
      </div>
      <div className={styles.description}>
        <p>
          As a <strong>software developer</strong>, I am enthusiastic about self-directed
          learning and constantly improving my skills. I am proficient in
          various programming languages and technologies, such as{" "}
          <strong>JavaScript</strong>, <strong>HTML5</strong>,{" "}
          <strong>CSS3</strong>, <strong>NodeJS</strong> and{" "}
          <strong>ReactJS</strong>. I am always eager to take on new challenges
          and continue to grow in the field of software development.
        </p>
      </div>
      <div className={styles.CTAButton}>
        <button>
          <a href="#projects">Contact me</a>
        </button>
        
      </div>
    </div>
  );
};

export default Me;
