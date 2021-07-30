import mongoose, { Schema } from "mongoose";
import { ITransaction } from "../interfaces/transactionInterface";
const transactionSchema = new Schema(
  {
    identifier: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }, 
    subsscriptionPlan: String,
    duration: String,
    amountCharged: Number,
    expirationDate: Date,
  },
  { timestamps: true }
);
const Transaction = mongoose.model<ITransaction>("Transaction", transactionSchema);

export { Transaction };
