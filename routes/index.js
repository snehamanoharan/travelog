
var express  =require("express");
var router   =express.Router();
var passport =require("passport");
var User     =require("../models/users");


//main page
router.get("/",function(req,res){
    res.render("login");
});
//show register form
router.get("/register",function(req,res){
    res.render("login");
});

 //register handle
router.post("/register",function(req,res){
    var username   = req.body.username;
    var name       = req.body.name;
    var phoneno    = req.body.phoneno;
    var email      = req.body.email;
    var username   = req.body.username;
    var newUser    = new User({name:name,phoneno:phoneno,email:email,username:username});
    User.register(newUser,req.body.password,function(err, user){
        if(err){
            return res.render('login');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/visited");
        });
    });
});
//show login form
router.get("/login",function(req,res){
    res.render("login");
});
//handling login
router.post("/login",passport.authenticate("local",
{
    successRedirect:"/visited",
    failureRedirect:"/login",
}) ,function(req,res) {
});
//logout
router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/login");

});
//middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You need to be logged in to do that!");
    res.redirect("/login");
}


module.exports=router;