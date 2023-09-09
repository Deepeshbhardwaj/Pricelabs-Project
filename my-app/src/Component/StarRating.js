import React from "react";
import { Star } from "phosphor-react";

function StarRating({ rating }) {
  const filledStars = Math.round(rating);
  const emptyStars = 6 - filledStars;
  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star filled">
          <Star size={16} color="#ffc107" />
        </span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star empty">
          <Star size={16} color="#e4e4e4" />
        </span>
      ))}
    </div>
  );
}

export default StarRating;
