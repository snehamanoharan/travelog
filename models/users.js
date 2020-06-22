var mongoose = require("mongoose");
var passportLocMon=require('passport-local-mongoose');

//schema
var userSchema=new mongoose.Schema({
    username:String,
    name:String,
    email:String,
    phoneno:Number,
    password:String

});
userSchema.plugin(passportLocMon);
module.exports=mongoose.model("User",userSchema);