// get mongoose
const { default: mongoose } = require("mongoose");

// define a parking model
const parkingSchema = new mongoose.Schema({
    "id":{type:String},
    "building":{type: String ,required: true},
    "location":{type: String ,required: true},
    "number":{type: String ,required: true},
    "available":{type: Boolean ,required: true},
});

// create a model
const parkingModel = mongoose.model("parking", parkingSchema);

// export module
module.exports = parkingModel;