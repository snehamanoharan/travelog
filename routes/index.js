
var express  =require("express");
var router   =express.Router();
var User     =require("../models/users");
const users = require("../models/users");





router.get("/",function(req,res){
    res.render("login");
});



router.post("/login",function(req,res){
    res.redirect("/visited");
});
 
router.post("/register",function(req,res){
    var username   = req.body.username;
    var name       = req.body.name;
    var phoneno    = req.body.phoneno;
    var email      = req.body.email;
    var username   = req.body.username;
    var password   = req.body.password;
    var newUser    = new User({name:name,phoneno:phoneno,email:email,username:username,password:password});
    User.create(newUser,function(err,user){
        if(err){
              res.send(err);           
        }else{
            res.redirect("/visited");
        }
    });
});




module.exports=router;