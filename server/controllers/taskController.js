const tasks = require("../data/tasks");

// GET all tasks
const getTasks = (req, res) => {
  res.json(tasks);
};

// GET single task
const getTaskById = (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find(
    (task) => task.id === taskId
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.json(task);
};

// CREATE new task
const createTask = (req, res) => {
  const {
    title,
    description,
    priority,
    status,
    projectId,
    assignedTo,
    dueDate,
  } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "Title and description are required",
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    priority: priority || "Medium",
    status: status || "To Do",
    projectId: projectId || 1,
    assignedTo: assignedTo || "Unassigned",
    dueDate: dueDate || null,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask,
  });
};

// UPDATE task
const updateTask = (req, res) => {
  const taskId = Number(req.params.id);

  const taskIndex = tasks.findIndex(
    (task) => task.id === taskId
  );

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const updatedTask = {
    ...tasks[taskIndex],
    ...req.body,
    id: taskId,
  };

  tasks[taskIndex] = updatedTask;

  res.json({
    message: "Task updated successfully",
    task: updatedTask,
  });
};

// DELETE task
const deleteTask = (req, res) => {
  const taskId = Number(req.params.id);

  const taskIndex = tasks.findIndex(
    (task) => task.id === taskId
  );

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const deletedTask = tasks.splice(
    taskIndex,
    1
  )[0];

  res.json({
    message: "Task deleted successfully",
    task: deletedTask,
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};