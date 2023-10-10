import React from "react";
import hi from "../../assets/hi.webp";
import { motion } from "framer-motion";
import "./Hero.css";
import CustomButton from "../CustomButton/CustomButton";

const Hero = () => {
  return (
    <>
      <motion.div
        className="hero-background-circle"
        initial={{ opacity: 0.01, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.3, stiffness: 200 }}
      ></motion.div>

      {/* <div className="hero-background-cross"></div> */}
      {/* <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: "Spring", duration: 0.3 }}
        className="location"
      >
        <p>Located in India</p>
      </motion.div> */}

      <div className="hero-section">
        <div className="hero-left">
          <motion.h1
            className="hero-header"
            initial={{ opacity: 0.01, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }} // Animation duration
          >
            <span className="hero-hi">Hi! I am Aayush Girdhar, a</span>
            <span className="hero-role"> Full-stack Developer</span>.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }} // Animation duration
          >
            <CustomButton text="See my works" size="large"/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.2 }} // Animation duration
          >
            <div className="social-links">
              <a href="https://linkedin.com/in/aayushgirdhar" target="_blank">
                <div className="social-item">LinkedIn</div>
              </a>
              <div>/</div>
              <a href="https://github.com/AayushG02" target="_blank">
                <div className="social-item">GitHub</div>
              </a>
              <div>/</div>
              <a
                href="https://drive.google.com/file/d/1UEgRjk1GtQp9Wtb63qAuMvGuyemRbq0p/view?usp=sharing"
                target="_blank"
              >
                <div className="social-item">My Resume</div>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="hero-right">
          <motion.div
            className="image-container"
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }} // Animation duration
          >
            <img className="hero-img" src={hi} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
