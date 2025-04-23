// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>DocuHealth</h2>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/mydocs">My Docs</Link>
        <Link to="/upload">Upload</Link>
        
        <Link to="/tracker">Tracker</Link>
        <Link to="/translator">Translator</Link>
      </div>
    </nav>
  );
}
