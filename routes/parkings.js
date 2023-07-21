// get express
const express = require('express');

// get model from parkingmodel
const parkingModel = require('../models/parkingModel');


// create router
const parkingRouter = express.Router();

// define route to get all parking spaces
parkingRouter.get("/", async(req, res)=>{
    const parkings = await parkingModel.find();
    res.json(parkings);
});

// export parking router
module.exports = parkingRouter;