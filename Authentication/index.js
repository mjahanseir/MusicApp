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
