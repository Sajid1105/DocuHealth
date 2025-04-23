import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./MyDocs.css";

export default function MyDocs() {
  const [docs, setDocs] = useState([]);
  const userId = "user123"; // Replace with dynamic user ID when login is integrated

  useEffect(() => {
    fetch(`http://localhost:5000/api/upload/${userId}`)
      .then((res) => res.json())
      .then((data) => setDocs(data))
      .catch((err) => console.error("Failed to fetch documents:", err));
  }, []);

  return (
    <div className="mydocs-page">
      <Navbar />
      <div className="my-docs-container">
        <h1>My Documents</h1>
        <p>Here you can view and manage your health-related documents.</p>

        {docs.length === 0 ? (
          <p>No documents uploaded yet.</p>
        ) : (
          <ul className="docs-list">
            {docs.map((doc) => (
              <li key={doc._id} className="doc-item">
                <a
                  href={`http://localhost:5000/uploads/${doc.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doc.originalName}
                </a>
                <span className="upload-date">
                  — {new Date(doc.uploadDate).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
