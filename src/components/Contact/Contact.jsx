import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
        className="contact-header"
        initial={{ opacity: 0.01, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        Get in touch.
      </motion.h1>
      <motion.p
        className="contact-subheader"
        initial={{ opacity: 0.01, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        Interested in working with me? Send me a message or contact me on my
        socials, I'll get back to you shortly!
      </motion.p>
      <div className="contact-wrapper">
        <motion.div
          className="form"
          initial={{ opacity: 0.01, x: -350 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <form>
            <div className="top-row">
              <input type="text" placeholder="Name" className="contact-name" />
              <input
                type="email"
                placeholder="Email address"
                className="contact-email"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Your message for me"
              className="contact-msg"
            ></textarea>
            <button className="contact-submit">Submit</button>
          </form>
        </motion.div>
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0.01, x: 350 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <div className="contact-social-item github">
            <GitHubIcon /> Github
          </div>
          <div className="contact-social-item linkedin">
            <LinkedInIcon />
            LinkedIn
          </div>
          <div className="contact-social-item whatsapp">
            <WhatsAppIcon />
            WhatsApp
          </div>
          <div className="contact-social-item email">Copy my email</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
