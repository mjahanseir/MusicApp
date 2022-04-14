////////////////////////////////         step 3
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

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        );
    }
}
export default NavBar;