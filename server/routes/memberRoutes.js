const express = require("express");

const {
  getMembers,
  getMemberById,
} = require("../controllers/memberController");

const router = express.Router();

router.get("/", getMembers);
router.get("/:id", getMemberById);

module.exports = router;