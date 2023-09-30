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
        viewport={{ once: true }}
      >
        Get in touch.
      </motion.h1>
      <motion.p
        className="contact-subheader"
        initial={{ opacity: 0.01, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        viewport={{ once: true }}
      >
        Interested in working with me? Feel free to reach out, I'll respond
        shortly!
      </motion.p>
      <div className="contact-wrapper">
        <motion.div
          className="form"
          initial={{ opacity: 0.01, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
        >
          <form>
            <div className="top-row">
              <div className="floating-label-group">
                <input
                  type="text"
                  className="contact-name"
                  required
                  autoCapitalize="true"
                />
                <span className="floating-label">Name</span>
              </div>
              <div className="floating-label-group">
                <input type="email" className="contact-email" required />
                <span className="floating-label">Email</span>
              </div>
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
        {/* <motion.div className="contact-socials">
          <div className="contact-social-item">
            <GitHubIcon fontSize="large" />
          </div>
          <div className="contact-social-item">
            <LinkedInIcon fontSize="large" />
          </div>
          <div className="contact-social-item">
            <WhatsAppIcon fontSize="large" />
          </div>
        </motion.div> */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </div>
  );
};

export default Contact;
