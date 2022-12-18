import React from "react";
import "./colorBox.css";

const ColorBox = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div>
      <div
        className="color-box"
        style={{
          backgroundColor: colorValue,
          color: isDarkText ? "#000" : "#FFF",
        }}
      >
        <p>{colorValue ? colorValue : "No Color Selected"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </div>
    </div>
  );
};

export default ColorBox;
