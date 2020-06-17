var mongoose = require("mongoose");

//schema
var userSchema=new mongoose.Schema({
    username:String,
    name:String,
    email:String,
    phoneno:Number,
    password:String

});

module.exports=mongoose.model("User",userSchema);