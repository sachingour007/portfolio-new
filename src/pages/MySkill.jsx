import React, { useState } from "react";
import SkillIcon from "../components/SkillIcon";
import { skillData } from "../utils/data";
import HeadingComponent from "../components/HeadingComponent";

const MySkill = () => {
  const [dataForSkill, useDataForSkill] = useState(skillData);
  return (
    <div className="skillWrapper">
      <HeadingComponent normalText="My" orangeText="Skills" />
      <div className="techSkillBox">
        {dataForSkill.map((el) => (
          <SkillIcon key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default MySkill;
