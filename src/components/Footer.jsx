import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
      <footer id="contact">
        <div className="social-footer">
          <img src={Github} alt="Visit Emanuel's Github profile"/>
          <img src={Linkedin} alt="Visit Emanuel's Linkedin profile"/>
          <img src={Twitter} alt="Visit Emanuel's Twitter profile"/>
        </div>
        <p>&copy; 2024 ricocondee. Almost all rights reserved.</p>
      </footer>
  );
};

export default Footer;
