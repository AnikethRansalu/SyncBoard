const projects = require("../data/projects");

// Get all projects
const getProjects = (req, res) => {
  res.status(200).json(projects);
};

// Get a single project by ID
const getProjectById = (req, res) => {
  const project = projects.find(
    (project) => project.id === parseInt(req.params.id)
  );

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  res.status(200).json(project);
};

// Create a new project
const createProject = (req, res) => {
  const { name, description, status, progress, members, dueDate } = req.body;

  if (!name || !description) {
    return res.status(400).json({
      message: "Project name and description are required",
    });
  }

  const newProject = {
    id: projects.length + 1,
    name,
    description,
    status: status || "Planning",
    progress: progress || 0,
    members: members || 0,
    dueDate: dueDate || null,
  };

  projects.push(newProject);

  res.status(201).json({
    message: "Project created successfully",
    project: newProject,
  });
};

// Update a project
const updateProject = (req, res) => {
  const project = projects.find(
    (project) => project.id === parseInt(req.params.id)
  );

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  const { name, description, status, progress, members, dueDate } = req.body;

  if (name !== undefined) project.name = name;
  if (description !== undefined) project.description = description;
  if (status !== undefined) project.status = status;
  if (progress !== undefined) project.progress = progress;
  if (members !== undefined) project.members = members;
  if (dueDate !== undefined) project.dueDate = dueDate;

  res.status(200).json({
    message: "Project updated successfully",
    project,
  });
};

// Delete a project
const deleteProject = (req, res) => {
  const projectIndex = projects.findIndex(
    (project) => project.id === parseInt(req.params.id)
  );

  if (projectIndex === -1) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  const deletedProject = projects.splice(projectIndex, 1);

  res.status(200).json({
    message: "Project deleted successfully",
    project: deletedProject[0],
  });
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};