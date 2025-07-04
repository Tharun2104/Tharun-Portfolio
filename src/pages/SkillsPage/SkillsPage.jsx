import React, { useEffect } from "react";
import { Skills } from "../../components";
import "./SkillsPage.scss";

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
        <Skills />

  );
};

export default SkillsPage;
