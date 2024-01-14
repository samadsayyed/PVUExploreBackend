import { UserEntry } from "../Models/UserEntry.js"

export const addUser = async(req,res)=>{
    const {name,number,reason} = req.body
    const user = await UserEntry.create({name,number,reason})
    return res.json({
        message:"okay"
    })
}

export const getUser = async(req,res)=>{
    const user = await UserEntry.find({})
    return res.json({
        message:"okay",
        user
    })
}