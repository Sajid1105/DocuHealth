const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload"); // Already correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/docuhealth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error: ", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes); // Use correct path prefix

// Start the server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
