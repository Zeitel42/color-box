import React from "react";
import "./search.css";

const Search = () => {
  return (
    <form className="search-form">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Enter Color Name"
        //   value={search}
        //     onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
