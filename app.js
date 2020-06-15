//var decl
  var express       =require("express"),
      app           =express(),
      mongoose      =require("mongoose"),
      indexRoutes   =require("./routes/index");

/*//mongo 
mongoose.connect('mongodb://localhost:27017/final_project', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false });
  */ 

//use
app.set("view engine","ejs");
app.use("/", indexRoutes);


//port
app.listen(3000,function(){
     console.log("travelog has started in port 3000");
  });
     