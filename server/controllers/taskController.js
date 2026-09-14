const Task = require("../models/Task");

// GET all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ id: 1 });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
      error: error.message,
    });
  }
};

// GET single task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      id: Number(req.params.id),
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch task",
      error: error.message,
    });
  }
};

// CREATE new task
const createTask = async (req, res) => {
  try {
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

    const lastTask = await Task.findOne().sort({ id: -1 });
    const nextId = lastTask ? lastTask.id + 1 : 1;

    const newTask = await Task.create({
      id: nextId,
      title,
      description,
      priority: priority || "Medium",
      status: status || "To Do",
      projectId: projectId || 1,
      assignedTo: assignedTo || "Unassigned",
      dueDate: dueDate || null,
    });

    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create task",
      error: error.message,
    });
  }
};

// UPDATE task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      id: Number(req.params.id),
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    const {
      title,
      description,
      priority,
      status,
      projectId,
      assignedTo,
      dueDate,
    } = req.body;

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (priority !== undefined) task.priority = priority;
    if (status !== undefined) task.status = status;
    if (projectId !== undefined) task.projectId = projectId;
    if (assignedTo !== undefined) task.assignedTo = assignedTo;
    if (dueDate !== undefined) task.dueDate = dueDate;

    await task.save();

    res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task",
      error: error.message,
    });
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      id: Number(req.params.id),
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task",
      error: error.message,
    });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};