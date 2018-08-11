var researchModel = require('../models/research.model');
var mongoose = require('mongoose');
module.exports = {
  find: function(req, res){
    viewResearches = [];
    researchModel.find({}, function(err, researches) {
      if(err) {
        console.log(err);
      }
      if(researches){
        for(var x = 0; x <= researches.length; x++){
          viewResearches.push({
            title: researches[x].title,
            description: researches[x].description,
            assigned: researches[x].assigned,
            needed: researches[x].needed,
            id: researches[x]._id
          });
        }
        res.json({
          'research': viewResearches
        });
      }
    });
  },
  assign: function(req, res){
    address = req.body.address;
    to = req.body.to;
    verdict = "Pending";
    researchModel.update({"_id": mongoose.Types.ObjectId(to)}, { $push: { "assigned": address, "verdict": verdict}}, function(err){
      if(err){
        console.log(err);
        res.json({
          'done': false
        });
      }
      else{
        res.json({
          'done': true
        });
      }
    });
  }
};
