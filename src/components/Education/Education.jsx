import React from "react";
import "./Education.scss";
import EducationSVG from "../../assets/images/education.svg"; 
import VasaviLogo from "../../assets/images/vasavi_logo.gif"; 
import UBLogo from "../../assets/images/ub_logo.png"; 
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science",
      field: "Data Science",
      institution: "University at Buffalo (UB)",
      location: "Buffalo, New York, USA",
      duration: "2022 - 2024",
      points: [
        "Specialized in Data Science and Machine Learning",
        "Graduate Research Assistant - AI Lab",
        "GPA: 3.92/4.0"
      ],
      logo: UBLogo,
      website: "https://www.buffalo.edu/"
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      field: "Electrical and Electronics Engineering",
      institution: "Vasavi College of Engineering",
      location: "Hyderabad, India",
      duration: "2018 - 2022",
      points: [
        "3rd place in Smart India Hackathon",
        "Technical Lead of College Coding Club",
        "GPA: 3.6/4.0"
      ],
      logo: VasaviLogo,
      website: "https://www.vce.ac.in/"
    }
  ];

  return (
    <section className="app__education" id="education">
      <div className="app__education-container">
        <h2 className="app__education-title">Education</h2>

        <div className="app__education-content">
          <div className="app__education-cards">
            {educationData.map((item) => (
              <div className="app__education-card" key={item.id}>
                <div className="app__education-card_header">
                  <img src={item.logo} alt={`${item.institution} Logo`} />
                  <h3>{item.degree} in {item.field}</h3>
                </div>

                <div className="app__education-card_body">
                  <div className="app__education-card_info">
                    <div className="info-item">
                      <FaUniversity />
                      <h4>{item.institution}</h4>
                    </div>
                    <div className="info-item-row">
                      <div className="info-item">
                        <FaMapMarkerAlt />
                        <p>{item.location}</p>
                      </div>
                      <div className="info-item">
                        <FaCalendarAlt />
                        <p>{item.duration}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="app__education-card_points">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>

                  <div className="app__education-card_button">
                    <a href={item.website} target="_blank" rel="noopener noreferrer">Visit Site</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="app__education-image">
            <img src={EducationSVG} alt="Education Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
