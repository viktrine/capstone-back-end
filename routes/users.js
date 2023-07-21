var express = require("express");
const usermodel = require("../models/usermodel");
var router = express.Router();

// list all the users.
router.get("/", async function (req, res, next) {
  const users = await usermodel.find();
  res.json(users);
});

// get one user
router.get("/:id",async (req, res) => {
  const id = req.params.id;
  const user = await usermodel.find({"id":id});
  res.json(user);
})

// adding users.
router.post("/", async (req, res) => {
  const user = req.body;
  const id = await usermodel.count()+1;
  user.id = id;
  const users = await usermodel.insertMany(user);

  const response = {
    responsecode: "1000",
    responsemessage: "user added successfully",
  };

  res.json(response);
});

module.exports = router;
