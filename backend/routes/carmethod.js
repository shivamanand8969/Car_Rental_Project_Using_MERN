const { Router } = require('express');
const Car = require('../Models/Car');
const multer = require('multer');
const { findById } = require('../Models/Admin');
const carrouter = Router();

carrouter.get('/', async (req, res) => {
    try {
        const data = await Car.find();
        res.send(data);
    } catch (error) {
        res.send({ "err": error })
    }
})

carrouter.get('/owner/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Car.find({ ownerId: id })
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})

carrouter.get('/owner/update/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Car.findById(id);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

carrouter.delete('/owner/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedata = await Car.findByIdAndDelete(id);
        res.send({ message: "Delete SuccessFully", deletedata })
    } catch (error) {
        res.send(error)
    }
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const uploder = multer({ storage: storage })

carrouter.post('/uploadcar', uploder.single('image'), async (req, res) => {
    const data = req.body;
    const newCar = new Car({ ...data, image: req.file.originalname });
    try {
        const savedCar = await newCar.save();
        res.send({ message: "upload SuccessFullly", savedCar })
    } catch (error) {
        res.send({ "Error": error })
    }
})

carrouter.put('/owner/update/:id', uploder.single('image'), async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        let updateData = (req.file) ? await Car.findByIdAndUpdate(id, { ...data, image: req.file.originalname })
         : await Car.findByIdAndUpdate(id, data)
        res.send({ message: "Data Update SuccessFully", updateData })
    } catch (error) {
        res.send(error)
    }
})


module.exports = carrouter;