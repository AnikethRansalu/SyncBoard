const express = require("express");
const router = express.Router();

const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// Get all projects
router.get("/", getProjects);

// Get a single project
router.get("/:id", getProjectById);

// Create a project
router.post("/", createProject);

// Update a project
router.put("/:id", updateProject);

// Delete a project
router.delete("/:id", deleteProject);

module.exports = router;