import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectSection.css";
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
    <div className="project-section-wrapper">
      <motion.h1
        className="project-section-header"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Crafted with love.
      </motion.h1>
      <motion.p
        className="project-section-subheader"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        These are a selection of my recent works.
      </motion.p>
      <div className="projects-container">
        {projectData.map((project, index) => {
          return <ProjectCard {...project} index={index + 1} />;
        })}
      </div>
      <motion.p
        className="project-section-more"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        There's More
        <a href="https://github.com/AayushG02" target="_blank">
          View all projects <ArrowForwardOutlinedIcon fontSize="large"/>
        </a>
      </motion.p>
    </div>
  );
};

export default ProjectList;
