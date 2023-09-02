import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import hi from "../../assets/hi.webp";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-background-circle"></div>
      {/* <div className="hero-background-cross"></div> */}
      <motion.div 
      initial={{x:-200}}
      animate={{x:0}}
      transition={{type:'Spring', duration: 0.3}}
      className="location">
        <p>Located in India</p>
      </motion.div>
      <div className="hero-section">
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6 }} // Animation duration
          >
            <h1 className="hero-header">
              Hi! I am Aayush Girdhar, a<span> Full-stack Developer</span>.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }} // Animation duration
          >
            <button className="more-btn">
              See my works <ArrowForwardOutlinedIcon className="arrow" />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }} // Animation duration
          >
            <div className="social-links">
              <div className="social-item">LinkedIn</div>
              <div className>/</div>
              <div className="social-item">GitHub</div>
            </div>
          </motion.div>
        </div>
        <div className="hero-right">
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6 }} // Animation duration
          >
            <div className="hero-img">
              <img src={hi} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
