import React from "react";

function SearchInput({ valueChange }) {
  return (
    <div className="search">
      <img className="search-icon" src="/search-icon.svg" alt=" " />
      <input
        className="search-input"
        placeholder="Search Recipe"
        onChange={valueChange}
      />
    </div>
  );
}
export default SearchInput;
