require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Task = require("./models/Task");
const tasks = require("./data/tasks");

const seedTasks = async () => {
  try {
    await connectDB();

    await Task.deleteMany();

    await Task.insertMany(tasks);

    console.log("Tasks seeded successfully");
    console.log(`${tasks.length} tasks added to MongoDB Atlas`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Task seeding failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedTasks();