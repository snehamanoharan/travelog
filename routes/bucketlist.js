
var express  =require("express");
var router   =express.Router();
var Bucketlist =require("../models/bucketlist");


//allvisited
router.get("/",function(req,res){
    Bucketlist.find({}, function(err, allbucketlist){
        if(err){
            console.log(err);
        } else {
           res.render("./bucketlist/index",{bucketlist:allbucketlist});
        }
     });
});
//new
router.get("/new",function(req,res){
    res.render("./bucketlist/new");
});

//newpost
router.post("/",function(req,res){
    var city=req.body.city;
    var photourl=req.body.photourl;
    var description=req.body.description;
    var date=req.body.date;
    var visited={city:city,photourl:photourl,description:description,date:date};
    Bucketlist.create(visited,function(err,bucketlist){
       if(err){
         console.log("err");
         console.log(error);
       }else{
         res.redirect("/bucketlist");
     }
    });
});
//edit
router.get("/:id/edit",function(req,res){
    Bucketlist.findById(req.params.id,function(err,foundbucketlist){
        res.render("bucketlist/edit", {bucketlist:foundbucketlist});
    });
    
 });
//update
router.put("/:id",function(req,res){
    Bucketlist.findByIdAndUpdate(req.params.id,req.body.bucketlist,function(err,updbucketlist){
        if(err){
            res.send("err");
        }else{
            res.redirect("/bucketlist");
        }
    });
   });
   //delete
 router.delete("/:id",function(req,res){
    Bucketlist.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/bucketlist");
        } else {
            res.redirect("/bucketlist");
        }
     });
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