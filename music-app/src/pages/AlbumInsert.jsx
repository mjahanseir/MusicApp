import React, {Component}  from 'react';
import apis  from '../api';
import styled  from 'style-components';

const Title= styled.h1.attrs({
    className :'h1'
})``

const Wrapper= styled.div.attrs({
    className :'form-group'
})`
margin: 0 30px;
`

///////lable input and setting up
const Label= styled.label` margin:5px; `

const InputText= styled.input.attrs({
    className: 'form-control'
})` 
    margin: 5px ; 
`
const Button= styled.button` margin:5px; `

const InputText= styled.button.attrs({
    className: 'btn btn-primary'
})` 
    margin: 15px 15px 15px 5px; 
`
const CancelButton= styled.button` margin:5px; `

///Cancell button do not do anything except back to list
const InputText= styled.a.attrs({
    className: 'btn btn-danger'
})` 
    margin: 15px 15px 15px 5px; 
`
class AlbumInsert extends Component{
    constructor(props){
        super(props)
        this.state={
            // 3fileds
            album:'',
            artist:'',
            year:'',
            artwork:''
        }
    }
    render(){
        const {album, artist,year}=this.state;
        return(

        )
    }
}