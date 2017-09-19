var express = require('express');
var favouritesRouter = express.Router();

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/codeBootcamps", function(error, database){
    db = database;
});

// Show
favouritesRouter.get("/", function(request, response){
    db.collection("favourites").find().toArray(function(error, results){
    response.json(results);    
    });
});

// Create
favouritesRouter.post("/", function(request,response){
    console.log(request.body);
    db.collection("favourites").insertOne(request.body, function(error, results){
        response.json(results);
    })
})


module.exports = favouritesRouter;