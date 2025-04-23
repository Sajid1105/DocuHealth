import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DocuHealth</div>
        <div className="menu">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        {/* Left Side Text */}
        <div className="hero-text">
          <h1>DocuHealth</h1>
          <p>
            A web-based vault where users can upload, manage, and track health & financial documents
            (e.g., prescriptions, insurance policies, KYC docs) — enhanced with AI-based classification,
            reminders, and smart recommendations.
          </p>
          <Link to="/signup">
            <button className="signup-btn">Signup</button>
          </Link>
        </div>

        {/* Right Side Video */}
        <div className="hero-video">
          <video src="/demo.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </div>
  );
}
