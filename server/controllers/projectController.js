const Project = require("../models/Project");

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ id: 1 });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch projects",
      error: error.message,
    });
  }
};

// Get a single project by ID
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      id: parseInt(req.params.id),
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch project",
      error: error.message,
    });
  }
};

// Create a new project
const createProject = async (req, res) => {
  try {
    const {
      name,
      description,
      status,
      progress,
      members,
      dueDate,
    } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: "Project name and description are required",
      });
    }

    const lastProject = await Project.findOne().sort({ id: -1 });
    const nextId = lastProject ? lastProject.id + 1 : 1;

    const newProject = await Project.create({
      id: nextId,
      name,
      description,
      status: status || "Planning",
      progress: progress || 0,
      members: members || 0,
      dueDate: dueDate || null,
    });

    res.status(201).json({
      message: "Project created successfully",
      project: newProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create project",
      error: error.message,
    });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      id: parseInt(req.params.id),
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const {
      name,
      description,
      status,
      progress,
      members,
      dueDate,
    } = req.body;

    if (name !== undefined) project.name = name;
    if (description !== undefined) project.description = description;
    if (status !== undefined) project.status = status;
    if (progress !== undefined) project.progress = progress;
    if (members !== undefined) project.members = members;
    if (dueDate !== undefined) project.dueDate = dueDate;

    await project.save();

    res.status(200).json({
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update project",
      error: error.message,
    });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      id: parseInt(req.params.id),
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      message: "Project deleted successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete project",
      error: error.message,
    });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};