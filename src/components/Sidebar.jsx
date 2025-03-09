import React from "react";
import {
  HomeSvg,
  AboutUsSvg,
  ExpSvg,
  SepciSvg,
  SkillSvg,
  ProjectSVG,
  ContactSvg,
} from "../assets/svgComponent";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <nav>
        <ul className="navIcons">
          <li>
            <NavLink to={"/"}>
              <HomeSvg />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about-me"}>
              <AboutUsSvg />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/experience"}>
              <ExpSvg />
            </NavLink>
          </li>
          {/* <li>
            <NavLink to={"/specilization"}>
              <SepciSvg />
            </NavLink>
          </li> */}
          <li>
            <NavLink to={"/mySkills"}>
              <SkillSvg />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>
              <ProjectSVG />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact-me"}>
              <ContactSvg />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
