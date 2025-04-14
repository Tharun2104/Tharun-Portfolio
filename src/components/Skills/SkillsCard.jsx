import React from "react";

const SkillsCard = ({ skill }) => {
  // Handle placeholder skills that don't have images yet
  if (skill.isPlaceholder) {
    return (
      <div className="app__skills-container_skills-card app__skills-container_skills-card--placeholder">
        <div className="app__skills-container_skills-card_placeholder">
          {skill.text.charAt(0).toUpperCase()}
        </div>
        <p className="app__skills-container_skills-card_text">{skill.text}</p>
      </div>
    );
  }
  
  return (
    <div className="app__skills-container_skills-card">
      <img src={skill.image} alt={skill.text} />
      <p className="app__skills-container_skills-card_text">{skill.text}</p>
    </div>
  );
};

export default SkillsCard;
