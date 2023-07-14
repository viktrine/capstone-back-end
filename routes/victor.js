
// get dependencies
const express = require('express');
const router = express.Router();

// create an endpoint
router.get("/", (req, res) =>{
    res.send("Hello Victor");
});

module.exports = router;