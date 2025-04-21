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
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="projectImgBox">
        <img src={featureImage} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
