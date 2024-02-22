const mongoose = require('mongoose');
const Admin = require('./Admin');

const carSchema = new mongoose.Schema({
    carname: {
        type: String,
        required:true
    },
    totalSheet: {
        type: String,
        required:true
    },
    rateperhour: {
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Admin,
            require:true
        }
})
module.exports = mongoose.model('Car', carSchema);