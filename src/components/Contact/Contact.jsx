import React from "react";
import Connection from "../../assets/images/connections.svg";
import ProfilePic from "../../assets/images/profile-pic.png";
import mail from "../../assets/images/socials/mail.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import GitHub from "../../assets/images/socials/github.png";
import  Resume from "../../assets/Resume/TharunResume.pdf"
import { FaFileAlt } from 'react-icons/fa'; // Import resume icon
import "./Contact.scss";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <div className="app__contact-profile-pic">
            <img src={ProfilePic} alt="Tharun Teja Mogili" />
          </div>
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          
          <p className="contact-description">
            For all inquiries, you can contact me on any of the platforms below.
          </p>
          
          {/* Social icons */}
          <div className="app__contact-social-icons">
            <a href="mailto:tharun.mogili2025@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <img src={mail} alt="Email" />
            </a>
            <a href="https://github.com/Tharun2104" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tharuntejamogili/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="resume-button"
              >
                <FaFileAlt style={{ marginRight: "0.5rem" }} />
                Resume
              </a>

          </div>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Connections" />
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="app__contact-copyright">
        <p>© {currentYear} Tharun Teja Mogili. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
