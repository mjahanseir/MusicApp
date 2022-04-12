////////////////////////////////         step 2
//import the same stuff from react and styled-components as in the last file plus...
// we'll also import {Link} from react-router-dom

// This last one is what we'll use to create our links to our List and Create pages

//We're going to create three styled components here, all divs so we use
// styled.div.attrs and then we'll pass a class to each with no style stuff
// at the end of each...  we did that here but it must be in the
//   main Album___ pages...

//The three styled components we'll create will be called Collapse,
// List and Item


import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

// add a className to each with the following class assignments in the same
// syntax as before:
// Collapse   className:'collapse navbar-collapse'
// List       className:'navbar-nav mr-auto'
// Item        className:'collapse navbar-collapse'

// We're referencing bootstrap classes in our code here...
// thats another little perk we get with using styled-components
// Now that we have those HTML components declared,
// we can create out main component
// Same start as before.. we'll call this component Links
// Once we have this set up, we'll start with a new kind of React thing
// called a fragment
// React allows for grouping together child elements into a fragment for
// embedding in other components... that's what we're going to do here
// We'll start by adding <React.Fragment> and its closing tag to our return (   )
const Collapse= styled.div.attrs({
    className:'collapse navbar-collapse'

})``
const List= styled.div.attrs({
    className:'navbar-nav mr-auto'
})``
const Item = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``
class Links extends Component {
    render() {
        return (
        <React.Fragment>

        </React.Fragment>
    );
    }
}


export default Links;
