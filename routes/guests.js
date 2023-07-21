// import express
const express = require("express");

// get model
const guestModel = require("../models/guestmodel");

// defn=ine router
const guestRouter = express.Router();

// add guest
guestRouter.post("/", async function (req, res, next) {
  // get the number of existing guests
  const nextId = (await guestModel.count()) + 1;

  // get the body
  const guest = req.body;
  guest.id = nextId;

  // add guest
  guestModel.insertMany(guest);

  // create response
  const response = {
    responsecode: "1000",
    responsemessage: "Guest added successfully",
  };

  res.send(response);
});

// get all guests
guestRouter.get("/", async (req, res) => {
  // get all the guests
  const guests = await guestModel.find();

  // return guests
  res.json(guests);
});

// get one guest
guestRouter.get("/:id", async (req, res) => {
  // define search id
  const searchId = req.params.id;

  // get one guest
  const guest = await guestModel.find({ id: searchId });

  // return guests
  res.json(guest);
});

// edit a guest
// add guest
guestRouter.put("/:id", async function (req, res, next) {
  // define edit id
  const editId = req.params.id;

  // get the body
  const guest = req.body;

  // add guest
  await guestModel.updateOne({ id: editId }, guest);

  // create response
  const response = {
    responsecode: "1000",
    responsemessage: "Guest updated successfully",
  };

  res.send(response);
});

// get one guest
guestRouter.delete("/:id", async (req, res) => {
  // define response
  let response = null;
  // define delete id
  const deleteId = req.params.id;

  // check if guest there
  const guest = await guestModel.find({ id: deleteId });

  if (guest.length < 1) {
    response = {
      responsecode: "4000",
      responsemessage: "Guest not found for deleting",
    };
  } else {
    // delete a user
    await guestModel.deleteOne({ id: deleteId });
    response = {
      responsecode: "1000",
      responsemessage: "Guest deleted successfully",
    };
  }
  res.send(response);
});

// export router
module.exports = guestRouter;
