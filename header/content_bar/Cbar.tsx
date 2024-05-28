import React from "react";
import "./Cbar.css";
function Cbar() {
  return (
    <div className="Cbar">
      <ul className="navbar-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/sports">Sports</a>
        </li>
        <li>
          <a href="/finance">Finance</a>
        </li>
        <li>
          <a href="/economy">Economy</a>
        </li>
        <li>
          <a href="/tech">Tech</a>
        </li>
      </ul>
    </div>
  );
}

export default Cbar;
