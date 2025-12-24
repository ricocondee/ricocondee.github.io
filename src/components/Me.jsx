import React, { useState } from "react";
import mySelfNBG from "../assets/me5.png";
import styles from "../styles/Me.module.css";
import LetterGlitch from "../LetterGlitch/LetterGlitch.jsx";
import { useModal } from "../context/ModalContext"; // Corrected import path

const Me = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { handleModal } = useModal(); // Get handleModal from context

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
        <div className={`${styles.textContainer} ${isExpanded ? styles.expanded : styles.collapsed}`}>
          <p>
            I'm a software developer passionate about self-directed learning and crafting high-performance web experiences. 
            I am proficient in various programming languages and technologies, such as{" "}
            <strong>JavaScript</strong>, <strong>HTML5</strong>,{" "}
            <strong>CSS3</strong>, <strong>NodeJS</strong> and{" "}
            <strong>ReactJS</strong>. I am always eager to take on new challenges
            and continue to grow in the field of software development.
          </p>
        </div>
        <button 
          className={styles.readMoreBtn} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
      <div className={styles.CTAButton}>
        <button onClick={() => handleModal('contact')}> {/* Call handleModal with 'contact' */}
          Contact me
        </button>
        
      </div>
    </div>
  );
};

export default Me;
