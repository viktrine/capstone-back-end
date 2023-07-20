const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  "name": {type:String},
  "location": {type:String},
  "date": {type:String},
  "startTime": {type:String},
  "endTime": {type:String}
});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;