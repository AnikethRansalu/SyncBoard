const members = require("../data/members");

// GET all members
const getMembers = (req, res) => {
  res.json(members);
};

// GET single member
const getMemberById = (req, res) => {
  const memberId = Number(req.params.id);

  const member = members.find(
    (member) => member.id === memberId
  );

  if (!member) {
    return res.status(404).json({
      message: "Member not found",
    });
  }

  res.json(member);
};

module.exports = {
  getMembers,
  getMemberById,
};