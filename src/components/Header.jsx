import {FaBars} from "react-icons/fa";
import logo from "../assets/ricocondee.svg";

import PropTypes from 'prop-types';

const Header = ({ funcBtn }) => {
  return (
    <header>
      
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <a href="/"><img src={logo} alt="ricocondee's logo" className="logo" /></a>
          <li>
            <a href="#education">Courses</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
          <li>
            <button onClick={funcBtn}>
              View Resume
            </button>
          </li>
        </ul>
      </nav>
      <div className="menu">
        <FaBars className="menu_icon" />
      </div>
    </header>
  );
};

Header.propTypes = {
  funcBtn: PropTypes.func,
};

export default Header;
