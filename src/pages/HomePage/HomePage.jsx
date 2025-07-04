import React, { useEffect } from "react";
import { Hero, About } from "../../components";
import "./HomePage.scss";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

      <><Hero /><About /></>

  );
};

export default HomePage;
