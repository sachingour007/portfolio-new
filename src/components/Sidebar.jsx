import React from "react";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <nav>
        <ul className="navIcons">
          <li>
            <NavLink to={"/"}>
              <HomeRoundedIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about-me"}>
              <PersonOutlineOutlinedIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/experience"}>
              <SchoolOutlinedIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/mySkills"}>
              <IntegrationInstructionsOutlinedIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>
              <WorkOutlineOutlinedIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact-me"}>
              <MailOutlineOutlinedIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
