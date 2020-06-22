
var express  =require("express");
var router   =express.Router();
var Bucketlist =require("../models/bucketlist");


//allvisited
router.get("/",isLoggedIn,function(req,res){
    Bucketlist.find({}, function(err, allbucketlist){
        if(err){
            console.log(err);
        } else {
           res.render("./bucketlist/index",{bucketlist:allbucketlist});
        }
     });
});
//new
router.get("/new",isLoggedIn,function(req,res){
    res.render("./bucketlist/new");
});

//newpost
router.post("/",isLoggedIn,function(req,res){
    var city=req.body.city;
    var photourl=req.body.photourl;
    var description=req.body.description;
    var date=req.body.date;
    var isVisited = req.body.isVisited;
    var isBucket = req.body.isBucket;
    var visited={city:city,photourl:photourl,description:description,isVisited: isVisited,
        isBucket: isBucket,date:date};
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
router.get("/:id/edit",isLoggedIn,function(req,res){
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
 router.delete("/:id",isLoggedIn,function(req,res){
    Bucketlist.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/bucketlist");
        } else {
            res.redirect("/bucketlist");
        }
     });
 });
//check
function isLoggedIn(req, res, next){	
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/");
}
 
module.exports=router;