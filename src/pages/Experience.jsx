import React, { useState } from "react";
import { ExperienceData } from "../utils/data";
import HeadingComponent from "../components/HeadingComponent";

const Experience = () => {
  const [expData, setExpData] = useState(ExperienceData);
  return (
    <div className="expWrapper">
      <HeadingComponent normalText="Education &" orangeText="Experience" />
      <div className="expDetails scrollEffect">
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
              <h3 className={id === 1 ? "orange-text" : ""}>
                {startYear} - {endYear ? endYear : "Present"}
              </h3>
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
