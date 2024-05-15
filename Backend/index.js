import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get("/users",async (req, res) => {
    const user=await userModel.find()
  res.send(user);
});

app.get("/users/:id",async (req, res) => {
    const {id}=req.params
    const user=await userModel.findById(id)
  res.send(user);
});

app.post("/users",async (req, res) => {
    const body=req.body
    const user=new userModel(body)
   await user.save()
  res.send("Got a POST request");
});

app.put("/users/:id",async (req, res) => {
    const {id}=req.params
    const body=req.body
    const user=await userModel.findByIdAndUpdate(id,body)
  res.send("Got a PUT request at /user");
});

app.delete("/users/:id",async (req, res) => {
    const {id}=req.params
    const user=await userModel.findByIdAndDelete(id)
  res.send("Got a DELETE request at /user");
});
mongoose.connect("mongodb+srv://rufet:rufet@developermongo.nxg6jik.mongodb.net/");
const userSchema = new mongoose.Schema({
    name: String,
    surname:String,
    age:Number,

  })
const userModel= mongoose.model('myuser', userSchema);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
