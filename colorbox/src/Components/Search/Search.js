import React from "react";
import "./search.css";
import colorNames from "colornames";

const Search = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
        autoFocus
        type="text"
        id="search"
        placeholder="Enter Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Search;
