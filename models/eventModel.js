const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  "name": {type:String,required:true},
  "location": {type:String,required:true},
  "date": {type:String,required:true},
  "startTime": {type:String,required:true},
  "endTime": {type:String,required:true},
  "id":{type:String,required:true}
});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;