const {Router}=require('express');
const BookingCar = require('../Models/BookingCar');

const carbookingrouter=Router();


carbookingrouter.get('/:id',async (req,res)=>{
        const id=req.params.id;
       const data=await BookingCar.find({userId:id}).populate("carownerId").populate('carId')
       res.send(data);
})
carbookingrouter.post('/bookcar',async (req,res)=>{
    const data=req.body;
    const newCarbooking=new BookingCar(data);
    try {
        const savedCar=await newCarbooking.save();
        res.send({messag:'Data Saved SuccessFully',savedCar})
    } catch (error) {
        res.send({error})
    }
})

carbookingrouter.delete('/:id',async (req,res)=>{
       const id=req.params.id;
      try {
        const deleteData=await BookingCar.findByIdAndDelete(id);
        res.send({message:"data deleted SuccessFully",deleteData})
      } catch (error) {
        res.send(error)
      }
})

module.exports=carbookingrouter;