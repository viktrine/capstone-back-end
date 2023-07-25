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

// avail / book a parking slot
parkingRouter.put("/:id", async(req, res)=>{
    var response = null;
    // get the id param
    const id = req.params.id;

    const updateBody = req.body;

    // get parking slot with given id
    const parkingSlot = await parkingModel.find({"id":id});

    if(parkingSlot.length < 1){
        response = {
            responsecode: "4000",
            responsemessage: "Parking not available",
          };
    }else{
        console.log(updateBody);
        await parkingModel.updateOne({ id: id }, updateBody);
        response = {
            responsecode: "1000",
            responsemessage: "Parking updated accordingly",
          };
    }
    res.send(response);
});

// export parking router
module.exports = parkingRouter;
