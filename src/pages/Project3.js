import React from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <Button left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};

export default Project3;
