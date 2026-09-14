const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    userId: {
      type: Number,
      required: true,
      unique: true,
    },

    emailNotifications: {
      type: Boolean,
      default: true,
    },

    taskReminders: {
      type: Boolean,
      default: true,
    },

    projectUpdates: {
      type: Boolean,
      default: true,
    },

    theme: {
      type: String,
      default: "Light",
    },

    language: {
      type: String,
      default: "English",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);