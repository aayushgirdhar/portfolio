import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import hi from "../../assets/hi.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-background-circle"></div>
      {/* <div className="hero-background-cross"></div> */}
      <div className="location">
        <p>Located in India</p>
      </div>
      <div className="hero-section">
        <div className="hero-left">
          <h1 className="hero-header">
            Hi! I am Aayush Girdhar, a 
            <span> Full-stack Developer</span>.
          </h1>
          <button className="more-btn">
            See my works <ArrowForwardOutlinedIcon className="arrow" />
          </button>
          <div className="social-links">
            <div className="social-item">LinkedIn</div>
            <div className>/</div>
            <div className="social-item">GitHub</div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img">
            <img src={hi} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
