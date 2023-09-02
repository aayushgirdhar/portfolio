import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import pic from "../../assets/pic.webp";
const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className="nav"
    >
        <div className="nav-item">
          <img src={pic} alt="me" />
        </div>
        <div className="nav-item">About Me</div>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Skills</div>
        <div className="nav-item">Resume</div>
        <div className="nav-item">Contact</div>
    </motion.nav>
  );
};

export default Navbar;
