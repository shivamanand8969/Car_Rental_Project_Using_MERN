const mongoose=require('mongoose');
const newUserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
     }   
})

module.exports=mongoose.model('User',newUserSchema);