var mongoose = require("mongoose");

//schema

var bucketlistSchema =new mongoose.Schema({
    city:String,
    photourl:String,
    description:String,
    date:Date,
    option1: { type: Boolean},
    option2: { type: Boolean}
    
});

module.exports=mongoose.model("Bucketlist",bucketlistSchema);