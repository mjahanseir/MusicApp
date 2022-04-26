import React,{Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"Mike",
            Age:18,
            data:[
                {
                    "id":1,
                    "name":"Dave",
                    "age":"20"
                },
                {
                    "id":2,
                    "name":"Gilbert",
                    "age":"30"},
                {
                    "id":3,
                    "name":"Nathan",
                    "age":"25"
                }
            ]
        }
    }
    render() {
        return (
                 <table>
                    <tbody>
                    {this.state.data.map((person,i) => <TableRow key={i} dad={person} />)}

                    </tbody>
                </table>


        );
    }
}

class TableRow extends Component{
    render(){
        return(
            <tr>
                <td><h1> { this.props.dad.id }</h1> </td>
                <td> { this.props.dad.name }</td>
                <td> { this.props.dad.age }</td>

            </tr>

        )
    }

}
App.defaultProps={
    pName:"Jack",
    pAge:"12"
}
export default App;