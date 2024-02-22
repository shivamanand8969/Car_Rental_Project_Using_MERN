const { Router } = require('express');
const JWT=require('jsonwebtoken');
const Admin = require('../Models/Admin');
const SECRET_KEY="AdminKey"
const adminrouter = Router();
const bcrypt=require('bcryptjs');
adminrouter.get('/', async (req, res) => {
    try {
        const data = await Admin.find();
        res.send(data)
    }
    catch (err) {
        res.send({ "Error": err })
    }
})

adminrouter.post("/register", async (req, res) => {

    const data = req.body;
    const {name,email,phone,password} =data;
    const hashpassword= await bcrypt.hash(password,10);

    const newAdmin = new Admin({name,email,phone,password:hashpassword});
    try {
        const savedData = await newAdmin.save();
        res.send({ message: "ScuccessFully", savedData })
    } catch (error) {
        res.send(error)
    }
})

adminrouter.post('/login',async (req,res)=>{
      const {username,password}=req.body;
      try {
          const isAdmin=await Admin.findOne({email:username});
          console.log(isAdmin)
          if(!isAdmin){
            return res.json({message:"Please Enter the valid username"})
          }
          const isPasswordCorrect=await bcrypt.compare(password,isAdmin.password);
          if(!isPasswordCorrect)
          {
           return res.send("Please Enter the correct Password");
          }
          const token= await JWT.sign({_id:isAdmin._id},SECRET_KEY);
          res.cookie("token", token, {
            maxAge: 36000000,
            httpOnly: true,
          }).send({ message: "Login", isAdmin });
      } catch (error) {
        res.send(error)
      }
})
module.exports = adminrouter;