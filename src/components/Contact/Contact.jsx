import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import resume from "../../assets/resume.pdf";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MessageIcon from "@mui/icons-material/Message";
const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1 className="contact-header">
        Interested in working with me?
      </motion.h1>
      <motion.div className="contact-main">
        <div className="main-left">
          <img className="contact-img" src="" alt="" />
        </div>
        <div className="main-right">
          <a href={resume} download="Resume" target="_blank">
            <button className="contact-download">
              <ArrowDownwardIcon /> Download Resume
            </button>
          </a>
          <button className="contact-msg">
            <MessageIcon /> Contact me
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
