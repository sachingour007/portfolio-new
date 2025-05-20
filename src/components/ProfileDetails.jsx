import React from "react";
import { Link } from "react-router-dom";
import { profilePic } from "../assets/images";
import { SocialIcons } from "../utils/SocialIcons.jsx";
console.log(SocialIcons);

const ProfileDetails = () => {
  return (
    <div className="profileWrapper">
      <div className="imgBox">
        <img src={profilePic} alt="ProfilePic" />
      </div>
      <div className="detailsBox">
        <h1 className="mainName">
          <span className="orange-text">S</span>achin
        </h1>
        <div className="jobTxtBox">
          <p>Frontend Developer</p>
          <h5>Based in Rajasthan</h5>
        </div>
        <ul className="socials">
          {SocialIcons.map(({ id, linkUrl, socialIcon, altProperty }) => {
            return (
              <li key={id}>
                <a href={linkUrl} target="_blank">
                  {socialIcon}
                </a>
              </li>
            );
          })}
        </ul>
        <Link to={"/contact-me"}>
          <button className="btnHire">HIRE ME!</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;
