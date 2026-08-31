const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

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