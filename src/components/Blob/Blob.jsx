import React, { useState, useEffect } from "react";
import "./Blob.css";

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
        id="blob"
        style={{
          left: `${position.x - 125}px`,
          top: `${position.y - 125}px`,
        }}
      ></div>
  );
};

export default Blob;
