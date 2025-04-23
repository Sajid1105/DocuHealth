import React from "react";
import Navbar from "./Navbar";
import "./Translator.css";

export default function Translator() {
  return (
    <div className="translator-page">
      <Navbar />
      <div className="translator-container">
        <h1>Document Translator</h1>
        <p>Translate medical language into simpler terms.</p>
      </div>
    </div>
  );
}
