import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Menu = () => {
  const location = useLocation();
  
  return (
    <>
      <li className={location.pathname === "/" ? "active" : ""}>
        <Link to="/">Home</Link>
      </li>
      <li className={location.pathname === "/education" ? "active" : ""}>
        <Link to="/education">Education</Link>
      </li>
      <li className={location.pathname === "/experience" ? "active" : ""}>
        <Link to="/experience">Experience</Link>
      </li>
      
      <li className={location.pathname === "/skills" ? "active" : ""}>
        <Link to="/skills">Skills</Link>
      </li>
      <li className={location.pathname === "/projects" ? "active" : ""}>
        <Link to="/projects">Projects</Link>
      </li>
      <li className={location.pathname === "/contact" ? "active" : ""}>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const mobileNav = useRef(null);

  // Determine navbar class based on current route
  const getNavbarClass = () => {
    let navClass = 'app__navbar';
    
    if (scrolled) {
      navClass += ' scrolled';
    }
    
    // Add page-specific classes
    if (location.pathname === '/') {
      navClass += ' home-nav';
    } else if (location.pathname === '/education') {
      navClass += ' education-nav';
    } else if (location.pathname === '/experience') {
      navClass += ' experience-nav';
    } else if (location.pathname === '/skills') {
      navClass += ' skills-nav';
    } else if (location.pathname === '/projects') {
      navClass += ' projects-nav';
    } else if (location.pathname === '/contact') {
      navClass += ' contact-nav';
    }
    
    return navClass;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    /**
     * Perform if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (mobileNav.current && !mobileNav.current.contains(event.target)) {
        setShowMobileNav(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNav]);

  return (
    <nav className={getNavbarClass()}>
      <div className="app__navbar-container">
        <div className="app__navbar-container_logo">
          <Link to="/" className="logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Thrun</span>
            <span className="logo-bracket">&gt;</span>
          </Link>
        </div>
        <ul className="app__navbar-container_navlinks">
          <Menu />
        </ul>
        <div className="app__navbar-container_icons">
          {showMobileNav ? (
            <CloseIcon
              className="icon"
              onClick={() => setShowMobileNav(!showMobileNav)}
            />
          ) : (
            <MenuIcon
              className="icon"
              onClick={() => setShowMobileNav(!showMobileNav)}
            />
          )}
        </div>
        <ul
          ref={mobileNav}
          className={
            showMobileNav
              ? "app__navbar-container_mobilelinks show"
              : "app__navbar-container_mobilelinks"
          }
        >
          <Menu />
          <div className="app__navbar-container_mobilelinks-socials">
            <a href="https://linkedin.com/in/tharuntejamogili" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Tharun2104" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;