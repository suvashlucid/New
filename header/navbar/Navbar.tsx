import React from "react";
import Logobar from "../logobar/Logobar";
import "./Navbar.css";

// Define types for weather data

const Navbar: React.FC = () => {
  // Function to fetch weather data

  return (
    <div className="navbar">
      <div className="logobar">
        <Logobar />
      </div>
    </div>
  );
};

export default Navbar;
