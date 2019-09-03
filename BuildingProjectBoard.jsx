import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardHeader, Button, Row, Col, Alert } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllBuildingProject } from "../Actions/buildingProjectActions";
import BuildingTaskItem from "../Components/BuildingProjet/BuildingTaskItem";
class BuildingProjectBoard extends Component {
  componentDidMount() {
    this.props.getAllBuildingProject();
  }
  render() {
    const { building_tasks } = this.props.building_tasks;
    let officeList = [];
    let appartmentList = [];
    let colonyList = [];
    let banglowList = [];

    const ProjectBoard = building_tasks => {
      if (building_tasks.length < 1) {
        return <Alert color="warning"> Sorry Nothing Found</Alert>;
      } else {
        const tasks = building_tasks.map(building_task => (
          <BuildingTaskItem
            key={building_task.id}
            building_task={building_task}
          />
        ));

        for (let iter = 0; iter < tasks.length; iter++) {
          if (tasks[iter].props.building_task.building_type === "Office") {
            officeList.push(tasks[iter]);
          }
          if (tasks[iter].props.building_task.building_type === "Appartment") {
            appartmentList.push(tasks[iter]);
          }
          if (tasks[iter].props.building_task.building_type === "Colony") {
            colonyList.push(tasks[iter]);
          }
          if (tasks[iter].props.building_task.building_type === "Banglow") {
            banglowList.push(tasks[iter]);
          }
        }
      }
      return (
        <React.Fragment>
          <Row>
            <Col sm="3">
              <Button color="primary" tag="a" href="/addBuildingProject">
                Add Building Project
              </Button>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col sm="3">
              <Card color="info">
                <CardHeader>Office</CardHeader>
              </Card>
              {officeList}
            </Col>
            <Col sm="3">
              <Card color="info">
                <CardHeader>Appartment</CardHeader>
              </Card>
              {appartmentList}
            </Col>
            <Col sm="3">
              <Card color="info">
                <CardHeader>Colony</CardHeader>
              </Card>
              {colonyList}
            </Col>
            <Col sm="3">
              <Card color="info">
                <CardHeader>Banglow</CardHeader>
              </Card>
            </Col>
            {banglowList}
          </Row>
        </React.Fragment>
      );
    };

    ProjectBoard(building_tasks);
    return (
      <React.Fragment>
        <Row>
          <Col sm="3">
            <Button color="primary" tag="a" href="/addBuildingProject">
              Add Building Project
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm="3">
            <Card color="info">
              <CardHeader>Office</CardHeader>
            </Card>
            {officeList}
          </Col>
          <Col sm="3">
            <Card color="info">
              <CardHeader>Appartment</CardHeader>
            </Card>
            {appartmentList}
          </Col>
          <Col sm="3">
            <Card color="info">
              <CardHeader>Colony</CardHeader>
            </Card>
            {colonyList}
          </Col>
          <Col sm="3">
            <Card color="info">
              <CardHeader>Banglow</CardHeader>
            </Card>
            {banglowList}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

BuildingProjectBoard.propTypes = {
  getAllBuildingProject: PropTypes.func.isRequired,
  building_tasks: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  building_tasks: state.building_task
});
export default connect(
  mapStateToProps,
  { getAllBuildingProject }
)(BuildingProjectBoard);
