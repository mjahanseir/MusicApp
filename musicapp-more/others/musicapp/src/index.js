// import React from "react";
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Product from './components/functional/product'
import Products from './components/products'
import ReactDom from 'react-dom'
// const  element = <h1>Hello world</h1>

ReactDom.render(<Products/> , document.getElementById('root'))
