import React from "react";
import "./footer.css";

const Footer = ({ colorValue, isDarkText }) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p className="copyright">Zeitel42</p>
      <p className="year">&copy; 2022</p>
    </div>
  );
};
export default Footer;
