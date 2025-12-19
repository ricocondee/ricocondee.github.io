import React from "react";
import styles from "../styles/ToolsSlider.module.css";
import { 
  SiVisualstudiocode, 
  SiFigma, 
  SiOpenai
} from "react-icons/si";

// Asset Imports
import geminiLogo from "../assets/gemini.png";
import claudeLogo from "../assets/claude.png";
import nanoLogo from "../assets/banana.png";
import affinityLogo from "../assets/new-affinity-logo.svg";

// Tool data
const tools = [
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Gemini CLI", icon: <img src={geminiLogo} alt="Gemini CLI" /> }, 
  { name: "Claude", icon: <img src={claudeLogo} alt="Claude" /> }, 
  { name: "ChatGPT", icon: <SiOpenai /> },
  { name: "Nano Banana", icon: <img src={nanoLogo} alt="Nano Banana" /> }, 
  { name: "Figma", icon: <SiFigma /> },
  { name: "Affinity", icon: <img src={affinityLogo} alt="Affinity" /> }
];

// Duplicate the list to create the infinite scroll effect
const infiniteTools = [...tools, ...tools, ...tools, ...tools];

const ToolsSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <h3 className={styles.title}>Powered By</h3>
      <div className={styles.sliderTrack}>
        {infiniteTools.map((tool, index) => (
          <div className={styles.toolItem} key={`${tool.name}-${index}`}>
            <span className={styles.icon}>{tool.icon}</span>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSlider;
