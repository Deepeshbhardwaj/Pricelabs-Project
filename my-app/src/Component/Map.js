import React, { useEffect } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { GoogleApiWrapper } from "google-maps-react";

const MapComponent = withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 41.8920783996582, lng: -87.62808990478516 }}
    >
      {props.hotels.map((hotel) => (
        <Marker
          key={hotel.id}
          position={{
            lat: hotel?.geoCode?.latitude,
            lng: hotel?.geoCode?.longitude,
          }}
          onClick={() => props.onMarkerClick(hotel)}
          data-tip={`<div>${hotel?.propertyMetadata?.propertyName}</div><div>Coordinates: (${hotel?.geoCode?.latitude}, ${hotel?.geoCode?.longitude})</div>`}
          data-for={`tooltip-${hotel?.propertyId}`}
        />
      ))}
    </GoogleMap>
  );
});

function Map({ hotels }) {
  // const [selectedHotel, setSelectedHotel] = useState(null);
  const selectedHotel = "7757";

  const handleMarkerClick = (hotel) => {
    // ReactTooltip.show(`tooltip-${hotel?.propertyMetadata?.propertyName}`);
  };

  // useEffect(() => {
  //   ReactTooltip.rebuild();
  // }, []);

  return (
    <div className="mapContainer">
      <MapComponent
        containerElement={<div style={{ height: "100vh" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        hotels={hotels}
        onMarkerClick={handleMarkerClick}
      />
      {/* {selectedHotel && (
        <ReactTooltip
          id={`tooltip-${7757}`}
          effect="solid"
          place="top"
          type="dark"
          delayHide={100} // Add a delay to allow users to move their cursor to the tooltip
        >
          <div>
            <h3>{"Penthouse Duplex #1"}</h3>
            <p>
              {
                "55/56th Floor Penthouse - VIEWS, Fireplace, Balcony, Fitness Center"
              }
            </p>
          </div>
        </ReactTooltip>
      )} */}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCuR5af4fifSI-5IKiBuGvajDq2oKuIBpM",
})(Map);
