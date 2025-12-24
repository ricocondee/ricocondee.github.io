import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/meLogo.svg";
import styles from "../styles/Header.module.css";
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext"; // Corrected import path

const Header = () => {
  const { handleModal } = useModal(); // Get handleModal from context
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home and pass the target ID
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <img src={logo} alt="ricocondee's logo" className="logo" />
        </a>
      </div>
      
      {/* Desktop Nav */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navMobileOpen : ""}`}>
        <ul>
          <li>
            <a href="/#services" onClick={(e) => handleNavigation(e, 'services')}>Services</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')}>Works</a>
          </li>
          <li>
            <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
          </li>
          <li>
            <button className={styles.resumeBtn} onClick={() => { handleModal('resume'); setMenuOpen(false); }}> {/* Use handleModal with 'resume' */}
              Resume
            </button>
          </li>
          {/* Mobile Close Button inside the nav container */}
          <div className={styles.closeIcon} onClick={handleMenu}>
             <FaTimes />
          </div>
        </ul>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.menu} onClick={handleMenu}>
        <FaBars className={styles.menuIcon} />
      </div>
    </header>
  );
};

export default Header;
