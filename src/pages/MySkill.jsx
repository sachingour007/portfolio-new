import React, { useState } from "react";
import SkillIcon from "../components/SkillIcon";
import { skillData } from "../utils/data";

const MySkill = () => {
  const [dataForSkill, useDataForSkill] = useState(skillData);
  return (
    <div className="skillWrapper">
      <h1>
        My <span className="orange-text">Skills</span>
      </h1>
      <div className="techSkillBox">
        {dataForSkill.map((el) => (
          <SkillIcon key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default MySkill;
