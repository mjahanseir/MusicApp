import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../../../../../../Downloads/cstprojects-sdc2130-19ecc5dbffb7/MusicApp/music-app/src/components";
import { AlbumList, AlbumInsert, AlbumUpdate } from "../../../../../../Downloads/cstprojects-sdc2130-19ecc5dbffb7/MusicApp/music-app/src/pages";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/music/list" exact component={AlbumList} />
          <Route path="/music/create" exact component={AlbumInsert} />
          <Route path="/music/update/:id" exact component={AlbumUpdate} />
        </Switch>
      </Router>
    );
  }
}

export default App;
