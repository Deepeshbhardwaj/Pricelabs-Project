import React, { useEffect, useRef } from "react";
import { FeatureGroup as LeafletFeatureGroup } from "react-leaflet";

function FeatureGroup({ children, ...props }) {
  const featureGroupRef = useRef(null);

  useEffect(() => {
    // Access the Leaflet FeatureGroup instance here
    const featureGroup = featureGroupRef.current.leafletElement;

    // You can perform any additional operations on the FeatureGroup here if needed
    // For example, adding event listeners, setting options, etc.

    return () => {
      // Clean up any resources if necessary when the component unmounts
    };
  }, []);

  return (
    <LeafletFeatureGroup ref={featureGroupRef} {...props}>
      {children}
    </LeafletFeatureGroup>
  );
}

export default FeatureGroup;
