import React from "react";
import StarRating from "./StarRating";
import CroppedHeading from "./CroppedHeading";

function HotelItem({ hotel }) {
  console.log(hotel);
  return (
    <div className="hotel-item">
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
      </div>
    </div>
  );
}

export default HotelItem;
