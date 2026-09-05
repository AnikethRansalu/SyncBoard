const express = require("express");

const {
  getSettings,
  getSettingsByUserId,
  updateSettings,
} = require("../controllers/settingsController");

const router = express.Router();

router.get("/", getSettings);
router.get("/:userId", getSettingsByUserId);
router.put("/:userId", updateSettings);

module.exports = router;