const mongoose=require('mongoose');
const Admin = require('./Admin');
const User = require('./User');
const Car = require('./Car');

const BookingCarSchema=new mongoose.Schema({
    carownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Admin,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    carId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Car,
        required:true
    },
    userstreet:{
        type:String,
        required:true
    },
    userCity:{
        type:String,
        required:true
    },
    userState:{
        type:String,
        required:true
    },
     userPinCode:{
        type:String,
        required:true
     },
     userCountry:{
        type:String,
        required:true
     },
     carpickDate:{
        type:String,
        required:true
     },
     carDroupDate:{
        type:String,
        required:true
     }
})

module.exports=mongoose.model('BookingCar',BookingCarSchema);
