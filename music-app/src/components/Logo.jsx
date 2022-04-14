/*///////////////////////////////         step 1
        we'll import both React and {Component} from react and
        then import styled from the styled-components package on a second line.
        These are just imports, not creating variables with require
        then import the svg file as '../logo.svg' */


import React, {Component, createContext} from "react";
import styled from "styled-components";
import logo from "../logo.svg";

/*
        "styled-components" This is a package that allows us to use basically CSS to
        create react components within our files
        use it to create basically like HTML pieces as components within our app

        first we're going to declare a const variable called Wrapper and assign it
        code from styled.a.attrs so start with that

        styled.a.attrs is actually method that will take an object as a parameter
        which is a list of css class assignments

        in this case, create an <a> components and now want to set a
        bootstrap class to it
        the <a> components is Wrapper
        the class, to set is 'navbar-brand' so inside () for styled.a.attrs
        is {} which then has a className: 'navbar-brand' */

const Wrapper= styled.a.attrs({
    className: 'navbar-brand'
})``  //////--->>>>  after the }) are two back ticks


/*      In this case its empty but this part of the syntax allows us to also
        set separate style on the components as well after setting a class

        we'll do that in one of the other navbar files
                ------------------------------------------------------
        So now we'll create our logo using Wrapper.
        create a class called Logo that extends Component.
        add both render() and then return inside of that as our usual components
        starting point.

        add your Wrapper components inside of return (   )
        Its a react components so <Wrapper> and the ending tag as well and then
        we'll add some more code to it */
class Logo extends Component {
    render() {
        return (
            <Wrapper href="www.google.ca">
                <img src={logo} width="50" height="50" alt=""/>
            </Wrapper>
        );
    }
}
/*
        Remember, Wrapper is an <a> tag. so <a> tags look like:
        <a href=""> some text or an image </a>
        So we'll need to add those things but within Wrapper...

        <a> is same as <Wrapper> therefore:
         <a href="   "> would be <Wrapper href="   "> you can put whatever you
         like in the "" for a URL

         then between the tags is the same as in between <a> and </a> where you put
         link text or, in our case, link image

          so add an <img tag with three attributes inside it for height width and alt
          set the height and width to 50 and the alt to whatever you like

        Remember one of the things we get from using .jsx rather than just .js...
        the ability to directly reference values in your code as embedded objects.
        We want to use the logo image here so we can just set src= to logo but
        make sure its enclosed in {}

        Note that its lowercase to point to logo that we imported at the top and
        not Logo our components.*/

export default Logo;

