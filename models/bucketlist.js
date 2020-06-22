var mongoose = require("mongoose");

//schema

var bucketlistSchema =new mongoose.Schema({
    city:String,
    photourl:String,
    description:String,
    date:Date,
    isVisited: Boolean,
    isBucketlist: Boolean
    
});

module.exports=mongoose.model("Bucketlist",bucketlistSchema);