import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Label, FormGroup, Input, Button } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createBuildingInstance } from "../../Actions/buildingProjectActions";

class CreateBuildingProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      building_type: "",
      building_number: "",
      email: "",
      establishment_date: "",
      telephone: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const new_buildingProject = {
      building_type: this.state.building_type,
      building_number: this.state.building_number,
      email: this.state.email,
      establishment_date: this.state.establishment_date,
      telephone: this.state.telephone
    };
    this.props.createBuildingInstance(new_buildingProject, this.props.history);
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="3">
            <Button color="primary" tag="a" href="/">
              Bact To Home
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm="2"></Col>
          <Col>
            <h3>Add Building Project Detials</h3>
          </Col>
        </Row>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col sm="4">
              <FormGroup>
                <Label for="Email">Email</Label>
              </FormGroup>
            </Col>
            <Col sm="7">
              <FormGroup>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <FormGroup>
                <Label for="building_number">Building_Number</Label>
              </FormGroup>
            </Col>
            <Col sm="7">
              <FormGroup>
                <Input
                  type="number"
                  id="building_number"
                  name="building_number"
                  placeholder="Enter Building Number"
                  value={this.state.building_number}
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm="4">
              <FormGroup>
                <Label for="telephone_number">Telephone Number</Label>
              </FormGroup>
            </Col>
            <Col sm="7">
              <Input
                type="text"
                name="telephone"
                id="telephone"
                placeholder="Enter Telephone Number"
                value={this.state.telephone}
                onChange={this.onChange}
                required
              ></Input>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <FormGroup>
                <Label for="building_type">Building_Type</Label>
              </FormGroup>
            </Col>
            <Col sm="7">
              <Input
                type="select"
                name="building_type"
                id="building_type"
                placeholder="Building Type"
                value={this.state.building_type}
                onChange={this.onChange}
                required
              >
                <option>Select One </option>
                <option>Office</option>
                <option>Appartment</option>
                <option>Colony</option>
                <option>Banglow</option>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <FormGroup>
                <Label for="establishment_date">Establishment Date</Label>
              </FormGroup>
            </Col>
            <Col sm="7">
              <Input
                type="string"
                name="establishment_date"
                id="establishment_date"
                placeholder="Enter Date of Establishment"
                value={this.state.establishment_date}
                onChange={this.onChange}
              ></Input>
            </Col>
          </Row>
          <Row>
            <Col sm="4"></Col>
            <Col sm="2">
              <FormGroup>
                <Button color="primary">Save Instace</Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    );
  }
}

CreateBuildingProject.propType = {
  errors: PropTypes.object.isRequired,
  createBuildingInstance: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createBuildingInstance }
)(CreateBuildingProject);
