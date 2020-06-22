
var mongoose = require("mongoose");

//schema

var visitedschema =new mongoose.Schema({
    city:String,
    photourl:String,
    description:String,
    date:Date,
    isVisited:  Boolean,
    isbucketlist:  Boolean
    
});

module.exports=mongoose.model("Visited",visitedschema);