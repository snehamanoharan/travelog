const { Mongoose } = require("mongoose");

//var decl
  var express       =require("express"),
      app           =express(),
      mongoose      =require("mongoose"),
      bodyParser    =require("body-parser"),
      indexRoutes   =require("./routes/index"),
      visitedRoutes =require("./routes/visited"),
    bucketlistRoutes=require("./routes/bucketlist"),
     User           =require("./models/users");
//use

mongoose.connect("mongodb://localhost:27017/travelog",{useNewUrlParser:true,useUnifiedTopology:true});

app.use(bodyParser.urlencoded({extended:true}));
app.use("/", indexRoutes);
app.use("/visited",visitedRoutes);
app.use("/bucketlist",bucketlistRoutes);
app.set("view engine","ejs");

//port
app.listen(3000,function(){
     console.log("travelog has started in port 3000");
  });
     