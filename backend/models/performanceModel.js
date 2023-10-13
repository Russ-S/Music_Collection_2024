import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema(
  {
    performanceDate: {
      type: Date,
      required: true,
    },
    composer: {
      type: String,
      required: true,
    },
    composition: {
      type: String,
      required: true,
    },
    artists: {
      type: String,
    },
    conductor: {
      type: String,
    },
    ensemble: {
      type: String,
    },
    concertHall: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    workCategory: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const Performance = mongoose.model("Performance", performanceSchema);

export default Performance;
