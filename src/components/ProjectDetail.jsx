import React from "react";
import { closeIcon } from "../assets/images";

const ProjectDetail = ({ title, closeHandler, outsiderClose }) => {
  return (
    <div className="modalContainer" onClick={(e) => outsiderClose(e)}>
      <div className="mainBox">
        <div className="headBox">
          <h2>{title}</h2>
          <img src={closeIcon} alt="closeIcon" onClick={closeHandler} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
