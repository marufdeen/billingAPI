import mongoose, { Schema } from "mongoose";
import { ITransaction } from "../interfaces/transactionInterface";
const transactionSchema = new Schema(
  {
    identifier: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    secret: {
      iv: String,
      encryptedData: String,
    },
    expirationDate: Date,
  },
  { timestamps: true }
);
const transaction = mongoose.model<ITransaction>("transaction", transactionSchema);

export { transaction };
