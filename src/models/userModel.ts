import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/userInterface"; 
const userSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);
 
const User = mongoose.model<IUser>("User", userSchema);

export { User };