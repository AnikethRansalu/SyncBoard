const settings = require("../data/settings");

// GET all settings
const getSettings = (req, res) => {
  res.json(settings);
};

// GET settings by user ID
const getSettingsByUserId = (req, res) => {
  const userId = Number(req.params.userId);

  const userSettings = settings.find(
    (setting) => setting.userId === userId
  );

  if (!userSettings) {
    return res.status(404).json({
      message: "Settings not found",
    });
  }

  res.json(userSettings);
};

// UPDATE settings
const updateSettings = (req, res) => {
  const userId = Number(req.params.userId);

  const settingsIndex = settings.findIndex(
    (setting) => setting.userId === userId
  );

  if (settingsIndex === -1) {
    return res.status(404).json({
      message: "Settings not found",
    });
  }

  const updatedSettings = {
    ...settings[settingsIndex],
    ...req.body,
    userId,
  };

  settings[settingsIndex] = updatedSettings;

  res.json({
    message: "Settings updated successfully",
    settings: updatedSettings,
  });
};

module.exports = {
  getSettings,
  getSettingsByUserId,
  updateSettings,
};