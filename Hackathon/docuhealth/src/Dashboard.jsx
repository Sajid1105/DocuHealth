// Dashboard.jsx
import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="navbar">
        <div className="logo">Dashboard</div>
        <div className="menu">
          <a href="/dashboard">Dashboard</a>
          <a href="/mydocs">My Docs</a>
          <a href="/upload">Upload</a>
          <a href="/tracker">Tracker</a>
          <a href="/translator">Translator</a>
        </div>
      </div>
      <div className="dashboard-container">
        <h1>Welcome to your Dashboard</h1>
        <p>Here’s where your health documents and services will appear.</p>
      </div>
    </>
  );
}
