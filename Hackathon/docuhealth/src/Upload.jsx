import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Upload.css";

export default function Upload() {
  const [file, setFile] = useState(null);
  const userId = "user123"; // Replace with real user ID from context or auth

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("File uploaded successfully!");
      } else {
        alert(data.error || "Upload failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while uploading.");
    }
  };

  return (
    <div className="upload-page">
      <Navbar />
      <div className="upload-container">
        <h1>Upload Your Documents</h1>
        <p>Upload your health documents for further processing.</p>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}
