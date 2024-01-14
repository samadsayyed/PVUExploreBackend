import express from "express";
import { connectDb } from "./Data/Connect.js";
import {  AddFeedback, getFeedBack } from "./Controllers/Feedback.js";
import { addUser, getUser } from "./Controllers/UserEntries.js";
import cors from "cors"
import { config } from "dotenv";

const app = express();
app.use(cors())

config({
  path:"./config.env"
})

connectDb()

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome home")
})


app.post("/addfeedback",AddFeedback)
app.get("/getfeedbacks",getFeedBack)


app.post("/adduser",addUser)
app.get("/getusers",getUser)


app.listen(5000, () => {
  console.log("listening");
});
