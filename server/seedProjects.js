require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Project = require("./models/Project");
const projects = require("./data/projects");

const seedProjects = async () => {
  try {
    await connectDB();

    await Project.deleteMany();

    await Project.insertMany(projects);

    console.log("Projects seeded successfully");
    console.log(`${projects.length} projects added to MongoDB Atlas`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Project seeding failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedProjects();