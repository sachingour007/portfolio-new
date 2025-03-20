import React, { useState } from "react";
import SwiperJsSlider from "../components/SwiperJsSlider";
import { projectData } from "../utils/data";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const [pData, setPData] = useState(projectData);
  console.log(pData);

  return (
    <div className="projectWrapper">
      <h1>
        Featured <span className="orange-text">Projects</span>
      </h1>
      <div className="swiperContainer">
        <SwiperJsSlider
          projectItem={pData.map((el) => (
            <ProjectCard key={el.id} {...el} />
          ))}
        />
      </div>
    </div>
  );
};

export default Projects;
