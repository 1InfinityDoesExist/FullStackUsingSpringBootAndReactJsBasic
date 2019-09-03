import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteBuildingProjectById } from "../../Actions/buildingProjectActions";

class BuildingTaskItem extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(
      this,
      this.props.building_task.id
    );
  }

  onDeleteClick(building_id) {
    this.props.deleteBuildingProjectById(building_id);
  }

  render() {
    const { building_task } = this.props;
    let s = "/updateBuildingType/" + building_task.id;
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm="12">
              <Card color="success">
                <CardHeader>ID:{building_task.id}</CardHeader>
                <CardBody>
                  <CardTitle>
                    Building Type : {building_task.building_type}
                  </CardTitle>
                  <CardSubtitle>Email :{building_task.email}</CardSubtitle>
                  <CardText>Telephone:{building_task.telephone}</CardText>
                  <CardText>
                    Building Number:{building_task.building_number}
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Button color="danger" onClick={this.onDeleteClick}>
                    Delete
                  </Button>
                  <Button color="warning" tag="a" href={s}>
                    Update
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

BuildingTaskItem.propTypes = {
  deleteBuildingProjectById: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteBuildingProjectById }
)(BuildingTaskItem);
