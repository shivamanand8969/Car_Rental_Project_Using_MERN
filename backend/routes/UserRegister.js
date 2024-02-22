const {Router}=require('express');
const User = require('../Models/User');
const bcrypt=require('bcryptjs');
const JWT=require('jsonwebtoken');
const SECRET_USER_KEY="User Key"
const userrouter=Router();

userrouter.get('/', async(req,res)=>{
    try {
       const data=await User.find();
       res.send(data);
    } catch(error) {
        res.send(error);
    }
})
userrouter.post('/register',async (req,res)=>{
      const {name,email,mobileno,password}=req.body;

      const hashedpassword=await bcrypt.hash(password,10);
      let newUser=new User({name,email,mobileno,password:hashedpassword});
      try {
          let savedData=await newUser.save();
          res.send(savedData);
      } catch (error) {
        res.send(error);
      }
})

userrouter.post('/userlogin',async (req,res)=>{
    const {email,password}=req.body;
    const isUser=await User.findOne({email:email});
    if(!isUser){
       return res.send("User Does not Exist");
    }
    const isPasswordTrue=await bcrypt.compare(password,isUser.password);
    if(!isPasswordTrue){
            return res.send("Incorrect Password");
    }
    let token=await JWT.sign({_id:isUser._id},SECRET_USER_KEY);
    res.cookie("userToken",token,{
      httpOnly:true,
      expires:new Date(Date.now()+10 *365*24*60*60*1000)
    })
    res.send({message:"Login SuccessFully",isUser})


})
userrouter.get('/userlogout',async (req,res)=>{
    res.clearCookie('usertoken');
    res.send("Logout SuccessFully");
})

module.exports=userrouter;