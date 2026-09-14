const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    priority: {
      type: String,
      default: "Medium",
    },

    status: {
      type: String,
      default: "To Do",
    },

    projectId: {
      type: Number,
      default: 1,
    },

    assignedTo: {
      type: String,
      default: "Unassigned",
    },

    dueDate: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);