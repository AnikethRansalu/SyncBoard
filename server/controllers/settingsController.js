const Settings = require("../models/Settings");

// GET all settings
const getSettings = async (req, res) => {
  try {
    const settings = await Settings.find().sort({ id: 1 });

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch settings",
      error: error.message,
    });
  }
};

// GET settings by user ID
const getSettingsByUserId = async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const userSettings = await Settings.findOne({
      userId,
    });

    if (!userSettings) {
      return res.status(404).json({
        message: "Settings not found",
      });
    }

    res.status(200).json(userSettings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch settings",
      error: error.message,
    });
  }
};

// UPDATE settings
const updateSettings = async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const settings = await Settings.findOne({
      userId,
    });

    if (!settings) {
      return res.status(404).json({
        message: "Settings not found",
      });
    }

    const {
      emailNotifications,
      taskReminders,
      projectUpdates,
      theme,
      language,
    } = req.body;

    if (emailNotifications !== undefined) {
      settings.emailNotifications = emailNotifications;
    }

    if (taskReminders !== undefined) {
      settings.taskReminders = taskReminders;
    }

    if (projectUpdates !== undefined) {
      settings.projectUpdates = projectUpdates;
    }

    if (theme !== undefined) {
      settings.theme = theme;
    }

    if (language !== undefined) {
      settings.language = language;
    }

    await settings.save();

    res.status(200).json({
      message: "Settings updated successfully",
      settings,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update settings",
      error: error.message,
    });
  }
};

module.exports = {
  getSettings,
  getSettingsByUserId,
  updateSettings,
};