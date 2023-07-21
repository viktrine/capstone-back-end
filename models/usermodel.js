const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    "name":{type:String},
    "id":{type:String},
    "email":{type:String},
    "password":{type:String},
    "phone":{type:String}
});

const usermodel = mongoose.model("user",userschema);
module.exports=usermodel;

