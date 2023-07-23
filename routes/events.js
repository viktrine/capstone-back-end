const express = require("express");

const eventModel = require("../models/eventModel");

const router = express.Router();

//get all events query
router.get("/", async function (req, res, next) {
  const events = await eventModel.find();
  res.json(events);
});


//find event by ID
router.get("/:id", async (req, res) => {
  // define search id
  const searchId = req.params.id;

  // get one event
  const event = await eventModel.find({ id: searchId });

  // return event
  res.json(event);
});

// add event query
router.post("/", async function (req, res, next) {
  // get the number of existing event
  const nextId = (await eventModel.count()) + 1;

  // get the body
  const event = req.body;
  event.id = nextId;

  // add event
  eventModel.insertMany(event);

  // create response
  const response = {
    responsecode: "1000",
    responsemessage: "Event added successfully",
  };

  res.send(response);
});
// get one Event
router.delete("/:id", async (req, res) => {
  // define response
  let response = null;
  // define delete id
  const deleteId = req.params.id;

  // check if event there
  const event = await eventModel.find({ id: deleteId });

  if (event.length < 1) {
    response = {
      responsecode: "4000",
      responsemessage: "Event not found for deleting",
    };
  } else {
    // delete an event
    await eventModel.deleteOne({ id: deleteId });
    response = {
      responsecode: "1000",
      responsemessage: "Event deleted successfully",
    };
  }
  res.send(response);
});

// edit a event
// add guest
router.put("/:id", async function (req, res, next) {
  // define edit id
  const editId = req.params.id;

  // get the body
  const event = req.body;

  // add guest
  await eventModel.updateOne({ id: editId }, event);

  // create response
  const response = {
    responsecode: "1000",
    responsemessage: "Event updated successfully",
  };

  res.send(response);
});

module.exports = router;
