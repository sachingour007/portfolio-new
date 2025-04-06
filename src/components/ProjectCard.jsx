import React from "react";
const ProjectCard = ({
  id,
  title,
  featureImage,
  liveLink,
  startDate,
  endDate,
  description,
  techStack,
  features,
  modalHandler,
}) => {
  return (
    <div className="cardBox" onClick={modalHandler}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="projectImgBox">
        <img src={featureImage} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
