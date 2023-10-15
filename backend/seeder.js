import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import recordings from "./data/recordings.js";
import performances from "./data/performances.js";
import User from "./models/userModel.js";
import Recording from "./models/recordingModel.js";
import Performance from "./models/performanceModel.js";
import Category from "./models/categoryModel.js";
import Composer from "./models/composerModel.js";
import Label from "./models/labelModel.js";
import Media from "./models/mediaModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Recording.deleteMany();
    await Performance.deleteMany();
    await Category.deleteMany();
    await Composer.deleteMany();
    await Label.deleteMany();
    await Media.deleteMany();
    await User.deleteMany();

    const createdUsers = users.map((user) => {
      return { ...user };
    });

    await User.insertMany(createdUsers);

    const sampleRecordings = recordings.map((recording) => {
      return { ...recording };
    });

    await Recording.insertMany(sampleRecordings);

    const samplePerformances = performances.map((performance) => {
      return { ...performance };
    });

    await Performance.insertMany(samplePerformances);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Recording.deleteMany();
    await Performance.deleteMany();
    await Category.deleteMany();
    await Composer.deleteMany();
    await Label.deleteMany();
    await Media.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
