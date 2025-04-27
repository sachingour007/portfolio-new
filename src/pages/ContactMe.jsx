import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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

  const formSubmitApi = async () => {
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formVal.name,
          email: formVal.email,
          message: formVal.message,
        },
        import.meta.env.VITE_PUBLICK_KEY
      );
      console.log(res);

      alert("Form is Submited Successfully !!");
      setFormVal({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("failed", error);
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();
    formSubmitApi();
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
            value={formVal.name}
            placeholder="Enter your Name"
            onChange={valHandler}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            value={formVal.email}
            onChange={valHandler}
          />
          <textarea
            id=""
            placeholder="Enter your massage"
            name="message"
            value={formVal.message}
            onChange={valHandler}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
