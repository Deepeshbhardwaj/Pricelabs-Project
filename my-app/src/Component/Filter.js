import React, { useState } from "react";

function Filter({ onFilter }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onFilter(searchText);
  };

  return (
    <div className="filter">
      <input
        className="Search"
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="searchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Filter;
