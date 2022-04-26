// react-router-dom
// styled-components
// bootstrap

import React,{Component} from "react";
import styled from 'styled-components';
import logo from '../logo.svg';

const Wrapper = styled.a.attrs({
    className:'navbar-brand'
})``

class Logo extends Component{
    render() {
        return(
            <Wrapper hre={"www.google.ca"}>
                <img src={logo} width="50" height="50" alt=""/>
            </Wrapper>
        );
    }
}
export default Logo;
