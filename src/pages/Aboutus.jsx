import React from "react";
import HeadingComponent from "../components/HeadingComponent";

const Aboutus = () => {
  return (
    <div className="aboutUsWrapper">
      <HeadingComponent normalText="About" orangeText="Me" />
      <div className="scrollEffect">
        <h2>
          I'm someone who finds profound joy in the art of design and{" "}
          <span className="orange-text">coding</span>
        </h2>
        <p>
          With an unwavering passion for crafting beautiful and simple
          creations, I pour my heart into every project I undertake. My work is
          a reflection of my dedication to merging aesthetics with user-centered
          functionality. With each design and code, I aim to create solutions
          that not only look pleasing but also make life easier for users.
          Welcome to my world of elegant simplicity, where every line of code
          and every pixel hold the essence of my love for what I do.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
