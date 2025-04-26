import React from "react";

const HeadingComponent = ({ normalText, orangeText }) => {
  return (
    <>
      <h1 className="customHeading">
        {normalText} <span className="orange-text">{orangeText}</span>
      </h1>
    </>
  );
};

export default HeadingComponent;
