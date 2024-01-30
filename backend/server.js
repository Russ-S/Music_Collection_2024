import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddlware.js";
import recordingRoutes from "./routes/recordingRoutes.js";
import performanceRoutes from "./routes/performanceRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import composerRoutes from "./routes/composerRoutes.js";
import labelRoutes from "./routes/labelRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const port = process.env.PORT || 8080;

connectDB(); // connect to MongoDB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/recordings", recordingRoutes);
app.use("/api/performances", performanceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/composers", composerRoutes);
app.use("/api/labels", labelRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve(); // set __dirname to current directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
