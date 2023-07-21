// get mongoose
const { default: mongoose } = require("mongoose");

// create a schema
const guestschema = new mongoose.Schema({
    "name":{type: String, required: true},
    "phone":{type: String, required: true},
    "host":{type: String, required: true},
    "idno":{type: String, required: true},
    "event":{type: String, required: true}
});

// define model
const guestModel = mongoose.model("guest", guestschema);

module.exports = guestModel;