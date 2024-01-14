import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:String,
    number:Number,
    reason:String,
    date: {
        type: Date,
        default: Date.now,
      }
})

export const UserEntry = mongoose.model("UserEntry",schema)