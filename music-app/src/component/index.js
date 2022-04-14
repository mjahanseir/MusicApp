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
import Link from "./Links";
import Logo from "./Logo";
import NavBar from "./NavBar";

export {NavBar, Logo,Link}

///////////////////////////////////////////////////////////////////////////////

//  summarize:

// we added the use of the styled-components package which allows us to
// create HTML components and add css styling, including assigning
// bootstrap classes to components...

// we created our navbar as separate pieces...
// logo then links then pulled them together to make the whole navbar

// we also used react Link components and React Fragments

// At this point we're ready to commit our work and also publish...
// once done, we'll also marge this particular branch in and will be
// ready for our next feature branch for our next steps...

