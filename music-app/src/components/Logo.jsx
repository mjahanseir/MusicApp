////////////////////////////////         step 1

import React, {Component, createContext} from "react";
import styled from "styled-components";
import logo from "../logo.svg";

const Wrapper= styled.a.attrs({
    className: 'navbar-brand'
})``  

class Logo extends Component {
    render() {
        return (
            <Wrapper href="www.google.ca">
                <img src={logo} width="50" height="50" alt=""/>
            </Wrapper>
        );
    }
}


export default Logo;
