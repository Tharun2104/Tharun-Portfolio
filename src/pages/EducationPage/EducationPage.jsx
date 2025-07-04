import React, { useEffect } from "react";
import { Education } from "../../components";
import "./EducationPage.scss";

const EducationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Apply the same background as the projects page
    document.body.classList.add('education-bg');
    
    return () => {
      document.body.classList.remove('education-bg');
    };
  }, []);

  return (
    <div className="education-page">
      <div className="education-content">
        <Education />
      </div>
    </div>
  );
};

export default EducationPage;
