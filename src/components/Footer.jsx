import styles from "../styles/Footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.socials}>
        <a
          href="https://github.com/ricocondee/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/ricocondee/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/ricocondee/"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
      <p className={styles.copyright}>&copy; {currentYear} ricocondee. Almost all rights reserved.</p>
    </footer>
  );
};

export default Footer;
