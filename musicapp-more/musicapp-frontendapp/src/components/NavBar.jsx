import React, {Component} from 'react';
import styled from "styled-components";
import Links from "./Links";
import Logo from "./Logo";

const Container= styled.div.attrs({
    className:'container'
})`height: 150px;`
const Nav= styled.div.attrs({
    className:'navbar navbar-expand-lg navbar-dark bg-dark'
})`margin-bottom: 20px;`
class NavBar extends Component{
    render() {
        return(
            <React.Fragment>
                <Container>
                    <Nav>
                        <Logo />
                        <Links />
                    </Nav>
                </Container>
            </React.Fragment>
        );
    }
}
export default NavBar;