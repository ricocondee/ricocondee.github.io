import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
      <footer id="contact">
        <div className="social-footer">
          <a href="https://github.com/ricocondee/" target="_blank" rel="noreferrer"><img src={Github} alt="Visit Emanuel's Github profile"/></a>
          <a href="https://linkedin.com/in/ricocondee/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Visit Emanuel's Linkedin profile"/></a>
          <a href="https://twitter.com/ricocondee/" target="_blank" rel="noreferrer"><img src={Twitter} alt="Visit Emanuel's Twitter profile"/></a>
        </div>
        <p>&copy; 2024 ricocondee. Almost all rights reserved.</p>
      </footer>
  );
};

export default Footer;
