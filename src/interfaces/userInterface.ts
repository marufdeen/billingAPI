import { Document } from "mongoose";

interface IUser extends Document {
  name?: string;
  phoneNumber?: number;
  email?: string;
  password?: string;
}

export { IUser };