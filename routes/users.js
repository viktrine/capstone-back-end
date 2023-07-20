var express = require('express');
const usermodel = require('../models/usermodel');
var router = express.Router();
usermodel
/* GET users listing. */
router.get('/', async function(req, res, next) { 
const users = await usermodel.find();
  res.json(users);
});


router.post("/", async (req, res)=>{
  const users = await usermodel.insertMany(req.body);
  
const response = {"responsecode":"1000","responsemessage":"user added successfully"}

  res.json(response);
})



module.exports = router;
