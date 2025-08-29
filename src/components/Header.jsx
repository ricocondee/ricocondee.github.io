import {FaBars} from "react-icons/fa";
import logo from "../assets/meLogo.svg";
import styles from "../styles/Header.module.css";

import PropTypes from 'prop-types';

const Header = ({ funcBtn }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="/"><img src={logo} alt="ricocondee's logo" className="logo" /></a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">Services</a>
          </li>
          <li>
            <a href="#projects">Works</a>
          </li>
          <li>
            <a href="#education">Blog</a>
          </li>
        </ul>
      </nav>
      <div className={styles.menu}>
        <FaBars className={styles.menuIcon} />
      </div>
    </header>
  );
};

Header.propTypes = {
  funcBtn: PropTypes.func,
};

export default Header;
