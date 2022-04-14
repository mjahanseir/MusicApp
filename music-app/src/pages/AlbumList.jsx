import React, {Component} from 'react'
import ReactTable from 'react-table'
import styled  from 'styled-components'
import 'react-table/react-table.css'
import apis from'../api'

/////////////////////////set wrapper and other styles
const Wrapper =  styled.div`padding: 0 40px 0 40px;`
const Update =  styled.div`
    color:#0000ff;
    cursor:pointer;
`
const Delete =  styled.div`
    color:#ff0000;
    cursor: pointer;
`
/////////////////////////////////////////////////////////




class AlbumList extends Component{
    constructor(props){
        super(props)
        this.state={
            albums: [],
            isLoading:false
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////


    render(){

        return(
            <Wrapper>
                { showTable && (
                    <ReactTable
                        data={albums}
                        columns={columns}
                        isLoading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOption={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}
export default AlbumList;