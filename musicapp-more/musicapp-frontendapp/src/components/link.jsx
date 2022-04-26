import React, {Component} from "react";
import styled from 'styled-components';
import{Link} from 'react-router-dom';

const Collapse= styled.div.attrs({
    className:'collapse navbar-collapse'
})``

const List= styled.div.attrs({
    className:'navbar-nav me-auto'
})``

const Item= styled.div.attrs({
    className:'collapse navbar-collapse'
})``
class Link extends Component{
    render() {
        return(
            <React.Fragment>
                <Link to='/' className='navbar-brand'> MERN APPLICATION</Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to='/music/list' className='nav-link'> list Albums</Link>
                        </Item>
                        <Item>
                            <Link to='/music/create' className='nav-link'> Create Album</Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }
}