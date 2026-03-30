import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useMode } from "../context/ModeContext";

export default function Navbar() {
  const { mode, toggleMode } = useMode();

  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">Vutukuru Yeshwanth.Dev</h2>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/certifications">Certifications</NavLink></li>
          <li><NavLink to="/achievements">Achievements</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* Dev / Design toggle */}
        <div className="mode-toggle" onClick={toggleMode} title="Switch mode">
          <span className={`mode-label ${mode === "dev" ? "active" : ""}`}>Dev</span>
          <div className={`toggle-track ${mode === "design" ? "on" : ""}`}>
            <div className="toggle-thumb" />
          </div>
          <span className={`mode-label ${mode === "design" ? "active" : ""}`}>Design</span>
        </div>

      </div>
    </header>
  );
}