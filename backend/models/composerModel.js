import mongoose from "mongoose";

const composerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Composer = mongoose.model("Composer", composerSchema);

export default Composer;
