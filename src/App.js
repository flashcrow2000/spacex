import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./features/header/Header";
import ImagePanel from "./features/imagePanel/ImagePanel";
import FlightsList from "./features/flightsList/FlightsList";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <ImagePanel />
        <FlightsList />
      </div>
    </div>
  );
}

export default App;
