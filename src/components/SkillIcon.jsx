import React, { useState } from "react";

const SkillIcon = ({ id, stackName, percent, stackIcon }) => {
  return (
    <div className="iconBox">
      <div className={`imgBox`}>
        <img src={stackIcon} alt="stackIcon" />
      </div>
      <p>{stackName}</p>
    </div>
  );
};

export default SkillIcon;
