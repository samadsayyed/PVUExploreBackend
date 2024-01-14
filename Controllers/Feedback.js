import { Mongoose } from "mongoose"
import { Feedback } from "../Models/Feedback.js"

export const AddFeedback = async(req,res)=>{
    const {comment,stars} = req.body
await Feedback.create({comment,stars})
res.json({
    message:"good"
})
}

export const getFeedBack = async(req,res)=>{
const Feedbacks  = await Feedback.find({})
res.json({
    Feedbacks
})
}