// import express
const express = require('express');

// defn=ine router
const guestRouter = express.Router();

// logic here

guestRouter.get("/", function(req, res, next){
    res.send("Get all guests under construction");
})

// export router
module.exports = guestRouter;