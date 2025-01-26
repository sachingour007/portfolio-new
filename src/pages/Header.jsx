import { useState } from "react";
import { Link } from "react-router-dom";
import { linkedinIcon, githubIcon } from "../assets/images";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const hamburgerHandler = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  return (
    <header>
      <div className="headerWraper">
        <div className="headerMenu">
          <div className="logo-hamburger">
            <div className="logo" aria-label="Logo">
              <h2>SG</h2>
            </div>
            <button
              className={
                isHamburgerOpen
                  ? "hamburger-icon hamburger-active"
                  : "hamburger-icon"
              }
              aria-label="Hamburger-Icon"
              onClick={hamburgerHandler}
            >
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </button>
          </div>
        </div>
        <div
          className={isHamburgerOpen ? "nav-menu nav-menu-active" : "nav-menu"}
        >
          <div className="content-wrapper">
            <div className="links">
              <span>MENU</span>
              <ul>
                <li>HOME</li>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div className="persnal-details">
              <Link
                to="#"
                onClick={() =>
                  (window.location = "mailto:gour.sachin.sg@gmail.com")
                }
              >
                gour.sachin.sg@gmail.com
              </Link>
              <Link
                to="#"
                onClick={() => (window.location = "tel:+919413151007")}
              >
                +91 9413151007
              </Link>
              <ul className="social-icon">
                <li>
                  <img src={linkedinIcon} alt="linkedinIcon" />
                </li>
                <li>
                  <img src={githubIcon} alt="githubIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
