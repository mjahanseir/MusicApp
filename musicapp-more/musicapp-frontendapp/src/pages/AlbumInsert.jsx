import React, { Component } from "react";
import apis from "../api";
import styled from "styled-components";

const Title = styled.h1.attrs({
    className: "h1",
})``;

const Wrapper = styled.div.attrs({
    className: "form-group",
})`
  margin: 0 30px;
`;

///////lable input and setting up
const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
    className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
    className: "btn btn-primary",
})`
  margin: 15px 15px 15px 5px;
`;

///Cancell button do not do anything except back to list
const CancelButton = styled.a.attrs({
    className: "btn btn-danger",
})`
  margin: 15px 15px 15px 5px;
`;
class AlbumInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 3fileds
            album: "",
            artist: "",
            year: "",
            artwork: "",
        };
    }

    /////////////////CREATE HANDLE

    handleChangeInputName = async (event) => {
        const album = event.target.value;
        this.setState({ album });
    };

    handleChangeInputArtist = async (event) => {
        const artist = event.target.value;
        this.setState({ artist });
    };

    handleChangeInputYear = async (event) => {
        const year = event.target.validity.valid
            ? event.target.value
            : this.state.year;
        this.setState({ year });
    };
    handleInsertAlbum = async (event) => {
        const { album, artist, year } = this.state;
        const artwork = "";
        const payload = { album, artist, year, artwork };

        await apis.insertAlbum(payload).then((res) => {
            window.alert("Album added successfully");
            this.setState({
                album: "",
                artist: "",
                year: "",
                artwork: "",
            });
            this.props.history.push("/music/list");
        });
    };

    //////////////////////////////////////
    render() {
        const { album, artist, year } = this.state;
        return (
            <Wrapper>
                <Title>Create Album</Title>

                <Label>Album Name:</Label>
                <InputText
                    type="text"
                    value={album}
                    onChange={this.handleChangeInputName}
                />

                <Label>Artist Name:</Label>
                <InputText
                    type="text"
                    value={artist}
                    onChange={this.handleChangeInputArtist}
                />

                <Label>Release Year:</Label>
                <InputText
                    type="text"
                    value={year}
                    onChange={this.handleChangeInputYear}
                />

                <Button onClick={this.handleInsertAlbum}>Add Album</Button>
                <CancelButton href={"/music/list"}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}
export default AlbumInsert;
