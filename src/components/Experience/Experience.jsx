// import React from "react";
// import "./Experience.scss";
// import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
// import MultiDevice from "../../assets/images/multi-device.svg";
// import LTIM from "../../assets/images/LTIMlogo.png";
// const Experience = () => {
//   const experiences = [
//     {
//       id: 1,
//       company: "Copani LLC",
//       position: "Software Development Engineer",
//       duration: "Jan 2024 - Present",
//       location: "New York, NY",
//       description: [
//         "⚡ Automated file fingerprinting by developing AWS Lambda functions triggered on S3 uploads that generated presigned URLs and invoked FastAPI endpoints, cutting manual processing time by 70%."
//       ]
//     },
//     {
//       id: 2,
//       company: "LTIMindtree",
//       position: "Software Engineer",
//       duration: "Dec 2022 - Jan 2024",
//       location: "Hyderabad, India",
//       description: [
//         "⚡ Engineered Spring Boot microservices for document ingestion using AWS Textract and RabbitMQ, boosting processing throughput by 10× during peak loads",
//         "⚡ Built Python based data pipelines with regex driven field extraction and validation, exposing REST APIs that reduced data errors by 90% and automated downstream workflows",
//         "⚡ Automated CI/CD workflows with Jenkins, Azure Git, and AWS CodeDeploy to deploy Dockerized microservices on EC2 with zero downtime, slashing deployment times by 60%"
//       ]
//     },
//     {
//       id: 3,
//       company: "Larsen & Toubro Infotech (LTI)",
//       position: "Software Engineer",
//       duration: "Dec 2020 - Dec 2022",
//       location: "Pune, India",
//       description: [
//         "⚡ Developed 6 full-stack modules using Spring Boot MVC and React.js, translating business requirements into user-centric interfaces and reducing rework cycles by 30%",
//         "⚡ Engineered and maintained 20+ RESTful APIs with OAuth2 and JWT for secure, role-based access, improving integration reliability across services",
//         "⚡ Optimized MySQL performance by restructuring schemas and implementing Hibernate-based caching, decreasing query latency by 35% during peak transactions",
//         "⚡ Established TDD workflows with JUnit, TestNG, Selenium, and REST Assured, increasing automated test coverage by 40% and cutting post-release defects by 25%"
//       ]
//     }
//   ];

//   return (
//     <div className="app__experience-container">
//       <h2 className="app__experience-title">Work Experience</h2>
      
//       <div className="app__experience-content">
//         <div className="app__experience-timeline">
//           {experiences.map((exp) => (
//             <div className="app__experience-card" key={exp.id} data-aos="fade-up" data-aos-duration="800">
//               <div className="app__experience-card_header">
//                 <div className="app__experience-card_logo">
//                     <img
//                       src={LTIM}
//                       alt="Company Logo"
//                       className="app__experience-card_logo-image"
//                     />
//                 </div>
//                 <div className="app__experience-card_info">
//                   <h3>{exp.position}</h3>
//                   <h4>{exp.company}</h4>
//                   <div className="app__experience-card_meta">
//                     <p><FaCalendarAlt /> {exp.duration}</p>
//                     <p><FaMapMarkerAlt /> {exp.location}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="app__experience-card_body">
//                 <ul>
//                   {exp.description.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="app__experience-image">
//           <img 
//             src={MultiDevice} 
//             alt="Multi-device compatibility" 
//             data-aos="fade-up"
//             data-aos-delay="300"
//             data-aos-duration="1000"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

// // export default Experience;
import React from "react";
import "./Experience.scss";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import MultiDevice from "../../assets/images/multi-device.svg";

// import one logo per company:
import CopaniLogo from "../../assets/images/copani-logo.png";
import LTIMLogo   from "../../assets/images/ltim-logo.png";
import LtiLogo    from "../../assets/images/lti-logo.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Copani LLC",
      logo: CopaniLogo,
      position: "Software Development Engineer",
      duration: "Jan 2024 - Present",
      location: "New York, NY",
      description: [
        "⚡ Automated file fingerprinting by developing AWS Lambda functions triggered on S3 uploads that generated presigned URLs and invoked FastAPI endpoints, cutting manual processing time by 70%."
      ]
    },
    {
      id: 2,
      company: "LTIMindtree",
      logo: LTIMLogo,
      position: "Software Engineer",
      duration: "Dec 2022 - Jan 2024",
      location: "Hyderabad, India",
      description: [
        "⚡ Engineered Spring Boot microservices for document ingestion using AWS Textract and RabbitMQ, boosting processing throughput by 10× during peak loads",
        "⚡ Built Python-based data pipelines with regex-driven field extraction and validation, exposing REST APIs that reduced data errors by 90% and automated downstream workflows",
        "⚡ Automated CI/CD workflows with Jenkins, Azure Git, and AWS CodeDeploy to deploy Dockerized microservices on EC2 with zero downtime, slashing deployment times by 60%"
      ]
    },
    {
      id: 3,
      company: "Larsen & Toubro Infotech (LTI)",
      logo: LtiLogo,
      position: "Software Engineer",
      duration: "Dec 2020 - Dec 2022",
      location: "Pune, India",
      description: [
        "⚡ Developed 6 full-stack modules using Spring Boot MVC and React.js, translating business requirements into user-centric interfaces and reducing rework cycles by 30%",
        "⚡ Engineered and maintained 20+ RESTful APIs with OAuth2 and JWT for secure, role-based access, improving integration reliability across services",
        "⚡ Optimized MySQL performance by restructuring schemas and implementing Hibernate-based caching, decreasing query latency by 35% during peak transactions",
        "⚡ Established TDD workflows with JUnit, TestNG, Selenium, and REST Assured, increasing automated test coverage by 40% and cutting post-release defects by 25%"
      ]
    }
  ];

  return (
    <div className="app__experience-container">
      <h2 className="app__experience-title">Work Experience</h2>

      <div className="app__experience-content">
        <div className="app__experience-timeline">
          {experiences.map((exp) => (
            <div
              className="app__experience-card"
              key={exp.id}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="app__experience-card_header">
                <div className="app__experience-card_logo">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="app__experience-card_logo-image"
                  />
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
                  {exp.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="app__experience-image">
          <img
            src={MultiDevice}
            alt="Multi-device compatibility"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;