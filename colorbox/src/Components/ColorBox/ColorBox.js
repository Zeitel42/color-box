import React from "react";
import "./colorBox.css";

const ColorBox = ({ colorValue, hexValue }) => {
  return (
    <div>
      <div className="color-box">
        <p>{colorValue ? colorValue : "No Color Selected"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </div>
    </div>
  );
};

export default ColorBox;
