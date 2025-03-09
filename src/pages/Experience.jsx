import React, { useState } from "react";
import { ExperienceData } from "../utils/data";

const Experience = () => {
  const [expData, setExpData] = useState(ExperienceData);
  return (
    <div className="expWrapper">
      <h1>
        Education & <span className="orange-text">Experience</span>
      </h1>
      <div className="expDetails">
        {expData.map(
          ({
            id,
            startYear,
            endYear,
            JobProfile,
            companyName,
            education,
            institute,
          }) => (
            <div className="innerBox" key={id}>
              <h2 className={id === 1 ? "orange-text" : ""}>
                {startYear} - {endYear ? endYear : "Present"}
              </h2>
              <div className="detailBox">
                <h5>{JobProfile ? JobProfile : education}</h5>
                <p>{companyName ? companyName : institute}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
