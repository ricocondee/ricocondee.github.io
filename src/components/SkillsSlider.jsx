import React from "react";
import styles from "../styles/SkillsSlider.module.css";
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiReact, 
  SiTypescript, 
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase
} from "react-icons/si";

// Skills data
const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Supabase", icon: <SiSupabase /> }
];

// Duplicate the list to create the infinite scroll effect (x4 for smoothness)
const infiniteSkills = [...skills, ...skills, ...skills, ...skills];

const SkillsSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}>
        {infiniteSkills.map((skill, index) => (
          <div className={styles.skillItem} key={`${skill.name}-${index}`}>
            <span className={styles.icon}>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSlider;
