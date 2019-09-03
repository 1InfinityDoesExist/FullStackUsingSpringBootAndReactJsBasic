import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="warning" light expand="md">
          <NavbarBrand tag="a" href="/">
            BuildingProject
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag="a" href="https://www.facebook.com">
                  Facebook
                </NavLink>
                <NavLink tag="a" href="https://www.gmail.com">
                  Google_Gmail
                </NavLink>
                <NavLink tag="a" href="https://www.twitter.com">
                  Twitter
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
