var researchModel = require('../models/research.model');
var Datastore = require('nedb');
researches = new Datastore({ filename: 'data/researches.db', autoload: true });
module.exports = {
  find: function(req, res){
    console.log("finding all");
    viewResearches = [];
    researches.find({_id: { $exists: true}}, function(err, r) {
      if(err) {
        console.log(err);
      }
      if(r){
        console.log(r);
        for(var x = 0; x < r.length; x++){
          viewResearches.push({
            title: r[x].title,
            description: r[x].description,
            assigned: r[x].assigned,
            needed: r[x].needed,
            id: r[x]._id
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
    researches.update({"_id": to}, { $push: { assigned: { "assigned": address, "verdict": verdict}}}, function(err){
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
  },
  add: function(req, res){
    console.log("adding a new");
    title = req.body.title;
    address = req.body.address;
    description = req.body.description;
    assigned = [];
    needed = 3;
    researches.insert({'title': title, 'description': description, 'assigned': assigned, 'needed': needed, 'address': address}, function (err, newDoc) {
      if(err){
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
