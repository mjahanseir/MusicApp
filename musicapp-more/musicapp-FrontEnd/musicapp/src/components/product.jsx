import {Component} from "react";
import './product.css'
class Product extends Component{
    count =5;
    imageUrl="https://picsum.photos/200";
    render(){
        const list=[<li>item one</li>,<li>item two</li>,<li>item three</li>]
        const list2=['item one','item two','item three']
        return(
            <>
                <span className='m-2 text-info'> Product Name </span>
                <span className='m-2 badge bg-primary'> { this.format() } </span>
                <button className='m-2 btn btn-sm btn-success'>+</button>
                <button className='m-2 btn btn-sm btn-danger'>-</button>
                <button className='m-2 btn btn-sm btn-warning'>delete</button>

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

            </>
        )
    }
    format(){
        if(this.sount=== 0)
            return 'zero'
        else
            return this.count;
    }
}
export  default Product