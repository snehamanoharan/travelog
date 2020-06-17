var express  =require("express");
var router   =express.Router();
//show
router.get("/",function(req,res){
    res.render("./visited/index");
});
//new
router.get("/new",function(req,res){
    res.render("./visited/new");
});
//newpost
router.post("/",function(req,res){
    res.redirect("/visited");
});
//edit
router.get("/:id/edit",function(req,res){
   res.render("./visited/edit");
});
//update
router.put("/:id",function(req,res){
    res.redirect("/visited/"+visited_id)
});
//delete
router.delete("/:id",function(req,res){
    res.redirect("/bucketlist");
});

module.exports=router;