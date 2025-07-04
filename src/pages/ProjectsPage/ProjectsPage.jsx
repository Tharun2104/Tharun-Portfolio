import React, { useEffect } from "react";
import { Projects } from "../../components";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
        <Projects />
  );
};

export default ProjectsPage;
