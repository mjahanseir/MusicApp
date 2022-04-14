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
/////////////////// Create a components


class UpdateAlbum extends Component{
    updateUser= event =>{
        event.preventDefault()
        window.location.href=`music/update/${this.props.id}`
    }
    render(){
        return <Update onClick={this.updateUser}>Update</Update>
    }
}


class DeleteAlbum extends Component{
    deleteUser= event =>{
        event.preventDefault()
        if(window.confirm(
            `Did you want to delete the album ${this.props.id} permanently?`
        )){
            /////////////////////////  npm install axios     "axios": "^0.26.1",
            /////////////////////////  do api/index and come back
            apis.deleteAlbumById(this.props.id);

            window.location.reload();

        }
    }
    render(){
        return <Update onClick={this.updateUser}>Update</Update>
    }
}



class AlbumList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            isLoading: false
        }
    }

    render(){
        const {albums, isLoading} = this.state;

        const columns = [
            {
                Header : 'Album Name',
                accessor : 'album',
                style: {'whiteSpace' : 'unset'},
                Cell: row=> <div style={{textAlign:"center"}}>{row.value}</div>
            },
            {
                Header : 'Artist Name',
                accessor : 'artist',
                style: {'whiteSpace' : 'unset'},
                Cell: row=> <div style={{textAlign:"center"}}>{row.value}</div>
            },
            {
                Header : 'Year Released',
                accessor : 'year',
                width:100,
                Cell: row=> <div style={{textAlign:"center"}}>{row.value}</div>
            },
            {
                Header : '',
                accessor : '',
                width:100,
                Cell:function(props){
                    return(
                        <span>
                                        <DeleteAlbum id={props.original._id} />
                                    </span>
                    )
                }
            },
            {
                Header : '',
                accessor : '',
                width:100,
                Cell:function(props){
                    return(
                        <span>
                                        <UpdateAlbum id={props.original._id} />
                                    </span>
                    )
                }
            },
        ]



        let showTable = true
        if(!albums.length){
            showTable= false;
        }


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