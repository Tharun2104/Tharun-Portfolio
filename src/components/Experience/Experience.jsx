import React from "react";
import "./Experience.scss";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import MultiDevice from "../../assets/images/multi-device.svg";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Company",
      position: "Software Developer",
      duration: "Jan 2023 - Present",
      location: "San Francisco, CA",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to implement new features",
        "Optimized application performance resulting in 30% faster load times",
        "Implemented responsive design principles ensuring compatibility across devices"
      ]
    },
    {
      id: 2,
      company: "Startup Inc.",
      position: "Frontend Developer",
      duration: "May 2022 - Dec 2022",
      location: "Remote",
      description: [
        "Built interactive UI components using React and Redux",
        "Participated in code reviews and implemented feedback",
        "Assisted in migrating legacy code to modern frameworks",
        "Created and maintained documentation for frontend systems"
      ]
    }
  ];

  return (
    <section
      className="app__experience"
      id="experience"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__experience-container">
        <h2 className="app__experience-title">Work Experience</h2>
        
        <div className="app__experience-content">
          <div className="app__experience-timeline">
            {experiences.map((exp) => (
              <div className="app__experience-card" key={exp.id}>
                <div className="app__experience-card_header">
                  <div className="app__experience-card_logo">
                    <FaBriefcase size={40} color="#0077b6" />
                  </div>
                  <div className="app__experience-card_info">
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <div className="app__experience-card_meta">
                      <p><FaCalendarAlt /> {exp.duration}</p>
                      <p><FaMapMarkerAlt /> {exp.location}</p>
                    </div>
                  </div>
                </div>
                <div className="app__experience-card_body">
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          <div className="app__experience-image">
            <img 
              src={MultiDevice} 
              alt="Multi-device compatibility" 
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            />
          </div>
          </div>
          
          {/* <div className="app__experience-image">
            <img 
              src={MultiDevice} 
              alt="Multi-device compatibility" 
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// export default Experience;
