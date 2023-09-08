import React from "react";

function CroppedHeading({ text, maxChars }) {
  const truncatedText =
    text.length > maxChars ? text.substring(0, maxChars) + "..." : text;

  return (
    <h6
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "200px",
        margin: "10px",
      }}
    >
      {truncatedText}
    </h6>
  );
}

export default CroppedHeading;
