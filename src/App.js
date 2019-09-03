import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./Store";
import NavBar from "./Components/NavBar";
import CreateBuildingProject from "./Components/BuildingProjet/CreateBuildingProject";
import BuildingProjectBoard from "./Components/BuildingProjectBoard";
import UpdateBuildingProject from "./Components/BuildingProjet/UpdateBuildingProject";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={BuildingProjectBoard} />
            <Route
              exact
              path="/addBuildingProject"
              component={CreateBuildingProject}
            />
            <Route
              exact
              path="/updateBuildingType/:pt_id"
              component={UpdateBuildingProject}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
