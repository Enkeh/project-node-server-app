import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    showId: String, userName: String, showName: String,
  },
  { collection: "curated" }
);
export default schema;
