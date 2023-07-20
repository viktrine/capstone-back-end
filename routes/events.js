const express = require('express');

const eventModel = require('../models/eventModel');

   const getalleventsRouter= express.Router();
  //  const addeventsRouter=express.Router();
   //get all events query
getalleventsRouter.get("/", async function(req, res, next){
  const events = await eventModel.find();
    res.json(events);
  res.send("Successful");
});
//add event query
// addeventsRouter.post("/", async (req, res)=>{
//   const events = await eventModel.insertMany(req.body);
//    const response= {
//     responsecode: "1000",
//     responsemessage:"user added successfully",
//    }
// });
  module.exports = getalleventsRouter;
  //module.exports = updateventsRouter;
  //module.exports = deleteeventsRouter
  //module.exports = geteventbyidRouter;
  // module.exports=addeventsRouter;