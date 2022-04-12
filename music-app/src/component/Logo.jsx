////////////////////////////////         step 1
// we'll import both React and {Component} from react and
// then import styled from the styled-components package on a second line.
// These are just imports, not creating variables with require
// then import the svg file as '../logo.svg'


import React, {Component, createContext} from "react";
import styled from "styled-components";
import logo from "../logo.svg";

// "styled-components" This is a package that allows us to use basically CSS to
// create react components within our files
// use it to create basically like HTML pieces as components within our app
//
// first we're going to declare a const variable called Wrapper and assign it
// code from styled.a.attrs so start with that

// styled.a.attrs is actually method that will take an object as a parameter
// which is a list of css class assignments

//in this case, create an <a> component and now want to set a
// bootstrap class to it
// the <a> component is Wrapper
// the class, to set is 'navbar-brand' so inside () for styled.a.attrs
// is {} which then has a className: 'navbar-brand'

const Wrapper= styled.a.attrs({
    className: 'navbar-brand'
})``  //////--->>>>  after the }) are two back ticks
//In this case its empty but this part of the syntax allows us to also
// set separate style on the component as well after setting a class

// we'll do that in one of the other navbar files

// So now we'll create our logo using Wrapper.
//create a class called Logo that extends Component.
//add both render() and then return inside of that as our usual component
// starting point.

//add your Wrapper component inside of return (   )
// Its a react components so <Wrapper> and the ending tag as well and then
// we'll add some more code to it
class Logo extends Component {
    render() {
        return (
            <Wrapper>

            </Wrapper>
        );
    }
}



export default Logo;

