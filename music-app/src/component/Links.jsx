/*///////////////////////////////         step 2
        import the same stuff from react and styled-components as in the last file plus...
        we'll also import {Link} from react-router-dom

        This last one is what we'll use to create our links to our List and Create pages

        We're going to create three styled components here, all divs so we use
        styled.div.attrs and then we'll pass a class to each with no style stuff
        at the end of each...
        we did that here but it must be in the
             main Album___ pages...

        The three styled components we'll create will be called Collapse,
        List and Item*/


import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

/*
        add a className to each with the following class assignments in the same
        syntax as before:
        Collapse   className:'collapse navbar-collapse'
        List       className:'navbar-nav mr-auto'
        Item        className:'collapse navbar-collapse'

        We're referencing bootstrap classes in our code here...
        thats another little perk we get with using styled-components
        Now that we have those HTML components declared,
        we can create out main component
        Same start as before.. we'll call this component Links
        Once we have this set up, we'll start with a new kind of React thing
        called a fragment
        React allows for grouping together child elements into a fragment for
        embedding in other components... that's what we're going to do here
        We'll start by adding <React.Fragment> and its closing tag to our return (   )*/


const Collapse= styled.div.attrs({
    className:'collapse navbar-collapse'

})``
const List= styled.div.attrs({
    className:'navbar-nav mr-auto'
})``
const Item = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``

/*
        inside this,
        -->we'll add a Link component followed by
        ----> a Collapse component...
        -------> Inside Collapse, we'll add one List containing two Item components...

        get our stuff together...
        The Link component is exactly that...
             reacts version of an <a>...
             it takes two things: a target and some text to display.
             the target will be a path

        notice how all of these components are added like regular html
        we'll add the Link params similarly...
                     to="/"     and       className="navbar-brand"

        that goes inside the opening Link tag
                 like <Link  to="" ... >

               <Link to="/" className="navbar-brand">CWEB 602 MERN Application</Link>

        We'll add one of these to each of the Item tags as well for our links to
        the list and create views

        so for the first Item, we'll add a Link with
                 to="" set to /music/list
                 because that will be the route path to that view in our application
                 (we'll be setting this up later)
        The Link text for this first one will be List Albums
        its className="" will be nav-link



        Now add the second Item Link the same way with the same className,
        the route path set to /music/create  and the text set to Create Album...

        Note these routes aren't what is in our backend
        these are routes we will setup within the frontend to point to particular
        frontend views that we'll create

        once you have the second link done, add the export line at the end,
        exporting Links  */

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">CWEB 602 MERN Application</Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/music/list" className="nav-link">List Album</Link>
                        </Item>
                        <Item>
                            <Link to="/music/create" className="nav-link">Create Album</Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }
}


export default Links;
