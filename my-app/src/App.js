import "./App.css";
import Map from ".//Component/Map";
import Sidebar from "./Component/Sidebar";
import data from "./mockData.json";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  const hotels = data?.data?.results?.listings;
  return (
    <div className="App">
      <div className="priceLabs">
        <Sidebar hotels={hotels} />
        <div className="custom-map">
          <Map className="custom-map" hotels={hotels} />
        </div>
      </div>
    </div>
  );
}

export default App;
