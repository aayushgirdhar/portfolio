import React from "react";
import "./Navbar.css";
import pic from "../../assets/pic.webp";
const Navbar = () => {
  return (
      <nav className="nav">
        <div className="nav-item">
          <img src={pic} alt="me" />
        </div>
        <div className="nav-item">About Me</div>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Skills</div>
        <div className="nav-item">Resume</div>
        <div className="nav-item">Contact</div>
      </nav>
  );
};

export default Navbar;
