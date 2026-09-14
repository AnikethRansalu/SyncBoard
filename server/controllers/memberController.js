const Member = require("../models/Member");

// GET all members
const getMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ id: 1 });

    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch members",
      error: error.message,
    });
  }
};

// GET single member
const getMemberById = async (req, res) => {
  try {
    const memberId = Number(req.params.id);

    const member = await Member.findOne({
      id: memberId,
    });

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch member",
      error: error.message,
    });
  }
};

module.exports = {
  getMembers,
  getMemberById,
};