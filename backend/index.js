const express=require('express');
const adminrouter = require('./routes/AdminRegister');
const connect = require('./Connect');
const cors=require('cors');
const carrouter = require('./routes/carmethod');
const path=require('path');
const userrouter = require('./routes/UserRegister');
const carbookingrouter = require('./routes/carBooking');
const app=express();
const PORT=5000;
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true 
   }));
connect().then(()=>{
    console.log("database Connected")
})

const middleware=(req, res, next) => {
        console.log("middleware")
          // res.header('Access-Control-Allow-Origin', "http://localhost:3000");
          // res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
          // res.setHeader('Access-Control-Allow-Methods',"GET,POST,PUT,PATCH,DELETE");
          // res.setHeader("Access-Control-Allow-Headers","Content-Type ,Authorization");
    
        next();
    }

app.use('/imagename',express.static('upload'));
app.use('/admin',middleware, adminrouter)
app.use('/car', carrouter)
app.use('/user',userrouter)
app.use('/carbooking',carbookingrouter)
app.listen(PORT,()=>{
    console.log("server is running on port number 3000")
})
