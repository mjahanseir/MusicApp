import React, { Component } from "react";
import ReactTable from "react-table";
import styled from "styled-components";
import "react-table/react-table.css";
import apis from "../api";

/////////////////////////set wrapper and other styles
/////////////////////////Wrapper component for
const Wrapper = styled.div`padding: 0 40px 0 40px;`;

// div component for the update button for each row
const Update = styled.div`
  color: #0000ff;
  cursor: pointer;
`;

// div component for the delete button in each row

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;
/////////////////////////////////////////////////////////
/////////////////// Create a components
// update React components containing the above div as a button

class UpdateAlbum extends Component {
    updateUser = (event) => {
        event.preventDefault();
        window.location.href = `/music/update/${this.props.id}`;
    };
    render() {
        return <Update onClick={this.updateUser}>Update</Update>;
    }
}

// delete React component containing the above delete div
class DeleteAlbum extends Component {
    deleteUser = (event) => {
        event.preventDefault();
        if (
            window.confirm(
                `Did you want to delete the album ${this.props.id} permanently?`
            )
        ) {
            /////////////////////////  npm install axios     "axios": "^0.26.1",
            /////////////////////////  do api/index and come back
            // invoke the update view for the current row -> this.props

            apis.deleteAlbumById(this.props.id);

            window.location.reload();
        }
    };
    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>;
    }
}

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            isLoading: false,
        };
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////// 1- use/access api to get album list
    /////////////////// 2- use life cycle method for data load component DID MOUNT
    ///////////////////         - access api to get array of ALBUMS
    ///////////////////         - Populate this.stat.albums

    ///////////////////  3- render()
    ///////////////////     - get a copy of this.state
    ///////////////////     - create columns for react-table
    ///////////////////     - const columns=[
    ///////////////////                       {
    ///////////////////                         header      -> column header
    ///////////////////                         accessor    -> data filed we want to display
    ///////////////////                         style
    ///////////////////                         width
    ///////////////////                         cell        -> specify who we plug in data for a cell
    ///////////////////                        }
    ///////////////////                      ]

    ///////////////////                      in return section show data

    ///////////////////                   ___________________________________________
    ///////////////////                   |   name    artist   year                  |
    ///////////////////                   |__________________________________________|
    ///////////////////                                               buttons components

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // execute after component render
    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await apis.getAllAlbums().then((albums) => {
            this.setState({
                albums: albums.data.data,
                isLoading: false,
            });
        });
    };
    render() {
        // get data from state
        const { albums, isLoading } = this.state;

        //set up columns for the react table
        // requires Header and accessor for the column header text and field the column is displaying
        const columns = [
            {
                Header: "Album Name",
                accessor: "album",
                style: { whiteSpace: "unset" },
                //specify a row of data to display
                Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
            },
            {
                Header: "Artist Name",
                accessor: "artist",
                style: { whiteSpace: "unset" },
                Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
            },
            {
                Header: "Year Released",
                accessor: "year",
                width: 100,
                Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
            },
            {
                Header: "",
                accessor: "",
                width: 100,
                Cell: function (props) {
                    return (
                        <span>
              <DeleteAlbum id={props.original._id} />
            </span>
                    );
                },
            },
            {
                Header: "",
                accessor: "",
                width: 100,
                // in this case, cell is component
                Cell: function (props) {
                    return (
                        <span>
              <UpdateAlbum id={props.original._id} />
            </span>
                    );
                },
            },
        ];

        let showTable = true;
        if (!albums.length) {
            showTable = false;
        }

        return (
            <Wrapper>
                {showTable && (
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
        );
    }
}
export default AlbumList;
