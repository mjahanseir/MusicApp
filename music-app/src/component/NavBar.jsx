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


export default NavBar;
