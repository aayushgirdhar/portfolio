import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectSection.css"
const ProjectList = () => {
  const projectData = [
    {
      title: "Workout Buddy",
      subTitle: "Workout Tracker",
      stack: "MERN, JWT",
    },
    {
      title: "LuxeThreads",
      subTitle: "E-commerce Store",
      stack: "MERN, Strapi CMS, Stripe",
    },
    {
      title: "Keepr",
      subTitle: "Note Taking App",
      stack: "ReactJS",
    },
  ];

  return (
    <div className="project-ProjectSection" >
      {projectData.map((project) => {
        return <ProjectCard {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
