var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/users", (req, res)=>{
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var phone = req.body.phone;


  res.send({saved: true});
})

router.post("/users/login", (req, res)=>{
  
  res.send({loggedin: true});
})

module.exports = router;
