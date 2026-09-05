const profiles = require("../data/profiles");

// GET all profiles
const getProfiles = (req, res) => {
  res.json(profiles);
};

// GET profile by ID
const getProfileById = (req, res) => {
  const profileId = Number(req.params.id);

  const profile = profiles.find(
    (profile) => profile.id === profileId
  );

  if (!profile) {
    return res.status(404).json({
      message: "Profile not found",
    });
  }

  res.json(profile);
};

module.exports = {
  getProfiles,
  getProfileById,
};