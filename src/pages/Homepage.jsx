import React from "react";
import HeadingComponent from "../components/HeadingComponent";

const Homepage = () => {
  return (
    <div className="homepageWrapper">
      <HeadingComponent normalText="Lets Work" orangeText="Together !" />
      <h1>
        Hi From <span className="orange-text">Sachin Gour</span>, <br />{" "}
        Front-End Developer
      </h1>
      <p>
        I derive immense joy from designing and coding beautiful, simple
        creations. My work is a true passion, characterized by a commitment to
        elegance and user-friendliness.
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
  );
};

export default Homepage;
