// get express
const express = require("express");

// get model from parkingmodel
const parkingModel = require("../models/parkingModel");

// create router
const parkingRouter = express.Router();

// define route to get all parking spaces
parkingRouter.get("/", async (req, res) => {
  const parkings = await parkingModel.find();
  res.json(parkings);
});

// add parking slot
parkingRouter.post("/", async (req, res) => {
  // get total parkins
  const nextCount = (await parkingModel.count()) + 1;

  const parking = req.body; 
  parking.id = nextCount;

  // add parking to db
  parkingModel.insertMany(parking);

  // create response
  const response = {
    responsecode: "1000",
    responsemessage: "Parking added successfully",
  };

  // respond to a user 
  res.send(response);
});

// export parking router
module.exports = parkingRouter;
