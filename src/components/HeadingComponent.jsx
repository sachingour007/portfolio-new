import React from "react";

const HeadingComponent = ({ normalText, orangeText }) => {
  return (
    <>
      <h2>
        {normalText} <span className="orange-text">{orangeText}</span>
      </h2>
    </>
  );
};

export default HeadingComponent;
