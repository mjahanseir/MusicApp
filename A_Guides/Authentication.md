

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
1- a request is made by a client browser to a server
2- the server prompts the user to login or register as a user
3- if #2 is completed successfully, the server will respond with the requested data
In the following pages, we'll look at how to set this up.


### 2- General Process

### 3- Create a model for a user

### 4- Create views

### 5- Set up server file

### 6- Create Routes
