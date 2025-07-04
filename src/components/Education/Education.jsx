import React from "react";
import "./Education.scss";
import EducationSVG from "../../assets/images/education.svg"; 
import ublogo   from "../../assets/images/ub_logo.png"
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import vasaviLogo from "../../assets/images/vasavi_logo.gif";


const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science",
      field: "Computer Science & Engineering",
      institution: "University at Buffalo (UB)",
      location: "Buffalo, New York, USA",
      duration: "Jan 2024 - May 2025",
      description: [
        "⚡ Relevant coursework: Distributed Systems, Machine Learning, Deep Learning, Data Structures and Algorithms, Data Models and Query Languages",
        "⚡ Specialized in designing and implementing distributed systems and AI/ML projects, including scalable microservices and deep learning pipelines",
        "⚡ Graduate Teaching Assistant - 'EAS 460/560 Data Models and Query Language' and 'EAS 509LEC - Statistical Learning and Data Mining II' "

      ]
    },
    {
      id: 2,
      degree: "Bachelor of Engineering",
      field: "Electrical and Computer Engineering",
      institution: "Vasavi College of Engineering",
      location: "Hyderabad, India",
      duration: "2017 - 2021",
      description: [
        "⚡ Relevant coursework: Operating Systems, Computer Networks, Database Systems, Data Structures & Algorithms",
        "⚡ Built core skills in programming, object-oriented design, and software engineering principles through rigorous projects",
        "⚡ Achieved 3rd place in Smart India Hackathon for building a scalable problem solving web platform",
        "⚡ Served as Technical Lead for the college coding club, conducting workshops on DSA, Git workflows, and clean code practices"
      ]
    }
  ];

  return (
    <div className="app__education-container">
      <h2 className="app__education-title">Education</h2>
      
      <div className="app__education-content">
        <div className="app__education-timeline">
          {educationData.map((edu) => (
            <div className="app__education-card" key={edu.id} data-aos="fade-up" data-aos-duration="800">
              <div className="app__education-card_header">
              <div className="app__education-card_logo">
                  {edu.institution === "University at Buffalo (UB)" ? (
                    <img src={ublogo} alt="UB Logo" style={{ width: '60px', height: '60px' }} />
                  ) : edu.institution === "Vasavi College of Engineering" ? (
                    <img src={vasaviLogo} alt="Vasavi Logo" style={{ width: '60px', height: '60px' }} />
                  ) : (
                    <FaGraduationCap size={45} />
                  )}
                </div>
                <div className="app__education-card_info">
                  <h3>{edu.degree} in {edu.field}</h3>
                  <h4>{edu.institution}</h4>
                  <div className="app__education-card_meta">
                    <p><FaCalendarAlt /> {edu.duration}</p>
                    <p><FaMapMarkerAlt /> {edu.location}</p>
                  </div>
                </div>
              </div>
              <div className="app__education-card_body">
                <ul>
                  {edu.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="app__education-image">
          <img 
            src={EducationSVG} 
            alt="Education illustration" 
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
