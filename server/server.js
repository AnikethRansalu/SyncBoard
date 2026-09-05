const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const memberRoutes = require("./routes/memberRoutes");
const profileRoutes = require("./routes/profileRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/settings", settingsRoutes);

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