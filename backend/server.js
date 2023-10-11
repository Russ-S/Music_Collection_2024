import express from "express";
import recordings from "./data/recordings.js";
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/recordings", (req, res) => {
  res.json(recordings);
});

app.get("/api/recordings/:id", (req, res) => {
  const recording = recordings.find((r) => r._id === req.params.id);
  res.json(recording);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
