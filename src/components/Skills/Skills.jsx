import React, { useState } from "react";
import skills from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Consolidate skills into fewer, more focused categories
  const skillCategories = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Redux", "TailwindCSS", "Next.js"],
    "Backend": ["Node.js", "Express.js", "Java", "Spring Boot", "PHP", "REST API"],
    "Database & Tools": ["MongoDB", "MYSQL", "PostgreSQL", "Firebase", "AWS", "Docker", "GraphQL", "TypeScript"],
    "DevOps": ["Git", "Github", "CI/CD", "Jest", "Cypress"]
  };

  // Get all skills for "All" category
  const allSkills = Object.values(skillCategories).flat();

  // Create categorized skills array
  const getSkillsToDisplay = () => {
    if (activeCategory === "All") {
      return skills.filter(skill => allSkills.includes(skill.text));
    }
    return skills.filter(skill => 
      skillCategories[activeCategory]?.includes(skill.text)
    );
  };

  return (
    <section
      className="app__skills"
      id="skills"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__skills-title">
        <h2 className="app__skills-title_title">Skills</h2>
        
        <p className="app__skills-title_content">
          Full-stack developer with expertise in modern web technologies and Java enterprise solutions.
        </p>
      </div>

      <div className="app__skills-container">
        <div className="app__skills-tabs">
          <button 
            className={`app__skills-tab ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`app__skills-tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="app__skills-container_skills"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="app__skills-grid">
            {getSkillsToDisplay().map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;