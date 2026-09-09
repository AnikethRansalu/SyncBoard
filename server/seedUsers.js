require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connectDB = require("./config/db");
const User = require("./models/User");
const users = require("./data/users");

const seedUsers = async () => {
  try {
    await connectDB();

    await User.deleteMany();

    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        email: user.email.toLowerCase(),
        password: await bcrypt.hash(user.password, 10),
      }))
    );

    await User.insertMany(hashedUsers);

    console.log("Users seeded successfully");
    console.log(`${users.length} users added to MongoDB Atlas`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("User seeding failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedUsers();