var express = require("express");
const usermodel = require("../models/usermodel");
var router = express.Router();

// list all the users.
router.get("/", async function (req, res, next) {
  const users = await usermodel.find();
  res.json(users);
});

// get one user
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await usermodel.find({ id: id });
  res.json(user);
});

// adding users.
router.post("/", async (req, res) => {
  const user = req.body;
  const id = (await usermodel.count()) + 1;
  user.id = id;
  const users = await usermodel.insertMany(user);

  const response = {
    responsecode: "1000",
    responsemessage: "user added successfully",
  };

  res.json(response);
});

// edit user
router.put("/:id", async (req, res) => {
  const user = req.body;
  const id = req.params.id;

  const users = await usermodel.updateOne({ id: id }, user);
  const response = {
    responsecode: "1000",
    responsemessage: "user updated successfully",
  };

  res.json(response);
});

// login implementation
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await usermodel.find({ email: email, password: password });
  console.log(user);
  if (user.length<1) {
    const response = {
      responsecode: "4000",
      responsemessage: "email or password is incorrect",
    };
    res.json(response);
  } else {
    const response = {
      responsecode: "1000",
      responsemessage: "login successful",
    };
    res.json(response);
  }
});

module.exports = router;
