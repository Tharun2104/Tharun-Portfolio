import React, { useEffect } from "react";
import { Experience } from "../../components";
import "./ExperiencePage.scss";

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience-page">
      <div className="experience-content">
        <Experience />
       </div>
    </div>
  );
};

export default ExperiencePage;
