import React from "react";
import StarRating from "./StarRating";
import CroppedHeading from "./CroppedHeading";

function HotelItem({ hotel, onHotelChange, select, onRemoveHotel }) {
  return (
    <div className="hotel-item">
      <input
        type="checkbox"
        isChecked={select.filter((ele) => ele.propertyId === hotel?.propertyId)}
        onChange={() => onHotelChange(hotel)}
      />

      <div className="hotel-image">
        <img
          src={hotel?.images[0]?.c6_uri}
          alt={hotel?.propertyMetadata?.propertyName}
        />
      </div>
      <div className="hotel-details">
        <h3 className="propertyName">
          {hotel?.propertyMetadata?.propertyName}
        </h3>
        <CroppedHeading text={hotel?.propertyMetadata?.headline} max={25} />
        {/* <p>{hotel?.propertyMetadata?.headline}</p> */}
        <div className="hotel-rating">
          {/* <span>Rating: {hotel?.averageRating}</span> */}
          <StarRating rating={hotel?.averageRating} />
        </div>
        <button onClick={() => onRemoveHotel(hotel)}>Remove</button>
      </div>
    </div>
  );
}

export default HotelItem;
