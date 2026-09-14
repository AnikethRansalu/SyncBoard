require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Settings = require("./models/Settings");
const settings = require("./data/settings");

const seedSettings = async () => {
  try {
    await connectDB();

    await Settings.deleteMany();

    await Settings.insertMany(settings);

    console.log("Settings seeded successfully");
    console.log(`${settings.length} settings records added to MongoDB Atlas`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Settings seeding failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedSettings();