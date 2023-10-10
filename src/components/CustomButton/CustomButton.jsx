import React from "react";
import "./CustomButton.css"
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const CustomButton = ({ text, size }) => {
  return (
    <button className="custom-btn">
      {text}
      <ArrowForwardOutlinedIcon className="arrow" fontSize={size} />
    </button>
  );
};

export default CustomButton;
