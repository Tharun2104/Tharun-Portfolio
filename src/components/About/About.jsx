import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
          Hi, I’m Tharun Teja Mogili, a Full-Stack Software Engineer with 3+ years of experience 
          designing and developing scalable web applications using Java Spring Boot, 
          React.js and cloud-native services on AWS and Azure.
          </p>
          <br></br>
          <p>
          I specialize in designing and developing microservices and RESTful APIs backed by optimized database schemas. I collaborate with cross-functional teams to implement automated testing and CI/CD pipelines, ensuring reliable, scalable deployments.
          </p>
          <br></br>

          <p>
          I recently graduated with an MS in Computer Science & Engineering from the University at Buffalo (GPA 4.0) in May 2025 and am seeking SDE/SWE roles. I’m passionate about open-source contributions, learning new technologies, and solving real-world challenges.
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;

// export default About;
