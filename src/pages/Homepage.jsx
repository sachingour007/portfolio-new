import React from "react";
import HeadingComponent from "../components/HeadingComponent";

const Homepage = () => {
  return (
    <div className="homepageWrapper">
      <HeadingComponent normalText="Lets Work" orangeText="Together !" />
      <div className="scrollEffect">
        <h2>
          Hi From <span className="orange-text">Sachin Gour</span>, Front-End
          Developer
        </h2>
        <p>
          passionate about creating elegant, user-centric web experiences using modern technologies like React.js and JavaScript. Let’s collaborate to build something impactful.
        </p>
        <div className="projectDetails">
          <ul>
            <li>
              <h3 className="orange-text">1.5+</h3>
              <p>Years of Experience</p>
            </li>
            <li>
              <h3 className="orange-text">5+</h3>
              <p>Projects Completed</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
