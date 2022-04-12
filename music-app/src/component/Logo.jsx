////////////////////////////////         step 1
// we'll import both React and {Component} from react and
// then import styled from the styled-components package on a second line.
// These are just imports, not creating variables with require
// then import the svg file as '../logo.svg'


import React, {Component} from "react";
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