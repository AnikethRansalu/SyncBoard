const Profile = require("../models/Profile");

// GET all profiles
const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ id: 1 });

    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch profiles",
      error: error.message,
    });
  }
};

// GET profile by ID
const getProfileById = async (req, res) => {
  try {
    const profileId = Number(req.params.id);

    const profile = await Profile.findOne({
      id: profileId,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch profile",
      error: error.message,
    });
  }
};

module.exports = {
  getProfiles,
  getProfileById,
};