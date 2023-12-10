import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    showId: String, showName: String,
  },
  { collection: "watched" }
);
export default schema;
