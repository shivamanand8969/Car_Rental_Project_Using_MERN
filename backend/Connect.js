const mongoose=require('mongoose');

async function  connect(){
    return await mongoose.connect('mongodb://localhost:27017/car_rent')
}
module.exports=connect;