import "aos/dist/aos.css";
import React from "react";
import HeroSvg from "../../assets/images/hero.svg";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaCircle, FaChevronDown } from "react-icons/fa";
import Resume from "../../assets/Resume/TharunResume.pdf";
import "./Hero.scss";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.experience-page') || document.querySelector('section:nth-child(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__hero-container">
        <div className="app__hero-container_text">
          <p className="app__hero-title">Hello World!!</p>
          <h1 className="app__hero-container_text-name">Tharun Teja Mogili</h1>
          <h2 className="app__hero-container_text-title">Software Engineer • Backend Enthusiast</h2>
          {/* <div className="app__hero-container_text-subtitle">
            <span>I enjoy creating things that make life easier.</span>
          </div> */}
          
          <p className="app__hero-bio">
            {/* Passionate about building elegant solutions to complex problems with a strong focus on user experience and clean code. */}
            Passionate about designing and optimizing high-throughput, fault-tolerant systems that drive real-world applications.
          </p>
          
          <div className="app__hero-action-buttons">
            <div className="app__hero-open-to-work">
              <FaCircle className="status-icon" />
              <span>Open to Work</span>
            </div>
            
            <a 
              href={Resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button"
            >
              <FaFileAlt />
              <span>View Resume</span>
            </a>
          </div>
          
          <div className="app__hero-social-buttons">
            <a 
              href="https://github.com/Tharun2104" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button github"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/tharuntejamogili/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="/contact" 
              className="social-button contact"
            >
              <FaEnvelope />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        <div className="app__hero-container_image">
          <img src={HeroSvg} alt="Hero illustration" />
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <span>About</span>
        <FaChevronDown />
      </div>
    </main>
  );
};

export default Hero;