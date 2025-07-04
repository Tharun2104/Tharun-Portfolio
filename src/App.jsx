import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar, Earphone } from "./components";
import {
  HomePage,
  ExperiencePage,
  EducationPage,
  SkillsPage,
  ProjectsPage,
  ContactPage
} from "./pages";

const App = () => {
  //aos initialization
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Earphone />
    </Router>
  );
};

export default App;