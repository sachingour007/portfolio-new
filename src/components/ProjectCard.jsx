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
    <div className="cardBox">
      <div className="projectImgBox">
        <img src={featureImage} alt="" />
      </div>
      <div className="textlayout">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={modalHandler}>View Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
