import React, { useState } from "react";
import HeadingComponent from "../components/HeadingComponent";

const ContactMe = () => {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    message: "",
  });

  const valHandler = (e) => {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contactUsWrapper">
      <HeadingComponent normalText="Contact" orangeText="Me" />
      <h2>Let's get in touch!</h2>
      <div className="formBox">
        <form onSubmit={formSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={valHandler}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            onChange={valHandler}
          />
          <textarea
            id=""
            placeholder="Enter your massage"
            name="message"
            onChange={valHandler}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
