import mongoose from "mongoose";

const schema = new mongoose.Schema({
    stars:Number,
    comment:String,
    date: {
        type: Date,
        default: Date.now,
      }
})

export const Feedback = mongoose.model("Feedback",schema)