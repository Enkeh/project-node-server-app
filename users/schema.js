import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, required: true , default: "Hi! I'm new to Channeleon."},
    firstName: String,
    lastName: String,
    email: String,
    role: {
      type: String,
      default: "USER",
      enum: ["ADMIN", "CURATOR", "VIEWER"],
    },
    dob: Date,
    doh: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

export default schema;
