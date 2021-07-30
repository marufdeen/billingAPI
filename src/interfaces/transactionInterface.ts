import { Document, Types } from "mongoose";
import { IUser } from "./userInterface";

interface ITransaction extends Document {
  userId: Types.ObjectId | IUser;
  subsscriptionPlan: string;
  duration: string;
  amountCharged: number;
  expirationDate: any;
}

export { ITransaction };