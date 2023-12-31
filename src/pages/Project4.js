import React from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Button left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
