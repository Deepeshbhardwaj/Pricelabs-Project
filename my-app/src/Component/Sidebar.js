import React, { useState } from "react";
import Filter from "./Filter";
import HotelItem from "./HotelItem";

function Sidebar({ hotels }) {
  const [filteredHotels, setFilteredHotels] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10; // Set the number of hotels to display per page

  // Calculate the range of hotels to display on the current page
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilter = (searchText) => {
    if (searchText) {
      debugger;
      const filtered = hotels.filter((hotel) =>
        hotel?.propertyMetadata?.propertyName
          ?.toLowerCase()
          .includes(searchText?.toLowerCase())
      );
      setFilteredHotels(filtered);
    } else {
      setFilteredHotels([]);
    }
  };

  return (
    <div className="sidebar">
      <h2>Hotel List</h2>
      <Filter onFilter={handleFilter} />
      {filteredHotels.length > 0 ? (
        <ul className="hotel-list">
          {filteredHotels?.map((hotel) => (
            <li key={hotel?.propertyId}>
              <HotelItem hotel={hotel} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="hotel-list">
          {currentHotels?.map((hotel) => (
            <li key={hotel?.propertyId}>
              <HotelItem hotel={hotel} />
            </li>
          ))}
        </ul>
      )}

      <div className="pagination">
        {Array.from({ length: Math.ceil(hotels.length / hotelsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Sidebar;
