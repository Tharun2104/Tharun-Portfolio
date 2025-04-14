import "aos/dist/aos.css";
import React from "react";
import HeroSvg from "../../assets/images/hero.svg";
import "./Hero.scss";

const Hero = () => {
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
          <p className="app__hero-title">Hi, my name is</p>
          <h1 className="app__hero-container_text-name">Tharun Teja Mogili</h1>
          <h2 className="app__hero-container_text-title">I enjoy creating things.</h2>
          <div className="app__hero-container_text-subtitle">
            <span>I am a Software Developer</span>
          </div>
        </div>
        <div className="app__hero-container_image">
          <img src={HeroSvg} alt="Hero illustration" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
