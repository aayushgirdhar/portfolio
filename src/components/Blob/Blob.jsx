import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Blob.css";

const Blob = () => {
  const [position, setPosition] = useState({ x: 950, y: 500 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    const blob = document.getElementById("blob");
    blob.animate;
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      id="blob"
      animate={{
        top: `${position.y - 125}px`,
        left: `${position.x - 125}px`,
        rotate: [0, 360, 0],
        scaleX: [1, 1.5, 1],
        scaleY: [1.5, 1, 1.5],
      }}
      transition={{
        left: {
          duration: 0.2,
          ease: "linear",
          repeat: 0,
          stiffness: 20,
        },
        top: {
          duration: 0.2,
          ease: "linear",
          repeat: 0,
          stiffness: 20,
        },
        rotate: {
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          stiffness: 20,
        },
        scaleX: {
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          stiffness: 20,
        },
        scaleY: {
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          stiffness: 20,
        },
      }}
    ></motion.div>
  );
};

export default Blob;
