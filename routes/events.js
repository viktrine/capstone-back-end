const express = require('express');

const eventModel = require('../models/eventModel');

   const router= express.Router();
  
   //get all events query
   router.get('/', async function(req, res, next){
  const events = await eventModel.find();
    res.json(events);
});
// router.get('/', async function(req, res, next) { 
//   const users = await usermodel.find();
//     res.json(users);
//   });
//find event by ID
router.get("/:id", async (req, res) => {
  // define search id
  const searchId = req.params.id;

  // get one guest
  const event = await eventModel.find({ id: searchId });

  // return guests
  res.json(event);
});

// add event query
router.post("/", async (req, res)=>{
  const events = await eventModel.insertMany(req.body);
   const response= {
    responsecode: "1000",
    responsemessage:"user added successfully",
   }
});

module.exports = router