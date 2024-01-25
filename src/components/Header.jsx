import { useRef} from "react";
import logo from "../assets/ricocondeeLogo.svg";

const Header = () => {
 /*  const checkRef = useRef(null);
  const checkBtnRef = useRef(null);

  // Accessing properties of the elements
  const isChecked = checkRef.current.checked;
  const myClassList = checkBtnRef.current.classList;

  const handleChangeIcon = () => {
    if (isChecked) {
      myClassList.remove("fa-sun");
      myClassList.add("fa-moon");
    } else {
      myClassList.remove("fa-moon");
      myClassList.add("fa-sun");
    }
  }; */
  return (
    <header>
      <img
        src={logo}
        alt="ricocondee's logo"
        className="logo"
      />
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>Projects</li>
          <li>Courses</li>
          <li>Contact me</li>
          <li>
            <button>
              Download Resume <i className="fa-solid fa-file-arrow-down"></i>
            </button>
          </li>
        </ul>
      </nav>
      <div className="theme">
        <label htmlFor="scheme">
          <i className="fa-solid fa-sun" id="schemeButton"></i>
        </label>
        <input type="checkbox" id="scheme"/>
      </div>
      <div className="muenu">
        <i className="ti ti-menu"></i>
      </div>
    </header>
  );
};

export default Header;
