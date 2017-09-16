var express = require('express');
var bootcampsRouter = express.Router();

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/codeBootcamps", function(error, database){
    db = database;
});

// Show
bootcampsRouter.get("/", function(request, response){
    db.collection("bootcamps").find().toArray(function(error, results){
    response.json(results);    
    });
});


module.exports = bootcampsRouter;