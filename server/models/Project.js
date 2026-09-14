const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      default: "Planning",
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    members: {
      type: Number,
      default: 0,
      min: 0,
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

module.exports = mongoose.model("Project", projectSchema);