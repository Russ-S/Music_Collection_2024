import mongoose from "mongoose";

const recordingSchema = new mongoose.Schema(
  {
    composer: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: "/covers/no-image.jpg",
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
    media: {
      type: String,
      required: true,
    },
    source: {
      type: String,
    },
    digital: {
      type: String,
    },
    workCategory: {
      type: String,
      required: true,
    },
    fileCategory: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    catalogNumber: {
      type: String,
    },
    purchaseDate: {
      type: Date,
      required: true,
    },
    value: {
      type: String,
      required: true,
      default: "0.00",
    },
    tapeNumber: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Recording = mongoose.model("Recording", recordingSchema);

export default Recording;
