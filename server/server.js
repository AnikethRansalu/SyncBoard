const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// API health check
app.get("/", (req, res) => {
  res.json({
    message: "SyncBoard API is running successfully",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "SyncBoard backend is healthy",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});