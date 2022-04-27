

# Authentication For MERN Applications
        1- Introduction
        2- General Process
        3- Create a model for a user
        4- Create views
        5- Set up server file
        6- Create Routes

### 1- Introduction
An important topic for any application is security. In the case of a MERN application like ours, one main concern is authenticated access to the application. You may want or need to set up your application such that a user has to login first before using it. This can be for various security considerations and it can also be used to provide a personalized experience as well.

- Terminology

Authentication - confirming that a user is, in fact, a legitimate user to our application

Authorization - upon confirmation, what are they allowed to do/access

Encryption - 'scrambling' data to hide it. Within authentication processes, a particular type of encryption called hashing is used to store passwords for additional security.

- Technology

In our case, we will be using a Nodejs package called Passport for authentication. There a large amount of option for authentication types from basic username and password combinations to using social media accounts to authenticate or other proprietary technologies. One of the significant advantages of Passport is that it will support a large variety of these methods. Currently, Passport lists over 500 authentication 'strategies' that it can use. A strategy to Passport is a particular authentication method. For example, we'll use simple username/password authentication. This is referred to as 'local' strategy by Passport.

Passport acts as a middleware for our application. What this means is that it will function in the 'middle' of our functioning, specifically between the two primary sections of communication in our app. Recall that web communication works on a two-part basis:

1. first a request from a client browser to a server
2. a response from the server back to the client

Passport goes in between these two to authenticate the requesting user before the requested info will be provided. The result is:
1.  a request is made by a client browser to a server
2.  the server prompts the user to login or register as a user
3.  if #2 is completed successfully, the server will respond with the requested data
In the following pages, we'll look at how to set this up.




### 2- General Process
There are a series of steps that will be required to properly set up authentication. Ultimately, we'll need to define what a user is and be able to store users. We'll then need to use Passport along with this data to perform our authentication. We also need some way to 'register' users in addition to authenticating them. Finally, we'll need to be able to check whether a user is already authenticated.


- Roadmap

We'll start by defining a user. This will require creating a mongoose model as we did previously. We'll add a plugin to our model to handle some of the implementation details for handling the user.

Next we'll set up all the supporting packages in our main application. While this will be similar to begin with, it will also entail some new packages such as passport and ejs.

Next we'll create our different page views. Since this is a very simple app, our views will also be kept simple. While we could create a React view, it isn't necessary. The files we create will be ejs files and will contain basic html code.

Finally, we'll define our additional routes. That will mean routes for logging in and also for registering. We will have one 'secret' route which will be protected and only accessible once logged in.


- Initialization

Create your main js file in a directory as your project directory and run npm init to get started. Create two directories here, one called models and one called views. Ensure the second is called 'views' as this will be important for ejs.

Run your package installation. You will need to install the following:
        
        body-parser - to parse form data
        ejs - this will be our view engine to create front facing pages
        express
        express-session - this will allow us to create sessions
        mongoose
        passport - main authentication package
        passport-local - authentication strategy
        passport-local-mongoose - helper for authentication with mongoose


### 3- Create a model for a user
The first thing we need to do here is create our model file so create a basic js file inside the models directory. I called mine user.js.

Much of this will be the same as what we've done previously. Follow the following steps:

1. Create the basics you need to start:

    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

2. Define your Schema object
    
       const UserSchema = new Schema( {
       username: {type: String, required: false},
       password: {type: String, required: false}
       } )


3. Add plugin for passport. While it isn't necessarily required, this plugin saves a lot of effort later. Normally, you have to write your own code to perform authentication and registration of users. This plugin provides those methods:

   * authenticate - perform authentication
   * register - save a new user to mongo
   * serializeUser - add user info to the session
   * deserializeUser - read user info from the session

Add the following code to the top, right after your first two lines and before your Schema definition

        const passportLocalMongoose = require('passport-local-mongoose')


Then add the following immediately after creating UserSchema and before you export your model

            UserSchema.plugin(passportLocalMongoose)


4. Finally, export your model

           module.exports = mongoose.model('User', UserSchema);

That's it for creating a user model.


### 4- Create views

Here we'll use ejs to create our various pages. EJS is a node package that allows you to create files with html and embedded javascript. An ejs file will look like html without the usual block level structure tags like <html> or <body>. Make sure you've save the files in a 'views' directory because ejs in your server will look for that directory and expect it along with the files you specify inside it.

Start by creating four files inside the views directory:

1. home.ejs
2. login.ejs 
3. register.ejs 
4. secret.ejs 

5. The first will be a simple starting point. The last one is the location we want to protect and will only be accessible via authentication. The other two will provide the front end forms for the login and registration processes. All four files will have some small bit of content and all will have the same set of navigation links.

   - Home

           <h1>This is the Home page!!!</h1>
           <li><a href="/register">Sign Up!</a></li>
           <li><a href="/login">Login!</a></li>
           <li><a href="/logout">Logout!</a></li>
   
   - Secret

             <h1>This is the SECRET page</h1>
              <p> You found it!!!!</p>
              <li><a href="/register">Sign Up!</a></li>
              <li><a href="/login">Login!</a></li>
              <li><a href="/logout">Logout!</a></li>

- Login

The login view requires a simple form consisting of a username and password field. This is all just a straightforward form but note a couple of things. The form action is a route not a file reference. Be careful with the name parameters because these will be important when handling what our server gets from this form.

            <h1>Login</h1>
            <form action="/login" method="POST">
                <input type="text" name="username" placeholder="username">
                <input type="password" name="password" placeholder="password">
                <button>Login</button>
            </form>
            
            <li><a href="/register">Sign Up!</a></li>
            <li><a href="/login">Login!</a></li>
            <li><a href="/logout">Logout!</a></li>


Register

The registration form look identical to the login form except it gets sent to a registration route rather than a login route. This is what allows you to create a user that can be used to login. What is entered here will be sent to the database to be saved as User objects.

            <h1>SIGN UP!!!!!</h1>
            
            <!-- start without form filled in or name fields added -->
            <form action="/register" method="POST">
                <input type="text" name="username" placeholder="username">
                <input type="password" name="password" placeholder="password">
                <button>Submit</button>
            </form>
            
            <li><a href="/register">Sign Up!</a></li>
            <li><a href="/login">Login!</a></li>
            <li><a href="/logout">Logout!</a></li>

- SIGN UP!!!!!

    start without form filled in or name fields added -->


                <h1>Sign up!</h1>
                
                <form action="/register" method="post">
                    <input type="text" name="username" placeholder="username">
                    <input type="password" name="password" placeholder="password">
                    <button>Register</button>
                </form>
                
                <li><a href="/register">Sign Up!</a></li>
                <li><a href="/login">Log in!</a></li>
                <li><a href="/logout">Log out!</a></li>


### 5- Set up server file

We can now do the basic set up steps for our main server file. First import our packages:

        const express = require('express'),
        app = express(),
        mongoose = require('mongoose'),
        passport = require('passport'),
        bodyParser = require('body-parser'),
        LocalStrategy = require('passport-local'),
        expressSession = require('express-session');


This can be done all as one long statement as above or separately. Next declare our user object by requiring our user.js file

        User = require('./models/user');

Create a connection to the mongo database you are using:

        mongoose.connect("mongodb://localhost:27017/auth_demo");

Here, we're creating a database called auth_demo. You can use whatever you like for that part as it will be created automatically.

Next, we have several things to set up. To start with, add ejs and body parser.

        app.set('view engine', 'ejs');
        app.use(bodyParser.urlencoded({extended: true}));

The next part is to set up express session. This is important because if you don't use a session of some kind, the user will have to authenticate for every authenticated page. Using a session means their authentication status is stored so they only log in once. express session and passport session will work together in this case. Express session is responsible for establishing a session and creating a session cookie. Passport session will add the user object to the cookie and manage reading/writing info from/to it. Because of this, express session has to be first in your code and then passport set up after that.

Express session:

        app.use(expressSession({
        secret: "jhadsfiuqyw4ihaskjhlseqyr39pqcyew9",
        resave: false,
        saveUninitialized: false
        }));

The secret is used to sign the session and can be any string you like. It should be long and random. The other two params are essentially to prevent auto writing of data to the session cookie.

Next we start passport session:

        app.use(passport.initialize());
        app.use(passport.session());

Now we need to establish the authentication strategy that passport will use. In our case, we are using 'local' authentication which means a locally stored username and password combination. When specifying the strategy, we'll create a strategy object by passing an authentication method to its constructor as follows:

        passport.use(new LocalStrategy(User.authenticate()));

Note how we get the authentication method from our User object. this is the authenticate() method we got from passport-local-mongoose. Without this, we'd have to write code to get user info from a database, compare it to what the user entered to authenticate, etc and then pass that to the strategy constructor.

Finally, we'll set the serialization methods for passport for reading/writing user info from the session.

        passport.serializeUser(User.serializeUser());
        passport.deserializeUser(User.deserializeUser());

These also would have to be written if we weren't getting them from the User object and are also from passport-local-mongoose.

That completes the set up of our server file.

### 6- Create Routes

We can start by creating the authentication-related routes. First, the registration routes.

Registration Routes

The front end view for this is already done in the file register.ejs so we just need to create a route to render it:

        app.get('/register', function(req,res){
        res.render('register');
        })

This is very simple and just needs to present the user with a form to enter the username and password they want to use. The view will send the form data to the next route we need which will be the post route for this pair.

Start with the skeleton first:

        app.post('/register', function(req,res){
        })

The first code to add here is get references to the username and password being passed in:

    req.body.username
    req.body.password
With these, we'll call the Register method that was added to the User model when we added passport-local-mongoose.

    User.register(new User({username: req.body.username}), req.body.password, function(error,user){
        if (error) {
            console.log(error)
            return res.render('register')
        }
        // Completion code here for after successful registration
    })
Note that the User constructor only includes the username and the password is separated. This is because we don't want to save the password directly. The Register method will take the password and hash it. It will then create a new User document containing the username, password hash and salt. The bit of code under that is just some error handling. There is a comment left though, under that. Once the user has been added, we have to decide what we want to do next. As a general rule, you either forward the user to the login page to log in using their newly created credentials or you log them in automatically with those credentials. We're going to do the latter.

    User.register(new User({username: req.body.username}), req.body.password, function(error,user){
        if (error) {
            console.log(error)
            return res.render('register')
        }
        // Completion code here for after successful registration
        passport.authenticate('local')(req,res, function(){
            res.redirect('/secret')
        })
    })
That's it for registration. Now we create the log in routes.

- Log In Routes

As with registration, we display a form for the user. In this case, the form is for them to enter their username and password and then click the button to login.

        app.get('/login', function(req,res){
        res.render('login')
        })
Next we have another post route to do the processing for logging in. The is much simpler as we really just have to call the 'authenticate' method that is in passport which we got from User which was part of the passport-local-mongoose package. Calling this gives us access to two parameters for failed or successful login:

        successRedirect
        failureRedirect

we can simply specify the route we want to redirect to in either case. If you want to do some additional processing, you can leave either of these or both out and handle these cases in the regular part of the code. Otherwise the main code block can remain blank.

        app.post('/login', passport.authenticate('local', {
        successRedirect: '/secret',
        failureRedirect: '/login'
        }), function(req,res){
        
        })
Notice how the call to passport.authenticate is between our usual code for route and callback function. That's why it referred to as middleware. That's it for the login routes. The last route we need is the authenticated 'secret' route.

- Authenticated Route

The authenticated route is a simple get route but we need to be able to check if the requesting user is authenticated. This will configured as another middleware but we will write this as our own function. First, we'll create a function isLoggedIn to check. This function will have three parameters: req, res and next. It will get these from the route its used in. req will have a new method added to it by passport called isAuthenticated. We can use this and call next if it succeeds. Next() really just means 'continue as you were'. It will pass us along to whatever route we were headed to when we stopped in this middleware.

        function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
        return next()
        }
        res.redirect('/login')
        }
Now we can write the secret route with this function added in as a middleware:

        app.get('/secret', isLoggedIn, function(req,res){
        res.render('secret')
        })
So we're headed to the /secret route but get stopped at isLoggedIn. We either go next() to the callback and render the secret view or get redirected to /login inside the isLoggedIn middleware function.