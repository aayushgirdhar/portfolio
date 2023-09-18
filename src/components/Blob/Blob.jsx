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
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-container"
      style={{
        top: `${position.y - 15}px`,
        left: `${position.x - 15}px`,
      }}
    >
      <div
        className="cursor"
        style={{
          top: `${position.y - 15}px`,
          left: `${position.x - 15}px`,
        }}
      ></div>
    </div>

    // <motion.div
    //   id="blob"
    //   animate={{
    //     top: `${position.y - 125}px`,
    //     left: `${position.x - 125}px`,
    //     rotate: [0, 360, 0],
    //     scale: [1, 1.2, 1],
    //     scaleX: [1, 1.3, 1],
    //     scaleY: [1.3, 1, 1.3],
    //   }}
    //   transition={{
    //     left: {
    //       duration: 0.2,
    //       ease: "linear",
    //       repeat: 0,
    //       stiffness: 20,

    //     },
    //     top: {
    //       duration: 0.2,
    //       ease: "linear",
    //       repeat: 0,
    //       stiffness: 20,
    //     },
    //     rotate: {
    //       duration: 4,
    //       repeat: Infinity,
    //       ease: "linear",
    //       stiffness: 20,
    //     },
    //     scale: {
    //       duration: 3,
    //       repeat: Infinity,
    //       ease: "linear",
    //     },
    //     scaleX: {
    //       duration: 3,
    //       repeat: Infinity,
    //       ease: "linear",
    //       stiffness: 20,
    //     },
    //     scaleY: {
    //       duration: 3,
    //       repeat: Infinity,
    //       ease: "linear",
    //       stiffness: 20,
    //     },
    //   }}
    // ></motion.div>
  );
};

export default Blob;
