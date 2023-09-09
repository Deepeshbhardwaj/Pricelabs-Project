import { useState } from "react";
import "./App.css";
// import Map from ".//Component/Map";
import Map from "./Component/MapComponent";
import Sidebar from "./Component/Sidebar";
import data from "./mockData.json";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  const hotels = data?.data?.results?.listings;

  const mapData = hotels.map((hotel, index) => ({
    id: hotel?.propertyId,
    propertyName: hotel?.propertyMetadata?.propertyName,
    lat: hotel?.geoCode?.latitude,
    lng: hotel?.geoCode?.longitude,
    image: hotel?.images[0]?.c6_uri,
  }));
  const [select, setSelected] = useState([]);

  return (
    <div className="App">
      <div className="priceLabs">
        <Sidebar hotels={hotels} select={select} setSelected={setSelected} />
        <div className="custom-map">
          {/* <Map className="custom-map" hotels={hotels} /> */}
          <div></div>
          <Map
            coordinates={select?.map((hotel, index) => ({
              id: hotel?.propertyId,
              propertyName: hotel?.propertyMetadata?.propertyName,
              lat: hotel?.geoCode?.latitude,
              lng: hotel?.geoCode?.longitude,
              image: hotel?.images[0]?.c6_uri,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
