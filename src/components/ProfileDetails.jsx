import React from "react";
import { profilePic } from "../assets/images";
import { socialIcons } from "../utils/data";

const ProfileDetails = () => {
  return (
    <div className="profileWrapper">
      <h1>
        <span className="orange-text">S</span>achin
      </h1>
      <div className="imgBox">
        <img src={profilePic} alt="ProfilePic" />
      </div>
      <div className="jobTxtBox">
        <h5>Based in Rajasthan</h5>
        <p>Frontend Developer</p>
      </div>
      <ul className="socials">
        {socialIcons.map(({ id, linkUrl, socialIcon, altProperty }) => {
          return (
            <li key={id}>
              <a href={linkUrl} target="_blank">
                <img src={socialIcon} alt={altProperty} />
              </a>
            </li>
          );
        })}
      </ul>
      <button className="btnHire">HIRE ME!</button>
    </div>
  );
};

export default ProfileDetails;
