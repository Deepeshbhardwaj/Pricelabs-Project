import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "phosphor-react";
import MapIcon from "../assets/mapIcon.png";

function CommonMap({ coordinates }) {
  const [map, setMap] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMarkerMouseOver = (index) => {
    setHoveredMarker(index);
  };

  const handleMarkerMouseOut = () => {
    setHoveredMarker(null);
  };

  const onMapReady = (map) => {
    setMap(map);
  };

  const customIcon = new L.Icon({
    iconUrl: MapIcon, // Replace with the path to your marker icon
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point if necessary
  });

  return (
    <div className="map-container">
      <MapContainer
        center={[41.8920783996582, -87.62808990478516]}
        zoom={10}
        style={{ height: "100vh", width: "100vw" }}
        whenCreated={onMapReady}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Render markers based on the provided coordinates */}
        {coordinates.map((coord) => (
          <Marker
            key={coord.prpropertyId}
            position={[coord.lat, coord.lng]}
            icon={customIcon}
          >
            <Tooltip
              direction="top"
              offset={[0, -20]} // Adjust the offset as needed
              opacity={1} // Adjust the opacity as needed
            >
              <div>
                <img
                  src={coord?.image}
                  alt="Marker"
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <h3>{coord.propertyName}</h3>{" "}
              {/* Replace with your marker's title */}
            </Tooltip>
          </Marker>
        ))}

        {map && (
          <EditControl
            position="topright"
            draw={{
              rectangle: false,
              circle: false,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default CommonMap;
