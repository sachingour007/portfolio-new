import React from "react";
import HeadingComponent from "../components/HeadingComponent";

const Aboutus = () => {
  return (
    <div className="aboutUsWrapper">
      <HeadingComponent normalText="About" orangeText="Me" />
      <div className="scrollEffect">
        <h2>
          I'm passionate about crafting responsive and efficient user interfaces
          using
          <span className="orange-text"> code</span>
        </h2>
        <p>
          a passionate Front-End Developer who enjoys turning complex problems
          into clean, functional web applications. With a strong foundation in
          JavaScript, HTML, and CSS, and hands-on experience in React.js, I
          strive to build responsive, accessible, and performance-driven user
          interfaces. I'm currently expanding my skills into full-stack
          development with the MERN stack, and I'm actively
          learning backend technologies like Node.js, Express, and MongoDB. For
          me, writing efficient, readable code is more than a skill — it's
          something I truly enjoy. I take pride in crafting scalable and
          maintainable front-end solutions that contribute to better user
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
