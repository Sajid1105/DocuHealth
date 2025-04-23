// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token); // Store token if needed
      console.log("Logged in!");
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <nav className="navbar">
        <div className="logo">DocuHealth</div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
        </div>
      </nav>

      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-tabs">
            <button className="tab-btn active">Login</button>
            <button className="tab-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <h2>Welcome Back</h2>
            <p className="form-subtitle">Login to continue managing your health</p>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
