import { closeIcon } from "../assets/images";

const ProjectDetail = ({
  title,
  closeHandler,
  outsiderClose,
  startDate,
  endDate,
  description,
  liveLink,
  features,
  techStack,
}) => {
  return (
    <div className="modalContainer" onClick={(e) => outsiderClose(e)}>
      <div className="mainBox">
        <img src={closeIcon} alt="closeIcon" onClick={closeHandler} />
        <div className="headBox">
          <h2>
            {title}{" "}
            <a href={liveLink} target="_blank">
              [LINK]
            </a>
          </h2>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
        <p className="description">{description}</p>
        <div className="feautres">
          <ul>
            {features.map((feautre) => (
              <li key={features.heading}>
                <p className="heading">{feautre.heading}:</p>
                <p className="details">{feautre.details}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="techstacks">
          <p>TechStack: </p>
          <ul>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
