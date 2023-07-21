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
    responsemessage: "user added successfully",
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

// export router
module.exports = guestRouter;