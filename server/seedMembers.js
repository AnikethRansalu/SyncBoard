require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Member = require("./models/Member");
const members = require("./data/members");

const seedMembers = async () => {
  try {
    await connectDB();

    await Member.deleteMany();

    await Member.insertMany(members);

    console.log("Members seeded successfully");
    console.log(`${members.length} members added to MongoDB Atlas`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Member seeding failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedMembers();