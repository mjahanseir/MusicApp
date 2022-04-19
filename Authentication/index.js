//  npm i passport passport-local passport-local-mongoose express mongoose body-parser express-session
const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    localStrategy = require("passport-local"),
    User = require("./model/user"),
    expressSession = require("express-session");