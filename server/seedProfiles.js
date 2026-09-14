require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Profile = require("./models/Profile");
const profiles = require("./data/profiles");

const seedProfiles = async () => {
  try {
    await connectDB();

    await Profile.deleteMany();

    await Profile.insertMany(profiles);

    console.log("Profiles seeded successfully");
    console.log(`${profiles.length} profiles added to MongoDB Atlas`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Profile seeding failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedProfiles();