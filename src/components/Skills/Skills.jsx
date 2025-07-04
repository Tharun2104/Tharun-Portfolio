import React, { useState } from "react";
import skills from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Consolidate skills into fewer, more focused categories
  const skillCategories = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Redux", "TailwindCSS", "Next.js", "TypeScript"],
    "Backend": ["Node.js", "Express.js", "Java", "Spring Boot", "PHP", "REST API"],
    "Database & Tools": ["MongoDB", "MYSQL", "PostgreSQL", "Firebase"],
    "DevOps & Misc": ["Git", "Github", "CI/CD", "Jest", "Docker", "AWS", "GraphQL"]
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

// import React, { useState } from "react";
// import skills from "./imports";
// import "./Skills.scss";
// import SkillsCard from "./SkillsCard";

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   // icon lookup table
//   const skillIcons = {
//     Frontend: [
//       { name: "HTML", src: "https://cdn.simpleicons.org/html5/EA4335" },
//       { name: "CSS", src: "https://cdn.simpleicons.org/css3/1572B6" },
//       { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
//       { name: "React.js", src: "https://cdn.simpleicons.org/react/61DAFB" },
//       { name: "Redux", src: "https://cdn.simpleicons.org/redux/764ABC" },
//       { name: "TailwindCSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
//       { name: "Next.js", src: "https://cdn.simpleicons.org/next.js/000000" },
//     ],
//     Backend: [
//       { name: "Node.js", src: "https://cdn.simpleicons.org/node.js/339933" },
//       { name: "Express.js", src: "https://cdn.simpleicons.org/express/000000" },
//       { name: "Java", src: "https://cdn.simpleicons.org/java/007396" },
//       { name: "Spring Boot", src: "https://cdn.simpleicons.org/springboot/6DB33F" },
//       { name: "PHP", src: "https://cdn.simpleicons.org/php/777BB4" },
//       { name: "REST API", src: "https://cdn.simpleicons.org/api/000000" },
//     ],
//     "Database & Tools": [
//       { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248" },
//       { name: "MySQL", src: "https://cdn.simpleicons.org/mysql/4479A1" },
//       { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/336791" },
//       { name: "Firebase", src: "https://cdn.simpleicons.org/firebase/FFCA28" },
//       { name: "AWS", src: "https://cdn.simpleicons.org/amazonaws/FF9900" },
//       { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ED" },
//       { name: "GraphQL", src: "https://cdn.simpleicons.org/graphql/E10098" },
//       { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
//     ],
//     DevOps: [
//       { name: "Git", src: "https://cdn.simpleicons.org/git/F05032" },
//       { name: "GitHub", src: "https://cdn.simpleicons.org/github/181717" },
//       { name: "CI/CD", src: "https://cdn.simpleicons.org/circleci/343434" },
//       { name: "Jest", src: "https://cdn.simpleicons.org/jest/C21325" },
//       { name: "Cypress", src: "https://cdn.simpleicons.org/cypress/17202C" },
//     ],
//   };

//   // flatten names & icons
//   const allIcons = Object.values(skillIcons).flat();
//   const allSkillNames = allIcons.map((i) => i.name);

//   function getSkillsToDisplay() {
//     // pick names for this category
//     const names =
//       activeCategory === "All"
//         ? allSkillNames
//         : skillIcons[activeCategory].map((i) => i.name);

//     // filter and attach matching icon URL
//     return skills
//       .filter((skill) => names.includes(skill.text))
//       .map((skill) => {
//         const iconEntry = allIcons.find((i) => i.name === skill.text);
//         return {
//           ...skill,
//           icon: iconEntry ? iconEntry.src : skill.icon,
//         };
//       });
//   }

//   return (
//     <section className="app__skills" id="skills">
//       <div className="app__skills-title">
//         <h2 className="app__skills-title_title">Skills</h2>
//         <p className="app__skills-title_content">
//           Full-stack developer with expertise in modern web technologies and Java
//           enterprise solutions.
//         </p>
//       </div>

//       <div className="app__skills-container">
//         <div className="app__skills-tabs">
//           <button
//             className={`app__skills-tab ${
//               activeCategory === "All" ? "active" : ""
//             }`}
//             onClick={() => setActiveCategory("All")}
//           >
//             All
//           </button>
//           {Object.keys(skillIcons).map((category) => (
//             <button
//               key={category}
//               className={`app__skills-tab ${
//                 activeCategory === category ? "active" : ""
//               }`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="app__skills-container_skills">
//           <div className="app__skills-grid">
//             {getSkillsToDisplay().map((skill, idx) => (
//               <SkillsCard key={idx} skill={skill} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;