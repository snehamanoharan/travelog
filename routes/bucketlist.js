
var express  =require("express");
var router   =express.Router();


//main
router.get("/",function(req,res){
   res.render("./bucketlist/index")
});
//new
router.get("/new",function(req,res){
    res.render("./bucketlist/new");
});
//newpost
router.post("/",function(req,res){
    res.redirect("/bucketlist");
});
//show
router.get("/:id",function(req,res){
     res.send("show");
});
//edit
router.get("/:id/edit",function(req,res){
    res.render("./bucketlist/edit")
 });
//update
router.put("/:id",function(req,res){
    res.redirect("/bucketlist/"+bucketlist_id)
});
 router.delete("/:id",function(req,res){
     res.redirect("/bucketlist");
 });
module.exports=router;