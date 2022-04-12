////////////////////////////////         step 4

//That's it for our three main jsx files.
// Now we also created an index.js file in the same directory and
// we said we'd use it to "roll together"
// these other three and export them out from one place...
//////////////////////////////////////////////////////////////////////////

// so index.js is very simple...
// it just imports each of the 3 jsx components and then has one export line
// which is not default but, rather, 1 that uses { } and lists the three from here

// so start by adding 1 import line for each jsx the same as you did the 2 in NavBar

// then export (   } with the three Links, Logo, NavBar listed inside
// the curly brackets... that's it for index.js and that's it for the component
// folder and the NavBar



import React, {Component} from 'react';
import Link from "./Link";
import Logo from "./Logo";
import NavBar from "./NavBar";

export {NavBar, Logo,Link}