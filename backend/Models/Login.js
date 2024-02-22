const mongoose=require('mongoose');

const adminLogin=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('AdminLogin',adminLogin);