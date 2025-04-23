import React from "react";
import Navbar from "./Navbar";
import "./Tracker.css";

export default function Tracker() {
  return (
    <div className="tracker-page">
      <Navbar />
      <div className="tracker-container">
        <h1>Track Your Documents</h1>
        <p>Check the status of your uploaded documents here.</p>
      </div>
    </div>
  );
}
