var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ResearchSchema = new Schema({
  address: {type: String},
  title: {type: String},
  description: {type: String},
  assigned: [{ address: String, verdict: String }],
  needed: Number
});
module.exports = mongoose.model('Research', ResearchSchema);
