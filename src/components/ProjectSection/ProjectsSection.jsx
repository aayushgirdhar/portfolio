import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectSection.css";
const ProjectList = () => {
  const projectData = [
    {
      title: "LuxeThreads",
      subTitle: "E-commerce Store",
      stack: "MERN, JWT, Stripe, Cloudinary",
      url: "https://luxethreads.vercel.app",
    },
    {
      title: "Workout Buddy",
      subTitle: "Workout Tracker",
      stack: "MERN, JWT",
      url: "https://workoutbuddyapp.netlify.app",
    },
    {
      title: "Keepr",
      subTitle: "Note Taking App",
      stack: "ReactJS",
      url: "https://keeprapp.netlify.app",
    },
  ];

  return (
    <div className="project-section-wrapper" id="projects">
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
          return <ProjectCard {...project} key={index} index={index + 1} />;
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
        <a href="https://github.com/aayushgirdhar" target="_blank">
          View all projects <ArrowForwardOutlinedIcon fontSize="large" />
        </a>
      </motion.p>
    </div>
  );
};

export default ProjectList;
