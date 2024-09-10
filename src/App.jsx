import { useState } from "react";
import "./styles/App.css";
import Navbar from "./Navbar";
import heroImage from "./assets/billboard.png"; // Path to the uploaded image

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter an address, city, or zip code..."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
