import React from "react";
import { mySkills } from "../utils/myskill";
import MySkills from "../components/MySkills";

const Homepage = () => {
  return (
    <>
      <section className="bannerSec">
        <div className="wrapperSec">
          <div className="bannerHeading">
            <h1>Sachin Gour</h1>
            <p>Web-developer</p>
          </div>
        </div>
      </section>
      <section className="aboutUsSec">
        <div className="wrapperSec">
          <div className="secAboutContent">
            <h2>About me</h2>
            <p>
              I am Sachin Gour, a dedicated web developer with expertise in
              JavaScript, HTML, CSS. I specialize in building web applications
              using React.js and am committed to continuous learning and project
              implementation. Aspiring to commence my career as an software
              engineer with a technology-driven company of repute.
            </p>
          </div>
          <div className="secMySkillContent">
            <h2>My Skills</h2>
            <div className="skillBox">
              {mySkills.map((el) => (
                <MySkills key={el.id} {...el} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
