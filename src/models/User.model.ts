import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["initial", "accepted", "denied"],
    default: "initial",
  },
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
