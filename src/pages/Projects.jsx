import React, { useState } from "react";
import SwiperJsSlider from "../components/SwiperJsSlider";
import { projectData } from "../utils/data";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectDetail from "../components/ProjectDetail.jsx";

const Projects = () => {
  const [pData, setPData] = useState(projectData);
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState();

  const modalHandler = (singleProject) => {
    setModalData(singleProject);
    setIsModal(!isModal);
  };
  const closeHandler = () => {
    setIsModal(false);
  };
  const outsiderClose = (e) => {
    if (e.target.classList.contains("modalContainer")) {
      setIsModal(false);
    }
  };

  return (
    <div className="projectWrapper">
      <h1>
        Featured <span className="orange-text">Projects</span>
      </h1>
      <div className="swiperContainer">
        <SwiperJsSlider
          projectItem={pData.map((el) => (
            <ProjectCard
              key={el.id}
              {...el}
              modalHandler={() => modalHandler(el)}
            />
          ))}
        />
      </div>
      {isModal ? (
        <ProjectDetail
          {...modalData}
          closeHandler={closeHandler}
          outsiderClose={outsiderClose}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
