import React from "react";
import SwiperJsSlider from "../components/SwiperJsSlider";

const Projects = () => {
  return (
    <div className="projectWrapper">
      <h1>
        Featured <span className="orange-text">Projects</span>
      </h1>
      <div className="swiperContainer">
        <SwiperJsSlider />
      </div>
    </div>
  );
};

export default Projects;
