import {Component} from "react";
import './product.css'
class Product extends Component{
    state={
    count :5,
        productName:'laptop'

    }
    // imageUrl="https://picsum.photos/200";
    render(){
        // const list=[<li>item one</li>,<li>item two</li>,<li>item three</li>]
        // const list2=['item one','item two','item three']
        return(
            <div>
                <span className='m-2 text-info'> {this.state.productName}</span>
                <span className='m-2 badge bg-primary'> { this.format() } </span>
                <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-danger'>-</button>
                <button onClick={()=>this.handleDelete(55)} className='m-2 btn btn-sm btn-warning'>delete</button>

                {/*region*/}
                {/*<img src={this.imageUrl} alt=""/>*/}

                {/*<ul>{list}</ul>*/}
                {/*<ul>*/}
                {/*    { list2.map (*/}
                {/*        (   item, index) =>*/}
                {/*            <li  key={index} > {item} </li>  )   }*/}
                {/*</ul>*/}

                {/*{this.count !== 0 ? (*/}
                {/*    <>*/}
                {/*        <span className='m-2 text-info'>Product name</span>*/}
                {/*        <span className='m-2 badge bg-primary'> {this.count === 0 ? 'zero' : this.count} </span>*/}
                {/*        <button className='m-2 btn btn-sm btn-success'>+</button>*/}
                {/*        <button className='m-2 btn btn-sm btn-danger'>-</button>*/}
                {/*        <button className='m-2 btn btn-sm btn-warning'>delete</button>*/}
                {/*    </>*/}
                {/*) : (*/}
                {/*    <h1> THERE IS NO PRODUCT</h1>*/}
                {/*)*/}
                {/*}*/}
                {/*endregion*/}

            </div>
        )
    }
    handleIncrement=()=>{
        const count= this.state.count
        const {count2}= this.state.count
        this.setState({count: count2 + 1})
    }
handleDecrement= ()=>{
    const {count2}= this.state.count
    this.setState({count: count2 + 1})
}
handleDelete= (itemNumber)=>{
        console.log(itemNumber)
}
    format(){
        if(this.state.count=== 0)
            return 'zero'
        else
            return this.state.count;
    }
}
export  default Product