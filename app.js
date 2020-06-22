

//var decl
  var express       =require("express"),
      app           =express(),
      mongoose      =require("mongoose"),
      bodyParser    =require("body-parser"),
      methodOverride=require("method-override"),
      passport      =require("passport"),
      localStrategy =require("passport-local"),
      passportLocMon=require("passport-local-mongoose"),
      flash         =require("connect-flash"),
      indexRoutes   =require("./routes/index"),
      visitedRoutes =require("./routes/visited"),
    bucketlistRoutes=require("./routes/bucketlist"),
     User           =require("./models/users"),
     Visited        =require("./models/visited"),
     Bucketlist     =require("./models/bucketlist");

//mongoose
var Mongoose  = require("mongoose");
mongoose.connect("mongodb+srv://admin:Adminpw@travelog-c37ry.mongodb.net/travelog?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});

//passport

app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
  secret: "miwoooowooff",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//users
app.use(flash());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public")); 
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.use("/", indexRoutes);
app.use("/visited",visitedRoutes);
app.use("/bucketlist",bucketlistRoutes);
app.set("view engine","ejs");

//port
app.listen(3000,function(){
     console.log("travelog has started in port 3000");
  });
     