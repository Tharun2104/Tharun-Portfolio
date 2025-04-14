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
            Hello! My name is Tharun and I am a software developer with a passion
            for creating efficient and innovative solutions. With a strong
            foundation in computer science and expertise in various programming languages,
            I am able to develop applications that solve real-world problems and provide
            excellent user experiences.
          </p>

          <p>
            I spend my time exploring new technologies and frameworks,
            consistently learning new concepts and tools while
            building projects to apply what I've learned.
          </p>

          <p>
            I'm currently working as a Software Developer at{" "}
            <a
              href="https://example.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="app__links"
            >
              Tech Company
            </a>
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
