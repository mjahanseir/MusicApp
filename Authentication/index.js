//  npm i passport passport-local passport-local-mongoose express mongoose body-parser express-session
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  localStrategy = require("passport-local"),
  User = require("./model/user"),
  expressSession = require("express-session");

mongoose.connect("mongodb://192.168.75.128:27017/auth_demo");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: "sjhdklfhsdhfsdf24524s5fdsdfsdflklkfd85",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

////////////////////////////////////////////// Routes //////////////////////////////////////////////

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});

///////////////////////Auth Route

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  req.body.username;
  req.body.password;

  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (error, user) {
      if (error) {
        console.log(error);
        return res.render("register");
      }
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secret");
      });
    }
  );
});


///////////////////// Login Form

app.get("/login", function (req, res) {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("Local", {
    successRedirect: "/secret",
    failureRedirect: "login",
  }),
  function (req, res) {}
);
