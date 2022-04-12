////////////////////////////////         step 3
//start with the same first two imports as the last two for react and styled

// NavBar puts Logo and Links together so we need to import those into here...
// add an import for each of these...
// remember when you import something thats a default, you dont use the { }

// before we create our main component, we create a couple of styled ones...

// create styled div called Container and one called Nav as before...
// set them both up ready to add class names and this time we'll use the ``at the end

import React, {Component} from 'react';
import styled from "styled-components";
import Link from "./Link";
import Logo from "./Logo";
const Container= styled.div.attrs({
    className:'container'
})`height: 150px;`

const Nav= styled.div.attrs({
    className:'navbar navbar-expand-lg navbar-dark bg-dark'
})`margin-bottom: 20px;`

///  the classname for container is just 'container'
// for Nav, its 'navbar navbar-expand-lg navbar-dark bg-dark'
// now we're going to add a set of `` to each.
// these are for adding style properties and the syntax is just as
// it would be in a css file...  property:  value;

// for Container, add a height property with value 150px

// for Nav, add a margin-bottom property with a value of 20px;

// Once thats done, we'll create our NavBar component and add the above pieces...

// this one will be really straightforward as there are no parameters,
// just the components...

// first a Container which will contain a Nav which will contain
// the Logo and Links components

// Note the last two are done as self terminating tags  <    />
// rather than a pair like the others


export default NavBar;
