import React from "react";

const MySkills = ({ stackName, stackicon }) => {
  return (
    <div className="single-skill">
      <img src={stackicon} alt="" />
      <span>{stackName}</span>
    </div>
  );
};

export default MySkills;
