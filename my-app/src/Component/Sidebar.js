import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import HotelItem from "./HotelItem";
import useDebounce from "../hooks/useDebounce";

function Sidebar({ hotels, select, setSelected }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // Debounce with a 300ms delay
  const [filteredData, setFilteredData] = useState(hotels);
  const itemsPerPage = 5;

  useEffect(() => {
    // Filter data based on the debounced search term
    if (debouncedSearchTerm) {
      const filtered = filteredData.filter((item) =>
        item?.propertyMetadata?.propertyName
          ?.toLowerCase()
          .includes(debouncedSearchTerm?.toLowerCase())
      );
      setFilteredData(filtered);
      setCurrentPage(1); // Reset to the first page when searching
    } else {
      setFilteredData(hotels);
    }
  }, [debouncedSearchTerm, hotels]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  const onRemoveHotel = (hotelId) => {
    const dataIndex = filteredData.findIndex(
      (ele) => ele?.propertyId === hotelId?.propertyId
    );

    if (dataIndex !== -1) {
      const updateFilterData = [...filteredData];
      const removedProperty = updateFilterData.splice(dataIndex, 1);
      const getLocalData =
        JSON.parse(localStorage.getItem("removedProperty")) || [];

      if (getLocalData[0] !== "null") {
        const localDataCopy = [...getLocalData];
        const removedData = removedProperty[0]?.propertyId;
        localDataCopy.push(removedData);

        localStorage.setItem("removedProperty", JSON.stringify(localDataCopy));
      } else {
        const removedData = [removedProperty[0]?.propertyId];
        localStorage.setItem("removedProperty", JSON.stringify(removedData));
      }

      setFilteredData([...updateFilterData]);
    }
  };

  const onHotelChange = (newEle) => {
    const ele = select.find((ele) => ele.propertyId === newEle.propertyId);
    if (ele) {
      setSelected(select.filter((ele) => ele.propertyId !== newEle.propertyId));
    } else {
      setSelected([...select, newEle]);
    }
  };

  return (
    <div className="sidebar">
      <h2>Hotel List</h2>
      <Filter searchText={searchTerm} setSearchText={setSearchTerm} />
      {displayedData.length > 0 && (
        <ul className="hotel-list">
          {displayedData?.map((hotel) => (
            <li key={hotel?.propertyId}>
              <HotelItem
                hotel={hotel}
                onHotelChange={onHotelChange}
                select={select}
                onRemoveHotel={onRemoveHotel}
              />
            </li>
          ))}
        </ul>
      )}

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "selected-button" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
