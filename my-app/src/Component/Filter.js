import React, { useState } from "react";

function Filter({ searchText, setSearchText }) {
  return (
    <div className="filter">
      <input
        className="Search"
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default Filter;
