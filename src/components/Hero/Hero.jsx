import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1 className="hero-header">full-stack developer</h1>
        <p className="hero-desc">
          Hi! I am Aayush Girdhar, a passionate Full-stack Developer based in
          India
        </p>
        <button className="more-btn">
          See my works <ArrowForwardOutlinedIcon className="arrow" />
        </button>
        <div className="social-links">
          <div>LinkedIn</div>
          <div>/</div>
          <div>GitHub</div>
          <div>/</div>
          <div>Instagram</div>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
