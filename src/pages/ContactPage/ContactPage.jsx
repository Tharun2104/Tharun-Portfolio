import React, { useEffect } from "react";
import { Contact } from "../../components";
import "./ContactPage.scss";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <div className="contact-page">
    //   <h1 className="page-title">Get In Touch</h1>
    //   <div className="contact-content">
        <Contact />
    //   </div>
    // </div>
  );
};

export default ContactPage;
