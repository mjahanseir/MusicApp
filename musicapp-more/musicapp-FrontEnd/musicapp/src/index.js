import React from "react";
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product'
import ReactDom from 'react-dom'
// const  element = <h1>Hello world</h1>

ReactDom.render(<Product/> , document.getElementById('root'))
